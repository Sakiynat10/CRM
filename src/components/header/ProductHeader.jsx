import { InputGroup, Form } from "react-bootstrap";
import { categories } from "../../data/categories";
import PropTypes from "prop-types";
import { memo } from "react";

const ProductHeader = ({search ,  setSearch , category , setCategory}) => {
  console.log("ProductHeader");
  return (
    <InputGroup className="mb-3">
      <Form.Control value={search} onChange={(e) => setSearch(e.target.value.trim().toLowerCase())} placeholder="Searching products"/>
      <InputGroup.Text>
        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All products</option>
          {categories.map((category) => (
            <option key={category} value={category}> 
              {category}
            </option>
          ))}
        </Form.Select>
      </InputGroup.Text>
    </InputGroup>
  );
};


ProductHeader.propTypes = {
    search: PropTypes.string , 
    setSearch: PropTypes.func,
    category: PropTypes.string ,
    setCategory: PropTypes.func
}

const MemoProductHeader = memo(ProductHeader)

export default MemoProductHeader;
