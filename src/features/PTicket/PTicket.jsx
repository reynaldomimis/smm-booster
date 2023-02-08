import React from "react";
import CButton from "../../components/CButton/CButton";
import CInput from "../../components/CInput/CInput";
import CSearch from "../../components/CSearch/CSearch";
import "./styled.scss";

const PTicket = () => {
  return (
    <div className="pticket">
      <div className="tform">
        <CInput forLabel="subject" label="Subject" />
        <label className="label" for="message">
          Comment
        </label>
        <textarea
          className="form-control"
          rows="5"
          id="message"
          placeholder="Write a message..."
        />
        <CButton label="Submit ticket" />
      </div>
      <header>
        <CSearch />
      </header>
      <table className="table table-hover table-borderless table-fit table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subject</th>
            <th>Status</th>
            <th>Last Update</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>758</td>
            <td>
              Supported In ReactJsssssssssssssssssssssssssssssssssssssssssssss
            </td>
            <td className="text-success"> Closed</td>
            <td>2023-01-01 09:49:39</td>
            <td>
              <button
                style={{ marginRight: "8px" }}
                type="button"
                className="btn btn-info btn-sm"
              >
                View
              </button>
              <button type="button" className="btn btn-danger btn-sm">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PTicket;
