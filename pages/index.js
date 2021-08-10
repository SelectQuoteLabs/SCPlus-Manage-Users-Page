import React from 'react';
import Head from 'next/head';
import { getSession } from 'next-auth/client';

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Head>
        <title>SelectQuote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="side_nav"></main>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
