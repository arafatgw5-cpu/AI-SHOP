import './App.css'

import Navber from './componant/Navber/Navber'
import Models from './componant/Models'
import Banner from "./componant/Banner"
import Footer from './componant/Footer';
import Cart from './componant/Cart';
import { useState } from 'react';

const getModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
};

const modalPromise = getModels();

const App = () => {
  const [activeTab, setActiveTab] = useState("model")
  const [carts, setCarts] = useState([])

  return (
    <div>
      <Navber />
      <Banner />

      <div className="tabs tabs-box justify-center">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-full w-40"
          aria-label="Models"
          defaultChecked
          onClick={() => setActiveTab("model")}
        />

        <input
          type="radio"
          name="my_tabs_6"
          className="tab rounded-full w-40"
          aria-label="Cart"
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && (
        <Models
          modalPromise={modalPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}

      {activeTab === "cart" && <Cart carts={carts} />}

      <Footer />
    </div>
  );
};

export default App;