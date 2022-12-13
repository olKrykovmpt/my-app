import "./App.css";

import Header from "./components-turs/header/Header";
import Bunner from "./components-turs/banner/Banner";
import Carts from "./components-turs/carts/Carts";
import Footer from "./components-turs/footer/Footer";
import Overlay from "./components-turs/overlay/Overlay";
import React, { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Favorites from "./components-turs/favorites/Favorites";
import Home from "./components-turs/Home";
import Form from "./components-turs/form.jsx/Form";

export const AppContext = React.createContext({});

function App() {
  const [tours, setTours] = React.useState([]);

  const [overlayOpen, setOverlayOpen] = React.useState(false);

  const [overlayItems, setOverlayItems] = React.useState([]);

  const [search, setSearch] = React.useState("");

  const [favorites, setFavorites] = React.useState([]);

  // React.useEffect(()=>{
  //   fetch('http:localhost:8070/api/product').then((res)=>{
  //     return res.json()
  //   }).then((myJson)=>{
  //     setTours(myJson)
  //   })
  // }, [])

  React.useEffect(() => {
    async function axiosData() {
      const toursData = await axios.get(
        "https://638f3aa14ddca317d7f21cb0.mockapi.io/tours"
      );
      setTours(toursData.data);

      const cartData = await axios.get(
        "https://638f3aa14ddca317d7f21cb0.mockapi.io/cart"
      );
      setOverlayItems(cartData.data);

      const favoritesData = await axios.get(
        "https://638f3aa14ddca317d7f21cb0.mockapi.io/favorites"
      );
      setFavorites(favoritesData.data);
    }

    axiosData();
  }, []);

  const deleteItem = (id) => {
    console.log(id);
    axios.delete(`https://638f3aa14ddca317d7f21cb0.mockapi.io/cart/${id}`);
    setOverlayItems((objDelete) => objDelete.filter((item) => item.id !== id));
  };

  const isAdded = (myId) => {
    return overlayItems.some((odjIsAdded) => odjIsAdded.myId === myId);
  };

  const isFav = (myId) => {
    return favorites.some((objIsFav) => objIsFav.myId === myId);
  };

  return (
    <AppContext.Provider
      value={{
        tours,
        setTours,
        overlayItems,
        setOverlayItems,
        favorites,
        setFavorites,
        isAdded,
        isFav,
      }}
    >
      <div className="app">
        {overlayOpen ? (
          <Overlay
            total_price={overlayItems.reduce(
              (elements = overlayItems.length, obj) => elements + obj.price,
              0
            )}
            overlayProp={overlayItems}
            closeOverlay={() => setOverlayOpen(false)}
            deleteItem={deleteItem}
          />
        ) : null}

        <Header
          openOverlay={() => setOverlayOpen(true)}
          overlayItems={overlayItems}
        />

        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                item={tours}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route
            path="/"
            element={
              <Home
                item={tours}
                overlayItems={overlayItems}
                setOverlayItems={setOverlayItems}
                setSearch={setSearch}
                search={search}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          <Route path="/form" element={<Form />} />
        </Routes>


        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
