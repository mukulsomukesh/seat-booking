import { Box, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import Seat from './Seat'


// Compartment component that displays the seat grid and booking status.
export default function Compartment({ loading, data }) {

    return (
        <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} h="full" gap="2" >

            {/* Display "Please Wait" text if loading */}
            {!loading ? <Text textAlign={"center"} as="b" > Please Wait. </Text> : ""}

            {/* Seat grid */}
            <Grid templateColumns='repeat(7, 1fr)' gap={1} bg="#FAFAFA" minH={"fit-content"} h="80vh" minW={"400px"} w="fit-content" rounded={"lg"} p="2">
                {data?.map((item) => (
                    <Seat key={item._id} isBooked={item.isBooked} seatNumber={item.seatNumber} />
                ))}
            </Grid>

            {/* Booking status color lable */}
            <Flex gap="2" as="b" justify={"space-around"} color={"gray.700"}> <Text w="50%" textAlign={"center"} bg="#FFC107" rounded={"lg"} p="2"> Booked </Text> <Text textAlign={"center"} w="50%" bg="#6CAC48" rounded={"lg"} p="2"> Available </Text> </Flex>
        </Box>
    )
}
