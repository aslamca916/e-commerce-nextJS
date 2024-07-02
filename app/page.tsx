import Image from "next/image";
import Header from "./components/header";
import Banner from "./components/Banner";
import FeaturedProductListing from "./components/FeaturedProduct";
import Link from "next/link";
import ProductsPage from "./products/page";

export default function Home() {
  return (
    <div>
      <Banner />
      {/* <ProductsPage/> */}
      <FeaturedProductListing />
    </div>
  );
}
