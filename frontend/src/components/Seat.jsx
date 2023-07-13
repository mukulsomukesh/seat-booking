import { Box, Text } from '@chakra-ui/react'
import React from 'react'

// Seat component that displays a seat number and its booking status
export default function Seat({ seatNumber, isBooked }) {
    return (

        // Box component that represents the seat
        // bg/Background color based on booking status
        <Box color={"gray.700"} h="fit-content" w="50px" display={"flex"} justifyContent={"center"} p="1" bg={isBooked ? "#FFC107" : "#6CAC48"} rounded={"lg"}>

            {/* seat number */}
            <Text align={"center"} fontSize='md' as="b"> {seatNumber} </Text>
        </Box>
    )
}
