import React from "react";
import Link from "next/link";
import Rating from "react-rating";

const Item = ({ value }) => {
  //   console.log(value);
  return (
    <div
      className="card"
      style={{ width: "18rem", marginTop: "2rem", height: "27rem" }}
    >
      <img
        src={value.image}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.category}</p>
        <Rating
          initialRating={value.rating.rate}
          emptySymbol="fa fa-star"
          fullSymbol="fa fa-star"
          readonly
        />
        <h6 className="card-text"> $ {value.price}</h6>
        <Link href={`${value.id}`}>
          <button className="btn btn-primary" style={{ marginTop: "10%" }}>
            Go somewhere
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
