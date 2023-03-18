import React from "react";
import parse from "html-react-parser";

function ServiceContentEven({ service }) {
  return (
    <>
      <section
        className="row"
        id={service.id}
        key={service.id}
        style={{ padding: "80px 0px" }}
      >
        <div className="col-lg-6 col-md-12">
          <div className="grid-info">
            <figure className="icon">
              <img
                className="icon"
                src={service.photo}
                alt={`icon for  ${service.title}`}
              />
            </figure>
            <h3>{service.title}</h3>
            <div className="grid-para">{parse(service.description1)}</div>
            <div className="para-highlight">{parse(service.description2)}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <figure className="figure-left">
            {" "}
            <img
              className="photo"
              src={service.icon}
              alt={service.title}
              style={{
                height: "unset",
                maxWidth: "none",
                width: "30rem",
              }}
            />
          </figure>
        </div>
      </section>
    </>
  );
}

export default ServiceContentEven;
