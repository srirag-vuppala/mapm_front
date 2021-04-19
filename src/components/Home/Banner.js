import React from 'react'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import BorderBox from 'components/SharedComponents/BorderBox'

const Banner = () => {
    return (
        <>
        <Box p={5} align="center">
            <BorderBox>
                <Heading p={2} >Hello! Welcome to mapM</Heading>
                <Divider />
                <Text p={2}>Your one stop shop to find the best location to live in with your requirements</Text>
            </BorderBox>
        </Box>
        </>
    )
}

export default Banner
