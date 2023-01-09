import Head from "next/head";
import Arithmetic from "../../src/components/arithmetic";

export default function Index() {
  return (
    <>
      <Head>
        <title>Mental Arithmetic Practice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Arithmetic />
    </>
  );
}
