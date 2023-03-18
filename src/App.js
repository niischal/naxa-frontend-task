import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import "@fontsource/montserrat";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getServicesFetch } from "./serviceState";
import ServiceContentOdd from "./components/ServiceContentOdd";
import ServiceContentEven from "./components/ServiceContentEven";
import { Link } from "react-scroll";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const services = useSelector((state) => state.service.services);
  const dispatch = useDispatch();

  const sortedServices = [...services];
  sortedServices.sort((a, b) => {
    return a.service_order - b.service_order;
  });

  useEffect(() => {
    dispatch(getServicesFetch());
  }, []);
  return (
    <>
      <div className="App" id="top">
        <Header />
      </div>
      <main className="main-content">
        <section className="banner servicer-banner md-banner">
          <div className="banner-caption">
            <div className="container">
              <div className="caption-content">
                <h2 className="mb-4">SERVICES</h2>
                <h1 className="mb-5" style={{ color: "#333132" }}>
                  At <span style={{ color: "#124af4" }}>NAXA</span>, we work on{" "}
                  <span style={{ color: "#124af4" }}>ideas</span>; ideas that
                  can provide{" "}
                  <span style={{ color: "#124af4" }}>simple solutions</span> to{" "}
                  <span style={{ color: "#124af4" }}>complex problems</span>.
                </h1>
                <p className="banner-para">
                  We work as a team to generate, explore, build and validate
                  ideas. We also contextualize innovations around the world to
                  find the best fitting solutions to local problems.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="sticky-nav">
          <div className="service-nav">
            {sortedServices.map((service) => {
              return (
                <Link
                  key={service.id}
                  className="service-title"
                  activeClass="active"
                  smooth
                  spy
                  to={service.id.toString()}
                >
                  <span>{service.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <section className="section service-content">
          <div className="container" style={{ marginBottom: "70px" }}>
            <div className="content-wrap">
              {sortedServices.map((service) => {
                return service.service_order % 2 === 1 ? (
                  <ServiceContentOdd service={service} key={service.id} />
                ) : (
                  <ServiceContentEven service={service} key={service.id} />
                );
              })}
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
    </>
  );
}

export default App;
