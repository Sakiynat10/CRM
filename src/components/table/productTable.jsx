import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import StudentCard from "../card/ProductCard";
import { Fragment, memo, useState } from "react";

const ProductTable = ({
  products,
  editProduct,
  deleteProduct,
  search,
  category,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
//   const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  console.log(npage);
  let results = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  ).slice(firstIndex, lastIndex);
  if (category !== "all") {
    results = results.filter((product) => product.category.includes(category));
  }

  console.log("ProductTable");
  return (
    <Fragment>
      <Table striped bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Description</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.length !== 0 ? (
            results.map((product, i) => (
              <StudentCard
                editProduct={editProduct}
                deleteProduct={deleteProduct}
                key={product.id}
                order={1 + i}
                {...product}
              />
            ))
          ) : (
            <tr>
              <td className="text-center" colSpan={7}>
                No products
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prePage}>
              Prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item ${currentPage === n ? "active"  : ""}`} key={i}>
              <button className="page-link" onClick={() => changeCPage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </Fragment>
  )
  
  function prePage(){
    if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
    }
  }

  function changeCPage(id){
    setCurrentPage(id)
  }

  function nextPage(){
    if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
    }
  }

  
};

ProductTable.propTypes = {
  products: PropTypes.array,
  editProduct: PropTypes.func,
  deleteProduct: PropTypes.func,
  search: PropTypes.string,
  category: PropTypes.string,
};

const MemoProductTable = memo(ProductTable);

export default MemoProductTable;
