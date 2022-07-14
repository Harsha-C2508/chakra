import React from 'react'
import {  Box, Button, Heading, Flex, Spacer, Stack, Input, Image } from '@chakra-ui/react'
import { IoRocketOutline } from 'react-icons/io5'
import { BsFunnel } from 'react-icons/bs'
import { FcGlobe } from 'react-icons/fc'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
const Dashboard = () => {
  return (
    <>
      <Box 
         borderBottom='0.2px solid #A0AEC0'
         marginTop='10px'
         paddingBottom='10px'
         paddingRight='20px'
         >
        <Flex gap=".7rem">
        <Spacer/>
        <Button bgcolor='white'>Sign In</Button>
        <Button color='brand.500'
        border='1px solid #805AD5'>Sign Up</Button>
        <Button bg='brand.700'>Post a Job <IoRocketOutline color='red' /></Button>
        </Flex>
      </Box>
      <Stack>
        <Heading 
            textAlign='center'
            marginTop='90px'
            color='brand.600'
            fontSize='80px'
            fontWeight='bolder'
        >
           Find The Right
        </Heading>
       <Flex>
        <Heading
           textAlign='center'
           color='brand.500'
           fontSize='80px'
           fontWeight='bolder'
           marginLeft='220px'
           >Four-Day</Heading>
       <Heading 
            textAlign='center'
            color='brand.600'
            fontSize='80px'
            marginLeft='10px'
            fontWeight='bolder'
        >
         Week Job
        </Heading>
       </Flex>
       <Flex width='70%'>
         <Input marginTop='30px' marginLeft='280px' placeholder='Type job title or keyword' color='RGBA(0, 0, 0, 0.16)'/>
         <Button marginTop='30px' marginLeft='5px'><BsFunnel/></Button>
       </Flex>
       <Flex>
            <Box  marginLeft='350px' marginTop='10px'>
            <Button border='2px solid #553C9A' bg='brand.500' ><FcGlobe/> Remote</Button>
            <Button marginLeft='20px' border='2px solid #553C9A' bg='brand.500'> <ChevronLeftIcon/><ChevronRightIcon/> Tech</Button>
            <Button marginLeft='20px' border='2px solid #553C9A' bg='brand.500'><Image src="https://cdn.iconscout.com/icon/premium/png-256-thumb/zigzag-arrow-3538480-2960380.png" alt="" height='20px'/> Marketing</Button>
            </Box>
        </Flex>
      </Stack>
    </>
  )
}

export default Dashboard