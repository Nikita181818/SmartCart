import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollections/NewCollection.jsx'
import NewsLetter from '../Components/NewsLetter/NewsLetter.jsx'
import Footer from '../Components/Footer/Footer.jsx'

const Shop = () => {
  
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLetter/>
        <Footer/>
      
    </div>
  )
}

export default Shop
