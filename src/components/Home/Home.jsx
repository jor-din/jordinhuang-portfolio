import React from 'react'
import './Home.css'
import { Box, Container} from '@mui/system'
import  CartoonSelf  from '../../Assets/—Pngtree—cartoon hand drawn little girl_4069867.png'


const Home = () => {
  return (
    <>
        <Container className='home' maxWidth={false} style={{ background: '#FFF6EF'}}>
        <Box sx={{ height: '100vh'}} className='home-intro'>
            <img src={CartoonSelf} alt="" width='400' height='400' />
            <h1> Hi! I'm Jordin Huang </h1>
            <p>A Software Engineer, Bostonian, Studio Ghibli Fan</p> 
        </Box>
        </Container> 
      </>
  )
}

export default Home