import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Portal from "./portal";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      {path !== "/portal" && <Navbar />}
      <Component {...pageProps} />
      {path !== "/portal" && <Footer />}
    </>
  );
}
