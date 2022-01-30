import React, { useState } from "react";
import axios from "axios";
import Item from "../components/Item";

export const getStaticProps = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  // console.log(data);
  return (
    <>
      <div className="container">
        <div className="row">
          {data.map((value) => {
            return (
              <>
                <div className="col-md-4 col-12">
                  <Item value={value} />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
