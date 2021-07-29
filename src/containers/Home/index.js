import React, { useEffect } from "react";
import Layout from "../../components/Layout";
import { Jumbotron } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Layout sidebar>
        {/* <FeaturedInfo /> */}
        {/* <h1>dddddddddddd</h1> */}
        {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> */}
        <div className="homeWidgets">
          {/* <WidgetSm/> */}
          {/* <WidgetLg/> */}
        </div>
      </Layout>
    </div>
  );
};

export default Home;
