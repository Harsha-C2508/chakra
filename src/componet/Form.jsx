import React, { useState } from 'react'
import {Box, Button, Heading, Input, Menu, MenuButton, MenuItem, MenuList, PinInput, PinInputField, Select, Text, Stack} from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'
const Form = () => {
    const [loading,setIsLoading] = useState(false)
    const [otp,setOtp] = useState()
  return (
    <Box width='40%' margin='auto'>
         <Heading>Form</Heading>
        <Stack direction='column' gap='.2rem'>
            <Box>
                <Input type='email' placeholder='Enter your email....' />
            </Box>
            <Box>
                <Input type='password' placeholder='Enter a strong password.....' />
            </Box>
            <Box>
                <PinInput value={otp} onChange={(value)=>setOtp(value)} otp>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                    <PinInputField/>
                </PinInput>
                <Text>{otp}</Text>
            </Box>
            <Box>
            <Select placeholder='Select option'>
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            </Box>
            <Box>
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Actions
                </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box>
              <Button colorScheme='red' onClick={()=>{
                setIsLoading(true)
                setTimeout(()=>{
                    setIsLoading(false)
                },2000)
              }}
              isLoading={loading}>
                {" "}
                SIGN UP{" "}
              </Button>
            </Box>
        </Stack>

    </Box>
  )
}

export default Form