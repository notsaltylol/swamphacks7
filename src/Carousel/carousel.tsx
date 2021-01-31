import React from 'react'
import Navigation from '../Navigation/navigation'
import './carousel.css'
import {Carousel} from 'react-bootstrap'
import {useState} from 'react'

const test_caught = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function CarouselComponent(){
    const [showAll, setShowAll] = useState(true);
    const [picCount, setPicCount] = useState(20);
    const onChange = (val: number)=>{
        setPicCount(val);
    }
    const [index, setIndex] = useState(0);
    //const handleSelect = (selectedIndex, e) => {
    //    setIndex(selectedIndex);
    //};
    // const [slides, setSlides] = useState({
    //     [
    //         (<img src="../../public/gator1.png"/>)
    //     ]
    // })
    return(
        <div className="carousel-container">
            <Navigation />
            {showAll ?
                <Carousel>
                {
                    [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19].map((i) => {
                        return(<Carousel.Item key={i}>
                            <img className="d-block w-50 cimage" 
                            src={"gator" + (i+1).toString() + ".png"}
                            />
                            {console.log(i)}
                        </Carousel.Item>
                        )
                    })
                }
                </Carousel>
               : picCount === 0?
                <Carousel>
                    <div></div>
                    {
                        test_caught.map((i) => {
                            return(<Carousel.Item key={i}>
                                <img className="d-block w-100 cimage" src={"gator" + (i+1).toString() + ".png"}/>
                            </Carousel.Item>
                            )
                        })
                    }
                </Carousel> : <h1>Come back after you catch some Gatormons!</h1>
                
            }
        </div>
    )
}
// C:\Users\Mochiko\swamphacks7\public\gator3.png
// C:\Users\Mochiko\swamphacks7\src\Carousel\carousel.tsx
export default CarouselComponent;