// import React from 'react'
//  import {useState} from "react";
// import {Button,Box,Container,Heading,Stack,Input} from '@chakra-ui/react';

// const initState = {
//     name: "",
//     location: "",
//     price: "",
//     rating: "",
//     discription:"",
//   };

// const CreateHotal=()=> {
//  const [formData,setformData]=useState(initState)  
//  const [users, setUsers] = useState([]);


// const handleChange = (e) => {
//   const { value } = e.target;
// }
//   const handleSubmit = (e) => { 
//     e.preventDefault();
//     setUsers([...users, formData]);
//   };
//   const { name, location,price, rating, discription } = formData;

// return(
//     <Container>
//         <Heading>ADD HOTAL</Heading>
//         <br></br>
//         <br></br>
//         <Stack direction="column" gap="0.5rem">
//           <Box>
//             <Input type="name" placeholder="Hotal Name"  value={name}
//             onChange={handleChange}></Input>
//           </Box>
//           <br></br>
//           <Box>
//             <Input type="location" placeholder="Hotal Location"  value={location}
//              onChange={handleChange}></Input>
//           </Box>
//           <br></br>
//           <Box>
//             <Input type="price" placeholder="Hotal price"  value={price}
//            onChange={handleChange} ></Input>
//           </Box>
//           <br></br>
//           <Box>
//             <Input type="rating" placeholder="Hotal Rating" value={rating}
//            onChange={handleChange}></Input>
//           </Box>
//           <br></br>
//           <Box>
//             <Input type="discription" placeholder="Hotal Discription"  value={discription}
//              onChange={handleChange}></Input>
//           </Box>
//           <br></br>
//           <Button colorScheme='blue' onSubmit={handleSubmit}>Submit</Button>

//         </Stack>

//     </Container>
// )
// }


// export default CreateHotal;

import React from 'react'
import { Heading, Box, Input, Button, useToast } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateHotel = () => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [price, setPrice] = useState('')
    const [rating, setRating] = useState('')
    const [description, setDescription] = useState('')
    const toast = useToast()
const navigate = useNavigate()
    const handleSubmit = () => {
        let obj = {
            name,
            location,
            price,
            rating,
            description
        }
        axios
            .post(`https://636b1db9b10125b78feba23b.mockapi.io/${location}`, obj)
            .then(() => {
                toast({
                    title: `Hotel Created Successfully!!`,
                    status: "success",
                    duration: 1000,
                    position: "top",
                    isClosable: true,
                  })
                  navigate('/')
            }).catch(() => {
                alert("Page Not Found")
            })
    }

    return (
        <div style={{ display: 'flex' }}>
            <Box w='400px' fontSize='15px' margin='auto' >
                <Heading marginBottom='20px'>
                    Add Hotel
                </Heading>
                <Input m='15px' onChange={(e) => setName(e.target.value)} placeholder='Hotel Name ' />
                <Input m='15px' onChange={(e) => setLocation(e.target.value)} placeholder=' Hotel Location' />
                <Input m='15px' onChange={(e) => setPrice(e.target.value)} placeholder='Hotel Price ' />
                <Input m='15px' onChange={(e) => setRating(e.target.value)} placeholder='Hotel Rating' />
                <Input m='15px' onChange={(e) => setDescription(e.target.value)} placeholder='Hotel Description' />
                <Button onClick={handleSubmit} marginTop='10px' w='415px' color='white' colorScheme='blue' >Submit</Button>
            </Box>
        </div>
    )
}

export default CreateHotel

