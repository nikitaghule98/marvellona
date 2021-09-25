import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSellers";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";
import BrandList from "../components/brand/BrandList";
// import './homePage.css';
// import StickyFooter from "../components/footer/StickyFooter";

const Home = () => {
  return (
    <>
      <div className="jumbotron text-danger h1 font-weight-bold text-center" style={{backgroundColor:"black"}}>
        <Jumbotron text={["Latest Products", "New Arrivals", "Best Sellers"]} />
      </div>

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        New Arrivals
      </h4>
      <NewArrivals />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Best Sellers
      </h4>
      <BestSellers />

      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Categories
      </h4>
      <CategoryList />
{/* 
      <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Sub Categories
      </h4>
      <SubList />

      <h4 className="text-center p-3 mt-5 mb-5 display-3 jumbotron">
        Brands
      </h4>
      <BrandList /> */}
      <br />
      <br />
      {/* <h4>
        <StickyFooter />
      </h4> */}
    </>
  );
};

export default Home;
