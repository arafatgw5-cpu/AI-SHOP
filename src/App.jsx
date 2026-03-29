import './App.css'

import Navber from './componant/Navber/Navber'
import Models from './componant/Models'
import Banner from "./componant/Banner"
import Footer from './componant/Footer';

const getModels = async () => {
  const res = await fetch("/Models.json");
  return res.json();
};

const modalPromise = getModels();

const App = () => {
  return (
    <div>
      <Navber />
      <Banner />
      <Models modalPromise={modalPromise} />
      <Footer />
    </div>
  );
};

export default App;