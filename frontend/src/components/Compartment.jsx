import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Seat from './Seat'


// Compartment component that displays the seat grid and booking status.
export default function Compartment({ loading, data }) {

    let booked =0
    let notBooked =0

    data?.map((item)=>{
        if(item.isBooked){ booked++ }
        else { notBooked++ }
    })

    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} h="full" gap="2" >

            {/* Display "Please Wait" text if loading */}
            {loading ? <Heading size='md' textAlign={"center"}  > Ticket Booking </Heading> : <Text textAlign={"center"} as="b" > Please Wait. </Text>}

            {/* Seat grid */}
            <Grid templateColumns='repeat(7, 1fr)' gap={1} bg="#FAFAFA" minH={"fit-content"} h="80vh" minW={"400px"} w="fit-content" rounded={"lg"} p="2">
                {data?.map((item) => (
                    <Seat key={item._id} isBooked={item.isBooked} seatNumber={item.seatNumber} />
                ))}
            </Grid>

            {/* Booking status color lable */}
            <Flex gap="2" as="b" justify={"space-around"} color={"gray.700"}> <Text w="50%" textAlign={"center"} bg="#FFC107" rounded={"lg"} p="2"> Booked Seats = {booked} </Text> <Text textAlign={"center"} w="50%" bg="#6CAC48" rounded={"lg"} p="2"> Available Seats = {notBooked} </Text> </Flex>
        </Box>
    )
}
