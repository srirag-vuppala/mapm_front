import React from 'react'
import { Box, Heading, Divider, Text } from '@chakra-ui/react'
import BorderBox from 'components/SharedComponents/BorderBox'

const Banner = () => {
    return (
        <>
        <Box p={5} align="center">
            <BorderBox>
                <Heading >Hello! Welcome to mapM</Heading>
                <Divider />
                <Text>Your one stop shop to find the best location to live in with your requirements</Text>
            </BorderBox>
        </Box>
        </>
    )
}

export default Banner
