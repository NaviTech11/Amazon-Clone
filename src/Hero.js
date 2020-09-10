import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@material-ui/core';
import "./Hero.css";


function Hero(props)
{
    var items = [
        {
            
            image: "https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg"
        },
        {
            
            image: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        },
        {
            image:"https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MWU1ZmU5NWQt/MWU1ZmU5NWQt-NDFmYjg4NGIt-w1500._CB406893558_.jpg"
        }
    ]

    return (
        <Carousel className="caroussel">
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (

            <img nameClass="hero_image" src={props.item.image} alt="hero image 1" />
       
    )
}

export default Hero;