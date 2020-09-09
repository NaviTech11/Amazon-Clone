import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/THBY_S2_02111_GWBleedingHero_1500x600_PRE_Final_en-US_PVD5224._CB410800060_.jpg" alt="Hero"/>

                <div className="home_row">
                    <Product
                     id={111444}
                     title="The Labyrinth of Solitude: The Other Mexico, Return to the Labyrinth of Solitude, Mexico and the United States, the Philanthropic Ogre"
                     price={17.56}
                     image={"https://images-na.ssl-images-amazon.com/images/I/51ZEnuUubNL._SX331_BO1,204,203,200_.jpg"}
                     rating={5}
                     />
                    <Product
                     id={111454}
                     title="HUHETA Face Mask Reusable with 7 Filters, Sports Mask with 2 Breathing Valves, Activated Carbon Black Mask, Adjustable Breathable Face Mask"
                     price={19.99}
                     image={"https://images-na.ssl-images-amazon.com/images/I/71uupRLL4kL._AC_SL1500_.jpg"}
                     rating={4}
                     />
                    
                </div>
                <div className="home_row">
                <Product
                     id={222555}
                     title="Vandoren CR1935 Bb Clarinet V.12 Reeds Strength 3.5; Box of 10"
                     price={19.99}
                     image={"https://images-na.ssl-images-amazon.com/images/I/6113zbneIFL._AC_SL1024_.jpg"}
                     rating={5}
                     />
                    <Product
                     id={222454}
                     title="Chopin: Etudes (English, French and German Edition) (German) Paperback –"
                     price={30.95}
                     image={"https://images-na.ssl-images-amazon.com/images/I/41o+ubBX1XL._SX373_BO1,204,203,200_.jpg"}
                     rating={5}
                     />
                     <Product
                     id={222354}
                     title="USB Microphone,Fifine Metal Condenser Recording Microphone"
                     price={45.99}
                     image={"https://images-na.ssl-images-amazon.com/images/I/61u4FYXctPL._AC_SL1200_.jpg"}
                     rating={4}
                     />
                </div>
                <div className="home_row">
                <Product
                    id={333454}
                     title="VIOTEK GNV29CB Ultrawide Curved 29-Inch Gaming Monitor | 120Hz UWFHD 21:9 w/Immersive 1200R VA Panel | FreeSync, G-SYNC-Compatible | 3-Year Warranty, 0-Tolerance Dead Pixel Policy (VESA)"
                     price={219.99}
                     image={"https://images-na.ssl-images-amazon.com/images/I/714ZJ9Z%2B4QL._AC_SL1500_.jpg"}
                     rating={4}
                     />
                </div>
            </div>
            
        </div>
    )
}

export default Home;
