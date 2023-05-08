import type { AppProps } from "next/app";
import "../../public/css/app.css";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  // alert("ami bridge ami always call hoi")
 console.log("ami always call hoi");
 
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
