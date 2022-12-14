import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Tables from "../Table/Table";
import ReCAPTCHA from "react-google-recaptcha";
import "../../App.css";
import { IoWarning } from "react-icons/io5";

const Content = ({ defaults }) => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // console.log(defaults);
  return (
    <Container className="mt-5">
      <Row>
        <h3 className="primary-color fw-bold">Request testnet LINK</h3>
        <h6 className="mt-2 text-muted">
          Get testnet LINK for an account on one of the supported blockchain
          testnets so you can <br /> create and test your own oracle and
          Chainlinked smart contract
        </h6>
        <div className="bg-light mt-4 border-opacity-25 border-dark">
          <p className="fs-xml">
            <IoWarning className="primary-color" /> Your wallet is connected to
            <span className="fw-bold"> {defaults?.name}</span>, so you are
            requesting
            <span className="fw-bold"> {defaults?.name}</span> Link/ETH.
          </p>
          <Col>
            <Form>
              <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                <Form.Label className="primary-color fw-bold">
                  Wallet Address
                </Form.Label>
                <Form.Control type="text" placeholder="Wallet Address..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className="primary-color fw-bold">
                  Request Type
                </Form.Label>{" "}
                <br />
                <input
                  type="text"
                  placeholder="20 Test Link"
                  className="me-3 mb-2 p-1"
                  disabled
                />
                <input
                  type="text"
                  placeholder="0.5 ETH"
                  className="me-3 mb-2 p-1"
                  disabled
                />
              </Form.Group>
              <ReCAPTCHA
                className="mt-2 mb-2"
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={onChange}
              />
              <button className="px-3 py-2 border-0 primary-color-bg mt-2 mb-3">
                Send Request
              </button>
            </Form>
          </Col>
          <Tables />
        </div>
      </Row>
    </Container>
  );
};

export default Content;
