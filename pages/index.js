<<<<<<< HEAD
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import ProductItem from '../components/Productitem';
import styles from '../styles/Home.module.css';
import data from '../utils/data';
=======
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import ProductItem from "../components/Productitem";
import styles from "../styles/Home.module.css";
import data from "../utils/data";
>>>>>>> 1c01142d027ef2b646a2c575fd6a48a8c2ca60cc

export default function Home() {
  return (
    <Layout title="Home Page">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
