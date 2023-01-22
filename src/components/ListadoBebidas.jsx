import useBebidas from "../hooks/useBebidas";
import Bebida from "./Bebida";
import { Row, Col } from "react-bootstrap";

const ListadoBebidas = () => {
  const { bebidas } = useBebidas();

  return (
    <Row className="mt-5">
      {bebidas?.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebidas;
