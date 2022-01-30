import React, { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { ChakraProvider, Progress } from "@chakra-ui/react";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const [number, setNumber] = useState(0);

  Router.events.on("routeChangeStart", () => {
    setLoading(true);
    setNumber(10);
    setNumber(20);
    setNumber(30);
    setNumber(40);
    setNumber(50);
    setNumber(60);
    setNumber(70);
  });
  Router.events.on("routeChangeComplete", () => {
    setNumber(100);
    setLoading(false);
  });
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossorigin="anonymous"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      />

      <ChakraProvider>
        <div>
          {loading && (
            <Progress
              size="xs"
              isIndeterminate
              pos="fixed"
              w="100%"
              zIndex={2}
              top={0}
              height={1}
              colorScheme={"red"}
            />
          )}
        </div>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
