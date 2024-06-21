import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { useCart } from "../context/AppContext";

function SingleCard({ title, imageUrl, price, info }) {
  const product = {
    title,
    imageUrl,
    price,
    info,
  };

  const { dispatch } = useCart();

  function handleClick() {
    dispatch({ type: "addToCart", payload: product });

    console.log(product);
  }

  return (
    <Card style={{ width: "18rem" }} className="m-4">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <Button variant="primary" onClick={handleClick}>
          {price}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;
