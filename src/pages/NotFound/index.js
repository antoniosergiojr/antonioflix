import React from "react";
import { Link } from "react-router-dom";
import Logo404 from "../../assets/img/Logo404.png";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Button from "../../components/Button";

const NotFound = () => (
  <React.Fragment>
    <Menu />
    <div style={{ textAlign: "center" }}>
      <Link to="/">
        <img
          className="Logo404"
          src={Logo404}
          alt="AntonioFlix Logo404"
          style={{ width: "50%" }}
        />
      </Link>
      <p style={{ fontSize: "50px" }}>Ops...página não encontrada!</p>
      <Button as={Link} to="/">
        Voltar
      </Button>
    </div>
    <Footer />
  </React.Fragment>
);

export default NotFound;
