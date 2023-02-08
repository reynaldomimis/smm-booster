import React, { useEffect, useState } from "react";
import "./styled.scss";
import CSearch from "../../components/CSearch/CSearch";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Notes from "../../components/Notes/Notes";
import ReactLoading from "react-loading";
import servicesController from "../../hooks/servicesController";

const PServices = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(10);
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      servicesController
        .get("/")
        .then((response) => {
          setData(response.data);
          setLoading(!loading);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchData();
  }, []);

  const handleClick = () => {
    setStartIndex(endIndex);
    setEndIndex(endIndex + 10);
  };

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
    setStartIndex(0);
    setEndIndex(10);
  };

  const handleClose = () => setShow(false);
  const handleShow = (name) => {
    setShow(true);
    setName(name);
  };

  const filteredData = data.filter(
    (item) => item.category === selectedCategory || !selectedCategory
  );

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <>
      <div className="pservice">
        {loading ? (
          <>
            <header>
              <div className="list-pservice" data-aos="fade-right">
                <select
                  value={selectedCategory}
                  onChange={handleChangeCategory}
                >
                  <option value="">All Services</option>
                  {uniqueCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <CSearch />
            </header>
            <table className="table table-hover table-borderless table-fit table-responsive">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Service</th>
                  <th className="active">Rate per 1000</th>
                  <th className="active">Min order</th>
                  <th className="active">Max order</th>
                  <th className="active">Average time</th>
                  <th className="active">Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.slice(startIndex, endIndex).map((item) => (
                  <tr key={item.service}>
                    <td>{item.service}</td>
                    <td>{item.name}</td>
                    <td>{item.rate}</td>
                    <td>{item.min}</td>
                    <td>{item.max}</td>
                    <td>{item.max}</td>
                    <td>
                      <button
                        style={{ marginRight: "8px" }}
                        type="button"
                        className="btn btn-info btn-sm"
                        onClick={() => handleShow(item.name)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredData.length > endIndex && (
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-danger btn-md"
                onClick={handleClick}
              >
                Load More
              </button>
            )}
          </>
        ) : (
          <div style={{ margin: "0 auto" }}>
            <ReactLoading
              type="bars"
              color="#87c5ff"
              height={667}
              width={150}
            />
          </div>
        )}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="md"
      >
        <Modal.Header style={{ backgroundColor: "#1e202e", border: "none" }}>
          <Modal.Title style={{ color: "#87c5ff" }}>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#181a26", color: "#bdd3e7" }}>
          <Notes name={name} />
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#181a26", border: "none" }}>
          <Button style={{ width: "100%" }} variant="primary">
            Order Now
          </Button>
          <Button
            variant="secondary"
            style={{ width: "100%" }}
            onClick={handleClose}
          >
            Exit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PServices;
