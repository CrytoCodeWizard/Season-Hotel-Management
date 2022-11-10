import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import axios from "axios";
import { Image, Text, Box, Center } from '@chakra-ui/react'
import { useEffect, useState } from 'react'



const HomePageSlider = () => {
    const [Cities, setCities] = useState([])
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    useEffect(() => {
        axios
            .get('https://636b1db9b10125b78feba23b.mockapi.io/delhi')
            .then((res) => {
                setCities(res.data)
            }).catch((er) => {
                console.log(er)
            })
    }, [])

    return (
        <Center>
            <Box w={'80%'} >
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                    itemClass="carousel-item-padding-60-px"
                >

                    {
                        Cities.map((el) => {
                            return (<Box p='20px' bg='blackAlpha.100'>
                                <Image w='90%' marginLeft="auto" marginRight="auto" h='200px' src={el.img1} />
                                <Center>
                                    <Text fontSize='20px' fontWeight='bold'>City : {el.city}</Text>
                                </Center>
                                <Text >{el.heading1}</Text>
                                <Text >{el.price1}</Text>
                                <br />
                            </Box>)
                        })
                    }
                </Carousel>
            </Box>
        </Center>
    )
}

export default HomePageSlider
