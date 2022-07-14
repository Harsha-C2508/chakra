import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const Grid = () => {
    const items = new Array(12).fill(0).map((a,i)=>i + 1)
  return (
    <Box>
        <SimpleGrid columns={{
          base: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5
        }}>
            {items.map((item)=>(
                <Box key={item} 
                     bg='brand.800' 
                     gap='1rem' 
                     width='90%' 
                     marginBottom='10px'
              >{item}</Box>
            ))}
        </SimpleGrid>
    </Box>
  )
}

export default Grid