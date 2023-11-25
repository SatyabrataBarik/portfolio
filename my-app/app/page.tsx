import NavBar from '@/src/components/NavBar.component'
import { Box, Stack } from '@mui/material'
import React from 'react'

const Home = () => {
  return (
    <Stack sx={{flex:1}}>
      
          <NavBar/>
      
      <Box sx={{backgroundColor:"white"}}>

      </Box>
    </Stack>
  )
}

export default Home