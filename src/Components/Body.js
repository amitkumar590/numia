import React, { useEffect } from "react";
import image1 from "../images/Screenshot_2023-08-09_at_3.00.53_PM-removebg-preview.png";
import image2 from "../images/sql.png";
import image3 from "../images/rpc.png";
import image4 from "../images/api.png";

const Body = () => {
  useEffect(() => {
    const productCards = document.querySelectorAll(".product-card");
    const body3Heading = document.querySelector(".body3-heading");
    const body4Heading = document.querySelector(".body4-heading");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    productCards.forEach((card) => {
      observer.observe(card);
    });

    observer.observe(body3Heading);
    observer.observe(body4Heading);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="body-container">
        <h1 className="body-heading">
          The Cosmos Data &amp; <br /> Development Platform
        </h1>
        <p className="body-text">
          Infrastructure to BUILD, MONITOR and GROW your project in Cosmos.
        </p>
        <p className="body-end">Trusted by the top projects in Cosmos</p>

        <div className="image-row">
          <img src={image1} alt="Image 1" className="image" />
        </div>
      </div>

      <div className="body2">
        <hr className="hr-body2" />
        <h4 className="body2-heading">
          Scalable infrastructure to build Cosmos apps fast and easy.
          <span className="body2-link">
            {" "}
            <a className="body2-link" href="#">
              Get Started
            </a>
          </span>
        </h4>
        <p className="body2-text">
          Numia is an on-chain Data Indexer and RPC provider that gives you the
          infrastructure to build apps fast and easy.
          <br /> You can forget about managing complicated infrastructure or
          running complicated RPC queries for things that should be simple.{" "}
          <br />
        </p>
        <hr />
      </div>

      <div className="body3">
        <h1 className="body3-heading">Products</h1>
        <div className="product-cards">
          <div className="product-card">
            <h3>SQL Access</h3>
            <img className="products" src={image2} alt="SQL Access" />
            <p>Query on-chain data</p>
          </div>
          <div className="product-card">
            <h3>RPC Access</h3>
            <img className="products" src={image3} alt="RPC Access" />
            <p>Scalable and fast RPCs</p>
          </div>
          <div className="product-card">
            <h3>Advanced API</h3>
            <img className="products" src={image4} alt="Advanced API" />
            <p>Aggregated API endpoints</p>
          </div>
        </div>
      </div>

      <div className="body4">
        <h1 className="body4-heading">Built for all types of Projects</h1>
        <div className="product-cards">
          <div className="product-card">
            <h3>App Chains</h3>
            <p>Extend your chain functionality with powerful Analytics and reliable APIs</p>
          </div>
          <div className="product-card">
            <h3>Wallets</h3>
            <p>Forget about managing your own infrastructure and focus on building a great wallet experience.</p>
          </div>
          <div className="product-card">
            <h3>Validators</h3>
            <p>Measure delegator loyalty and build tools to engage with them.</p>
          </div>
          <div className="product-card">
            <h3>Analysts</h3>
            <p>Dive deep into Cosmos on-chain data and run complex analysis.</p>
          </div>
          <div className="product-card">
            <h3>MEV</h3>
            <p>Access on-chain data and necessary infrastructure.</p>
          </div>
          <div className="product-card">
            <h3>Smart Contracts</h3>
            <p>Obtain on-chain data and get custom endpoints for your smart contract.</p>
          </div>
          <div className="product-card">
            <h3>Defi Apps</h3>
            <p>Forget about complex RPC queries and request all data from one single platform.</p>
          </div>
          <div className="product-card">
            <h3>IBC Apps</h3>
            <p>The most comprehensive data set for IBC chains and scalable IBC infrastructure.</p>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Body;
