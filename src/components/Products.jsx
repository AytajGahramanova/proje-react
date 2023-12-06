import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../src/index.css";

const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setData(res?.data);
    // console.log(res?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  const filtered = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <p style={{ fontSize: "2rem", marginBottom: 10 }}>Products</p>
        </div>
        <div>
          <input
            style={{
              padding: "10px 20px",
              marginBottom: 20,
              marginRight: "65%",
            }}
            type="text"
            placeholder="Search for title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {filtered.slice(0, 4).map((item, index) => (
          <div key={index}>
            <div className="cards-wrapper">
              <div className="image">
                <img src={item.image} alt="" style={{ width: "120px" }} />
              </div>
              <p style={{ marginBottom: 10 }}>{item.price} ₼</p>
              <p style={{ maxWidth: "200px", marginBottom: 20 }}>
                {item.title}
              </p>
              <button
                style={{
                  padding: "10px 20px",
                  cursor: "pointer",
                  margin: "auto",
                }}
                onClick={() => navigate(`/products/${item.id}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
