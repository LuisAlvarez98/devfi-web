import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import Menu from "../../img/menu.png";
import { Button } from "@chakra-ui/react";
import { RefObject } from "react";
const MenuWrapper = styled.div`
  .navbar-toggler-icon {
    background-image: url(${Menu});
  }
  .navbar-toggler {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
    box-shadow: none;
  }
`;
interface NavbarProps {
  shareRef: RefObject<HTMLDivElement>;
  collabRef: RefObject<HTMLDivElement>;
  objectRef: RefObject<HTMLDivElement>;
}

const NavbarComponent = (props: NavbarProps) => {
  const gotoShare = () => {
    if (props.shareRef.current) {
      props.shareRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const gotoCollab = () => {
    if (props.collabRef.current) {
      props.collabRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const gotoObject = () => {
    if (props.objectRef.current) {
      props.objectRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{
          backgroundColor: "transparent",
          zIndex: 1000,
          position: "absolute",
          paddingTop: 50,
          paddingLeft: 50,
          paddingRight: 50,
          width: "100%",
        }}
      >
        <Navbar.Brand style={{ color: "white" }}>
          <img alt="logo" width="42px" height="42px" />
        </Navbar.Brand>
        <MenuWrapper>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </MenuWrapper>
        <Navbar.Collapse className="justify-content-center">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoShare}
            >
              ¿Por qué Devfi?
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoCollab}
            >
              ¿Cómo funciona?
            </Nav.Link>
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
              onClick={gotoObject}
            >
              Nuestro objetivo
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end navbar-right">
            <Nav.Link
              style={{
                color: "white",
                alignSelf: "center",
              }}
            >
              Iniciar sesión
            </Nav.Link>
            <Nav.Link style={{ color: "white", alignSelf: "center" }}>
              {" "}
              <Button colorScheme="blue" size="md">
                Registrate
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
