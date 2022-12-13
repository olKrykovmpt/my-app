import React from "react"
import Bunner from "./banner/Banner"
import Carts from "./carts/Carts"
import TestSlider from "./testSlider"

const Home=(props)=>{
    return(
        <>
        <TestSlider/>
        <Bunner />
        <div className="text-section">
        <h2>TOURS FROM LIVE-TUR</h2>
        <p>
          The href attribute requires a valid value to be accessible. Provide a
          valid, navigable address as the href value.
        </p>
        <p>
          If you cannot provide a valid href, but still need the element to
          resemble a link, use a button and change it with appropriate styles.
        </p>
      </div>

      <Carts
        item={props.item}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        setSearch={props.setSearch}
        search={props.search}
        favorites={props.favorites}
        setFavorites={props.setFavorites}
      />
      </>
    )
}

export default Home;
