import PropTypes from "prop-types";
import "./product-card.scss"


const ProductCard = ({name , price , category ,quantity , description , order , id ,editProduct , deleteProduct}) => {
  return (
    <tr>
      <td>{order}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>{category}</td>
      <td>{quantity}{+quantity>= 1000 ? "t" : "kg"}</td>
      <td>{description}</td>
      <td className="text-end">
        <button onClick={() => deleteProduct(id)} className="btn btn-danger mb-2">Delete</button>
        <button onClick={() => editProduct(id)} className="btn btn-primary">Edit</button>
      </td>
    </tr>
  );
};

ProductCard.propTypes = {
    name: PropTypes.string ,
    price: PropTypes.string ,
    category: PropTypes.string ,
    quantity: PropTypes.string ,
    description: PropTypes.string ,
    order: PropTypes.number,
    id:PropTypes.string,
    editProduct:PropTypes.func,
    deleteProduct:PropTypes.func,
}

export default ProductCard;
