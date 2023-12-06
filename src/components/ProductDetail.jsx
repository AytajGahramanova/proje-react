import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const getProduct = async () => {
    try {
      const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      console.log(res?.data);
      setProduct(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="details"
        style={{
          border: "1px solid gray",
          width: "50rem",
          padding: "20px",
          marginTop: 40,
        }}
      >
        <img src={product.image} alt="" style={{ width: "10rem" }} />
        <p>
          <b>Id: </b>
          {product.id}
        </p>
        <p>
          <b>Title: </b>
          {product.title}
        </p>
        <p>
          <b>Price: </b>
          {product.price}
        </p>
        <p>
          <b>Rate: </b>
          {product.rating?.rate}
        </p>
        <p>
          <b>Count: </b>
          {product.rating?.count}
        </p>
        <p>
          <b>Category: </b>
          {product.category}
        </p>
        <br />
        <p>
          <b>Description: </b>
          {product.description}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
