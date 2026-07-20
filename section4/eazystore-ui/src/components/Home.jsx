import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";



export default function Home() {
  const isActive = Math.random() > 0.5;

  return (
    <>
      {/*
      <h1
        className={`my-heading ${
          isActive ? "primary-color" : "secondary-color"
        }`}
      >
      Welcome to Eazy Stickers!
      </h1>
      */}
   {/* <h1 style={h1styles}>Welcome to Eazy Stickers!</h1> */}
  
    <div className="home-container">
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
    </>
  );
}
