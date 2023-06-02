import Head from 'next/head'
import Page from "../components/Page";
import Banner from "../components/Banner";
import { useEffect, useRef, useState } from "react";


export default function Home() {
  return (
    <>
      <Head>
        <title>Maxtec - Mais ambiental todos os dias</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Page className="home" bodyClass="preload">
          <Banner />
      </Page>
    </>
  )
}
