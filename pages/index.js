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
      <SeoHead title='Bright IT Hub' />

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
