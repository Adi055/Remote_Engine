import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    useBreakpointValue,
    Heading,Spacer
  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
  import { FiMenu } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux';
 import { Link, useLocation, useNavigate  } from 'react-router-dom'
import { LogoutSuccess } from '../Redux/action';
 


 let Navbar=()=>{
  const location=useLocation();
  const path=location.pathname
  let dispatch=useDispatch()
   const isDesktop = useBreakpointValue({ base: false, lg: true })
 
  //let isAuth=useSelector((ele)=>ele.AuthReducer.isAuth)

  
  let Logout=()=>{
    console.log("1");
    localStorage.clear();
    dispatch(LogoutSuccess())
   
  }

    return (
      <Box as="section" pb={{ base: '10', md: '10' }} >
        <Box as="nav" bg="bg.surface" boxShadow="sm">
          <Container py={{ base: '4', lg: '2' }} mr='800px'>
            <HStack spacing="1" justify="space-between">
          
              {isDesktop ? (
                            <Flex minWidth='max-content' alignItems='center' gap='350'>
                            <Box p='2'>
                              <Heading size='md'>Remote Engine</Heading>
                            </Box>
                            <Spacer />
                            <ButtonGroup gap='1'>
                              {path === "/client" ? (
                                <Button colorScheme='teal' onClick={Logout} ml="200">Logout</Button>
                              ) : path === "/form"  ? (
                                <Box p='2'>
                                  {/* Your content for the additional condition */}
                                  <Button colorScheme='teal' onClick={Logout} mr="6">Logout</Button>
                                  
                                  <Link to="/form">  
                                    <Button colorScheme='teal' mr="6">Onboard</Button>
                                  </Link>
                                  {/* <Button colorScheme='teal' onClick={Logout}>Logout</Button> */}
                                </Box>
                              ) : localStorage.length>0?(
                                <Box >
                                  <Link to="/register">  
                                    <Button colorScheme='teal' mr="6">Sign Up</Button>
                                  </Link>
                                  <Link to="/login"> 
                                    <Button colorScheme='teal'>Log in</Button>
                                  </Link> 
                                </Box>
                              ):""}
                            </ButtonGroup>
                          </Flex>
                          
              ) : (
                <IconButton
                  variant="tertiary"
                  icon={<FiMenu fontSize="1.25rem" />}
                  aria-label="Open Menu"
                />
              )}
            </HStack>
          </Container>
        </Box>
      </Box>
    )
}
export default Navbar