import React from 'react'
import Navigation from '../Navigation/navigation'
import './carousel.css'
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {useState} from 'react'
function CarouselComponent(){
    const [picCount, setPicCount] = useState(0);
    const onChange =(val: number)=>{
        setPicCount(val);
    }
    // const [slides, setSlides] = useState({
    //     [
    //         (<img src="../../public/gator1.png"/>)
    //     ]
    // })
    return(
        
        <div>
            Carousel is heree
            <Carousel
                value={picCount}
                onChange={onChange}
                slides={[
                    (<img src='./gator3.png'></img>),
                    (<img src='./gator3.png'></img>),
                    // (<img src={imageTwo} />),
                    // (<img src={imageThree} />),
                  ]}
                  plugins={[
                    'arrows',
                    'clickToChange'
                  ]}
                  />


              <Carousel
                    plugins={[
                        'clickToChange',
                        'centered',
                        {
                        resolve: slidesToShowPlugin,
                        options: {
                        numberOfSlides: 2
                        }
                        },
                    ]}
                    >
                    <img src='./gator3.png'></img>
                    <img src='./gator3.png'></img>
                    <img src='./gator3.png'></img>
        </Carousel>     
        </div>
    )
}
// C:\Users\Mochiko\swamphacks7\public\gator3.png
// C:\Users\Mochiko\swamphacks7\src\Carousel\carousel.tsx
export default CarouselComponent;
