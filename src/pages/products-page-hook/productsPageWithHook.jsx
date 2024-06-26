import {  useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import ProductForm from "../../components/form/ProductForm";
import ProductHeader from "../../components/header/ProductHeader";
import ProductTable from "../../components/table/productTable";
import useCrud from "../../hooks/use-crud/useCrud";
import "./productPage.scss"

const ProductPageWithHook = () => {
  const nameRef = useRef();
  const {
    data: product,
    allData: products ,
    selected,
    validated,
    resetForm: resetProduct,
    handleData: handleProduct,
    handleSubmit,
    editData: editProduct,
    deleteData: deleteProduct,
  } = useCrud({localStorageKey:"products" , initialData:
  {name: "",
  price: "",
  category: "Fruits",
  quantity: "",
  description: "",} ,targetRef:nameRef }) ;

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const productFormProps = {
    resetProduct,
    selected,
    product,
    handleProduct,
    validated,
    handleSubmit,
  };

  const productHeaderProps = {
    category,
    setCategory,
    search,
    setSearch,
  };

  const productTableProps = {
    category,
    search,
    editProduct,
    deleteProduct,
    products,
  };

  return (
    <Container className="pt-3">
      <Row style={{gap:"40px" , display:"flex" , width:"100%" , flexDirection:"column" , alignItems:"center"}}>
        <Col className="form-content" md="8">
          <ProductForm ref={nameRef} {...productFormProps} />
        </Col>
        <Col className="table-content" md="12">
          <ProductHeader {...productHeaderProps} />
          <ProductTable {...productTableProps} />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductPageWithHook;
