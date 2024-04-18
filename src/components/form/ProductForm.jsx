import { forwardRef, memo } from "react";
import { Button, Form } from "react-bootstrap";
import PropTypes from "prop-types";

import { categories } from "../../data/categories";

const ProductForm = forwardRef(({ validated, handleSubmit, product, handleProduct , selected , resetProduct } , ref) => {
    console.log("ProductForm");
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          ref={ref}
          required
          onChange={handleProduct}
          value={product.name}
          type="text"
          placeholder="Name"
        />
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.price}
          type="text"
          placeholder="Price"
        />
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select
          aria-label="Default select example"
          value={product.category}
          onChange={handleProduct}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="quantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.quantity}
          type="text"
          placeholder="Quantity"
        />
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          required
          onChange={handleProduct}
          value={product.description}
          type="text"
          placeholder="Description"
        />
        <Form.Control.Feedback type="invalid">
          Please fill!
        </Form.Control.Feedback>
      </Form.Group>
      <div className="d-flex justify-content-between">
        {selected !== null ?<Button type="submit">Save product</Button> :(<Button type="submit">Add product</Button>)}
        <Button onClick={resetProduct}>Reset field</Button>
      </div>
    </Form>
  );
});


ProductForm.displayName = "ProductForm"

ProductForm.propTypes = {
  validated: PropTypes.bool,
  handleSubmit: PropTypes.func,
  product: PropTypes.object,
  handleProduct: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.string , PropTypes.object]),
  resetProduct:PropTypes.func,
};

const MemoProductForm = memo(ProductForm)

export default MemoProductForm;
