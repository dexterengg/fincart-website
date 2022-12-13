import React, { useEffect, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Image from "next/image";
import nav, { navListMobile } from "../nav";
import classnames from "classnames";
import Link from "next/link";
import toggleimg from "../public/Group105.svg";
const url = "https://app.fincart.com/user/login";
import "animate.css";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeNav = () => {
    setIsOpen(!isOpen);
  };

  //   useEffect(() => {
  //    Animation()
  // },[isOpen])
  const handleLogin = () => {
    window.open("https://app.fincart.com/user/login", "_blank");
  };
  console.log(props, "props");
  return (
    <div>
      <Container id="header" fluid className="myContainer fixedMenu">
        <Navbar color="light" className="bg-light p-0" expand="md">
          <NavbarBrand>
            <Link href="/">
              <Image
                src="/homelogo.svg"
                /* className="logo" */ width={130}
                height={54}
                className="cursor"
              />
            </Link>
          </NavbarBrand>
          {/* <NavbarToggler  /> */}

          <Image
            src={toggleimg}
            className="img-fluid toggler"
            onClick={toggle}
            height={20}
            width={20}
          />
          <Collapse navbar className="ms-5 ps-5">
            <Nav className="ms-auto" navbar>
              {nav.map((obj, id) => {
                return (
                  <NavItem key={id} className="pe-5">
                    <Link href={obj.url}>
                      <NavLink
                        className={classnames({
                          orange: props.route == obj.url,
                          navcolor: true,
                        })}
                      >
                        <div
                          className={classnames({
                            active:
                              obj.url === props.route ||
                              (props.route.includes("localities") &&
                                obj.url.includes("localities")) ||
                              (props.route.includes("blogs") &&
                                obj.url.includes("blogs")),
                            hover: true,
                          })}
                        >
                          {obj.name}
                        </div>
                      </NavLink>
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
          <Collapse navbar>
            <div className="ms-auto">
              <NavItem className="d-flex justify-content-center align-items-center loginBtn">
                {/* <Link href={url} passHref >  */}

                <NavLink onClick={() => handleLogin()}>
                  <div className="Log">Log in</div>
                </NavLink>

                {/* </Link>button button-two */}
              </NavItem>
            </div>
            <NavItem className="d-flex justify-content-center align-items-center">
              <Link href="/becomeagent ">
                <Button href="" className=" AGENT">
                  <div
                    className={classnames({
                      advisor:
                        "/becomeadvisors" === props.route ||
                        (props.route.includes("localities") &&
                          obj.url.includes("localities")) ||
                        props.route.includes(
                          "blogs"
                        ) /* && obj.url.includes("blogs") */,
                      hover: true,
                    })}
                  >
                    BECOME A PARTNER
                  </div>
                </Button>
              </Link>
            </NavItem>
          </Collapse>
        </Navbar>
      </Container>
      {/* Mobile Menu  */}
      {isOpen && (
        <div
          id="mySidenav"
          className={classnames({
            sidenav: true,
          
            "animate__animated animate__backInUp animate__zoomIn animate__faster animate__delay-0s	":
              isOpen,
          })}
        >
          {/* <div className="mobilelogo">
            <Image
              className="slide-logo img-fluid"
              src="/homelogo.svg"
              alt="img"
              width={100}
              height={50}
            />
          </div> */}
          <a className="closebtn" onClick={closeNav}>
            <Image
              src="/cross.svg"
              className="img-fluid"
              width={25}
              height={25}
            />
          </a>
          <div className="navbar-nav mt-2 px-4 w-100">
            <NavItem className="navcolor">
              <Link href="/">
                <NavLink
                  onClick={closeNav}
                  className="orange orange animate__animated animate__fadeInDown animate__zoomIn animate__faster animate__delay-1s animate__transition-0.8s"
                >
                  Home
                </NavLink>
              </Link>
            </NavItem>
            {navListMobile.map((obj, id) => {
              return obj.child == true ? (
                <NavItem key={id} className="">
                  <NavLink className="orange animate__animated animate__fadeInDown animate__zoomIn animate__faster animate__delay-1s">
                    {obj.name}
                  </NavLink>
                  {obj.children.map((child, id) => (
                    <Link key={id} href={child.url}>
                      <div onClick={closeNav} className="sub-menu">
                        {child.name}
                      </div>
                    </Link>
                  ))}
                </NavItem>
              ) : (
                <NavItem key={id} onClick={closeNav}>
                  <Link href={obj.url}>
                    <NavLink className="orange animate__animated animate__fadeInDown animate__zoomIn animate__faster animate__delay-1s">
                      {obj.name}
                    </NavLink>
                  </Link>
                </NavItem>
              );
            })}
            <NavItem className="mt-3" onClick={closeNav}>
              <Link
                href=""
                className="orange animate__animated animate__fadeInDown animate__zoomIn animate__faster animate__delay-1s"
                onClick={() => handleLogin()}
              >
                <Button className="AGENTS animate__animated animate__fadeInDown animate__faster animate__delay-1s">
                  Log in
                </Button>
              </Link>
            </NavItem>
            <NavItem className="mt-3" onClick={closeNav}>
              <Link className="orange " href="/becomeagent">
                <Button className=" AGENT animate__animated animate__fadeInDown animate__zoomIn animate__faster animate__delay-1s">
                  Become an agent
                </Button>
              </Link>
            </NavItem>
          </div>
        </div>
      )}
      {/* {
        isOpen && (
          <div className="classynav">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li className="cn-dropdown-item has-down"><a href="#">About Company</a>
                              
                                    <span className="dd-trigger"></span></li>
                                  
                                    <li><a href="Goals.html"> Goals </a></li>
                                    
                                    
                                    
                                     <li><a href="JoinUs.html"> Join Us </a></li> 
                                    <li><a href="https://app.fincart.com/user/login"> Login </a></li> 
                                    
                                       <li><a href="https://www.fincart.com/blog/"> Blog </a></li>

                                </ul>
                            </div>
        )
      } */}
    </div>
  );
};

export default Header;
