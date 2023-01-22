import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant={"top"}
          src={bebida.strDrinkThumb}
          alt={`imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Button
            className="w-100 text-uppercase mt-2"
            variant="success"
            onClick={() => {
              handleModalClick();
              handleBebidaIdClick(bebida.idDrink);
            }}>
            Ver Receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
