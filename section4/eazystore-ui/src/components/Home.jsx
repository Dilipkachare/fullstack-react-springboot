import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import BootstrapButton from "./BootstrapButton";



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
      <div className="container" col-6>
      <BootstrapButton text="Submit" type="primary" />
      <BootstrapButton text="Save" type="secondary" />
      <BootstrapButton text="Delete" type="danger" />
      <BootstrapButton text="Submit" type="primary" />
      </div>
      <div>
        <div className="d-grid gap-2 col-8 mx-auto"></div>
        <div className="alert alert-primary text-center" role="alert">
  A simple primary alert—check it out!
</div>
<div className="alert alert-secondary text-center text-center" role="alert">
  A simple secondary alert—check it out!
</div>
<div className="alert alert-success text-center" role="alert">
  A simple success alert—check it out!
</div>
<div className="alert alert-danger text-center" role="alert">
  A simple danger alert—check it out!

  <button 
  type="button" 
  className="btn-close"
   data-bs-dismiss="alert"
    aria-label="Close"
    ></button>
</div>
      </div>
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
    </>
  );
}
