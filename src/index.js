import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Chat from './Chat';
import Footer from './Footer';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Luo Designs Test Website</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="This could be your website! Contact us now!" content="Helmet application" />
    </Helmet>

  <React.StrictMode>
      <Navbar />
      <App />

      <div className="mx-auto w-fit lg:flex justify-around items-center -mt-20">
          <div className="hero-content">
          <Chat />
          </div>
          <h1 className="mb-5 lg:w-6/12 text-black text-5xl font-bold ">Say goodbye to Web Design!<p className="text-sm mt-5 text-black font-light py-6">If you sign with us you'll never have to deal
              with hiring new designers every year and trying to keep your website up to date.
              We will take care of everything for you!</p></h1>
      </div>


      <div className="mx-auto w-fit flex justify-between items-center mt-20">
          <div className="hero-content flex-col lg:flex-row-reverse inset-x-0 top-0">
              <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
              <div>
                  <h1 className="text-5xl text-black font-bold ">Say Hello to Luo Design!</h1>
                  <p className="py-6">We have learned that most business don't want to worry about web design. That is why we have developed the monthly subscription model! You finally have an affordable and hassle free solution for web design! </p>
                  <button className="btn btn-primary">Get Started</button>
              </div>
          </div>
      </div>


  <Footer />
  </React.StrictMode>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
