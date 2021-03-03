import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Mainpage from "./components/mainPage";
import Search from "./components/search";

function App() {
  const [images, setImages] = useState([]);

  let config = {
    headers: {
      Authorization: "Client-ID IJRt-mBllufm020DVasMh78kmADc_-D5ycrmEmMB2Wk"
    }
  };

  useEffect(() => {
    const getImages = async () => {
      const res = await axios.get(
        "https://api.unsplash.com/photos?page=1&per_page=20",
        config
      );
      setImages(res.data);
    };
    getImages();
  }, []);
  return (
    <Router>
      <Route path="/" exact>
        <Search setImages={setImages} config={config} />
        <Mainpage images={images} setImages={setImages} config={config} />
      </Route>
    </Router>
  );
}

export default App;
