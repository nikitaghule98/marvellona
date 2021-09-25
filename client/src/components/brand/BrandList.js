import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getBrands } from "../../functions/brand";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getBrands().then((res) => {
      setBrands(res.data);
      setLoading(false);
    });
  }, []);

  const showBrands = () =>
    brands.map((s) => (
      <div
        key={s._id}
        className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
      >
        <Link to={`/brand/${s.slug}`}>{s.name}</Link>
      </div>
    ));

  return (
    <div className="container">
      <div className="row">
        {loading ? <h4 className="text-center">Loading...</h4> : showBrands()}
      </div>
    </div>
  );
};

export default BrandList;
