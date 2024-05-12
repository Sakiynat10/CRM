import { useCallback, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { v4 } from "uuid";

import ProductForm from "../../components/form/ProductForm";
import ProductHeader from "../../components/header/ProductHeader";
import ProductTable from "../../components/table/productTable";

const ProductPage = () => {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "Fruits",
    quantity: "",
    description: "",
  });
  const [validated, setValidated] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const nameRef = useRef();

  const resetProduct = useCallback(() => {
    setProduct({
      name: "",
      price: "",
      category: "Fruits",
      quantity: "",
      description: "",
    });
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const form = event.currentTarget;
    //adding and editing
    if (form.checkValidity()) {
      let newProduct = { ...product, id: v4() };
      let newProducts;
      if (selected === null) {
        newProducts = [...products, newProduct];
      } else {
        newProducts = products.map((product) => {
          if (product.id === selected) {
            return newProduct;
          } else {
            return product;
          }
        });
      }
      nameRef.current.focus();
      setProducts(newProducts);
      resetProduct();
      setSelected(null);
      localStorage.setItem("products", JSON.stringify(newProducts));
    } else {
      setValidated(true);
    }
  } , [ resetProduct,product , products , selected]);

  const handleProduct = useCallback((e) => {
    setProduct({ ...product, [e.target.id]: e.target.value });
  } , [product]);

  const editProduct = useCallback((id) => {
    let product = products.find((el) => el.id === id);
    setSelected(id);
    setProduct(product);
  }, [products]);

  
  const deleteProduct = useCallback((id) => {
    let newProducts = products.filter((product) => product.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  }, [products]);

  

  const productFormProps = {
    resetProduct,
    selected,
    product,
    handleProduct,
    validated,
    handleSubmit,
  };

  const productHeaderProps = {
    category ,
    setCategory ,
    search ,
    setSearch ,
  }

  const productTableProps = {
    category ,
    search ,
    editProduct ,
    deleteProduct ,
    products, 
  }

  return (
    <Container className="pt-3">
      <Row>
        <Col md="4">
          <ProductForm ref={nameRef} {...productFormProps} />
        </Col>
        <Col md="8">
          <ProductHeader
            {...productHeaderProps}
          />
          <ProductTable
            {...productTableProps}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPage;
