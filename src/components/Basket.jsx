import React, { useEffect, useState } from "react";
import axios from "axios";

const Basket = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index}>
            {item.name}
            {item.phone}
            {item.email}
            {item.textarea}
          </div>
        );
      })}
    </div>
  );
};

export default Basket;
