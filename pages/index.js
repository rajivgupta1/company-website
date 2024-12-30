import Feature from "../components/Feature";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import About from "../components/About";
import Testimoni from "../components/Testimoni";
import GetQuote from "../components/GetQuote";

export default function Home() {
  return (
    <>
      <SeoHead title='LaslesVPN Landing Page' />
      <Layout>
        <Hero />
        <Services />
        <Testimoni />
        <Feature />
        <About />
        <GetQuote />
      </Layout>
    </>
  );
}
