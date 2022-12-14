import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Modal from "react-bootstrap/Modal";
import "./TopNavbar.css";
import "../../App.css";
import { IoWalletOutline } from "react-icons/io5";
import { BiUserCircle } from "react-icons/bi";

const TopNavbar = ({ products, defaults, setDefaults }) => {
  const [show, setShow] = useState(false);

  const handleClick = (data) => {
    setDefaults(data);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="primary-color fs-3 fw-bolder ms-4">
          Faucets
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Dropdown className="me-2 mt-2 mb-2">
            <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
              <span>
                <img
                  className="me-2"
                  src={defaults?.img}
                  alt=""
                  style={{ height: 18, width: 20 }}
                />
              </span>
              {defaults?.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {products.map((product) => (
                <Dropdown.Item
                  key={product.id}
                  onClick={() => handleClick(product)}
                >
                  <span>
                    <img
                      className="me-2"
                      src={product.img}
                      alt=""
                      style={{ height: 18, width: 20 }}
                    />
                  </span>
                  {product.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <button
              className="px-4 py-2 mt-2 mb-2 primary-color border-0 fw-bold"
              onClick={handleShow}
            >
              <IoWalletOutline /> Connect Wallet
            </button>
            <Modal
              show={show}
              onHide={handleClose}
              animation={false}
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Connect your wallet</Modal.Title>
              </Modal.Header>
              <div
                className="d-flex flex flex-sm-column flex-md-column flex-lg-row justify-content-center align-items-center gap-2  "
                style={{ height: 250 }}
              >
                <div className="shadow">
                  <img
                    style={{ height: 140, width: 200 }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/800px-MetaMask_Fox.svg.png"
                    alt=""
                  />
                  <h5 className="text-center primary-color">Meta Mask</h5>
                </div>
                <div className="shadow ">
                  <img
                    style={{ height: 140, width: 200 }}
                    src="https://i.postimg.cc/vTXJSG2W/download.png"
                    alt=""
                  />
                  <h5 className="text-center primary-color">Wallet Connect</h5>
                </div>
              </div>
            </Modal>
          </div>
          <div>
            <p className=" ms-2 px-2 py-2 mt-2 mb-2  ">
              <BiUserCircle className="fs-1" />
            </p>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
