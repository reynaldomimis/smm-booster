import React, { useEffect, useState } from "react";
import CButton from "../../components/CButton/CButton";
import CInput from "../../components/CInput/CInput";
import ReactLoading from "react-loading";
import "./styled.scss";
import servicesController from "../../hooks/servicesController";

const PNewOrder = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState(false);

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

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangeServices = (event) => {
    setSelectedService(event.target.value);
    setType(!type);
  };

  const words = selectedService
    .substring(0, selectedService.lastIndexOf("-"))
    .split(" | ");
  const cleanedWords = words.map((word) => word.replace(/[^\x00-\x7F]/g, ""));

  const filteredData = data.filter(
    (item) => item.category === selectedCategory || !selectedCategory
  );

  const uniqueCategories = [...new Set(data.map((item) => item.category))];

  return (
    <div className="new-order" data-aos="fade-right">
      {loading ? (
        <>
          <span className="title">Category</span>
          <div className="list-services1">
            <select value={selectedCategory} onChange={handleChangeCategory}>
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <span className="title">Service</span>
          <div className="list-services2">
            <select value={selectedService} onChange={handleChangeServices}>
              {filteredData.map((service, i) => {
                const rate = service.rate * 90;
                const amount = rate.toFixed(2);
                return (
                  <option key={i}>
                    {service.service} {service.name} - ${amount} per 1000
                  </option>
                );
              })}
            </select>
          </div>
          <span className="title">Description</span>
          <article>
            <ul className="features">
              {cleanedWords.length > 0 &&
                cleanedWords.map((word, index) => {
                  const [firstWord, secondWord] = word.split(" - ");
                  return (
                    <li key={index}>
                      {type && (
                        <>
                          ☉ {firstWord.replace(/\d{4} /, "")} {secondWord}
                        </>
                      )}
                    </li>
                  );
                })}
            </ul>
            <h5 style={{ color: "#bdd3e7" }}>📌 Notes</h5>
            <ul className="warning">
              <li>
                🟠 Depending on the intensity of service, start times may vary.
              </li>
              <li>
                🟠 Your account must not be private, otherwise no action will be
                taken.
              </li>
              <li>
                🟠 Do not take the second order on the same link before the
                order is finished!
              </li>
            </ul>
          </article>
          <CInput label="Link" type="url" />
          <CInput label="Quantity" type="text" />
          <span className="min">Min: 100 - Max: 1000000000</span>
          <CInput label="Average Time" placeholder="2 minutes" type="text" />
          <CInput label="Charge" type="text" value="$0.00" readonly />
          <CButton label="Submit" type="button" />)
        </>
      ) : (
        <div style={{ margin: "0 auto" }}>
          <ReactLoading type="bars" color="#87c5ff" height={667} width={150} />
        </div>
      )}
    </div>
  );
};

export default PNewOrder;
