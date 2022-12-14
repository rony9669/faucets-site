import React, { useState } from "react";
import Table from "react-bootstrap/Table";

const Tables = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState("");
  const handleClick = () => {
    setShow(show);
    if (!show) {
      setShow(true);
      setShow2(false);
    }
  };
  const handleClick2 = () => {
    if (!show2) {
      setShow2(true);
      setShow(false);
    }
  };
  return (
    <div>
      <span className="fw-bold mt-2 mb-3">Request History</span>
      <div className="  w-100 d-flex flex-lg-row gap-3">
        <div>
          <button
            className={` me-2 mt-2 mb-2 btn ${
              show ? "btn-primary" : "btn-outline-info"
            }`}
            onClick={handleClick}
          >
            ETH Transaction History
          </button>
          <button
            className={`me-2 mt-2 mb-2  btn ${
              show2 ? "btn-primary" : "btn-outline-info"
            }`}
            onClick={handleClick2}
          >
            TestLink Transaction History
          </button>
          <Table bordered className={` ${show ? "d-block" : "d-none"}`}>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12:30 AM</td>
                <td>487</td>
                <td>4s8er5s5fe57rjmxnfuewrurks</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:30 AM</td>
                <td>875</td>
                <td>sf7s7ers4e7r7wser</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:30 AM</td>
                <td>797</td>
                <td>se4s7er7</td>
              </tr>
            </tbody>
          </Table>

          <Table bordered className={`  ${show2 ? "d-block" : "d-none"}`}>
            <thead>
              <tr>
                <th>Sr</th>
                <th>Time</th>
                <th>Amount</th>
                <th>Hash</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>08:30 AM</td>
                <td>748</td>
                <td>7s7effkeurusue4</td>
              </tr>
              <tr>
                <td>2</td>
                <td>10:23 AM</td>
                <td>974</td>
                <td>sfe7r7sr4fer</td>
              </tr>
              <tr>
                <td>3</td>
                <td>11:10 AM</td>
                <td>874</td>
                <td>s4e7s8er</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Tables;
