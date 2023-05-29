import React from "react";
import styleFor from "./Style.css";
import { Link } from "react-router-dom";
const Card = ({ data, page }) => {
  let display;

  if (data) {
    display = data.map((e) => {
      return (
        <Link
          to={`${page}${e.id}`}
          style={{ textDecoration: "none" }}
          className="col-lg-4 col-12 position-relative mt-4 text-dark "
          key={e.id}
        >
          <div className="d-flex justify-content-center flex-column  ">
            <img src={e.image} alt="wiki" className="img-fluid" />
            <div className="content">
              <div className="fs-3 fw-bold mb-4 mt-2">{e.name}</div>
              <div className="">
                Last Location:
                <div className="fs-5">{e.location.name}</div>
              </div>
            </div>
          </div>

          {(() => {
            if (e.status === "Dead") {
              return (
                <div
                  className={`${styleFor.badge} position-absolute badge bg-danger`}
                >
                  {e.status}
                </div>
              );
            } else if (e.status === "Alive") {
              return (
                <div
                  className={`${styleFor.badge} position-absolute badge bg-success`}
                >
                  {e.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styleFor.badge} position-absolute badge bg-secondary`}
                >
                  {e.status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = <h3>NO CHRACTERS FOUND MAAM :/</h3>;
  }

  return <>{display}</>;
};

export default Card;
