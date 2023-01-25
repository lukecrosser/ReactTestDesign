import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Chat from './Chat';
import Card from './Card';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Navbar />
      <App />
      <div className="mx-auto w-fit text-center flex justify-between items-center gap-20 -mt-20">
          <Chat />
          <h1 className="mb-5 text-black text-5xl font-bold">Say goodbye to Web Design!<p className="text-xs mt-5 text-black font-light">If you sign with us you'll never have to deal with hiring new designers every year and trying to keep your website up to date.
              We will take care of everything for you!</p></h1>
      </div>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
