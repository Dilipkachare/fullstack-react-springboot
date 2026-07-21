import products from "../data/products";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";
import developerImage from "../assets/stickers/developer.png";
import breakImage from "../assets/stickers/break.png";
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
      <div className="container d-flex justify-content-center align-items-center gap-4">
            <div className="card" style={{"width": "18rem"}}>
  <img src={developerImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
   <div className="card" style={{"width": "18rem"}}>
  <img src={breakImage} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="row justify-content-center text-center mt-3 gap-3">
      <div className="col-3 border p-3 bg-warning text-white">coloumn 1</div>
      <div className="col-3 border p-3 bg-success text-white">coloumn 2</div>
      <div className="col-3 border p-3 bg-danger text-white">coloumn 3</div>
    </div>
    <div className="container col-8 justify-content-center mt-3 border border-dark rounded">
    <form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We ll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
      <PageHeading title="Explore Eazy Stickers!">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect htmlFor any occasion!
      </PageHeading>
      <ProductListings products={products} />
    </div>
    </>
  );
}
