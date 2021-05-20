import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
         <link rel="icon" href="/favicon.png" />
        <title>Health Plus </title>
        <meta
          name="description"
          content="health clinic plus website made with tailwind css and next js"
        />
        
      </Head>

      {children}
    </div>
  );
}
