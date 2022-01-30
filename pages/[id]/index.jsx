import axios from "axios";
import React from "react";
import Item from "../../components/Item";

export async function getStaticPaths() {
  const { data } = await axios.get("https://fakestoreapi.com/products");

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products/${params.id}`
  );

  return { props: { data } };
}

const index = ({ data }) => {
  console.log(data);
  return (
    <div>
      <Item value={data} />
    </div>
  );
};

export default index;
