import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Heading, Button, Box
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { DataSuccess, RemoveData } from '../Redux/action';


const Client = () => {
        
         let dispatch=useDispatch();
        const data =useSelector((ele)=>ele.DeveloperReducer.data);
        console.log(data);

        const Fetchdata=()=>{
            axios.get("https://lime-embarrassed-butterfly.cyclic.app/dev", { params: { strictPopulate: false } })
            .then((res) => {
              dispatch(DataSuccess(res.data));
              console.log("data", res.data);
            })
            .catch((err) => {
              console.log(err);
            });

        }

        useEffect(()=>{
            Fetchdata()
        },[])


        const HandleDelete=(id)=>{
                axios.delete(`https://lime-embarrassed-butterfly.cyclic.app/dev/delete/${id}`)
                .then((res)=>{
                    console.log(res);
                    Fetchdata()
                    dispatch(RemoveData())
                })
                .catch((err)=>{
                        console.log(err);
                })

        }

    return (
        <div>

            <Heading as="h6" mb="5" >Client page</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>S No.</Th>
                            <Th>Name</Th>
                            <Th>Phone Number</Th>
                            <Th>Education</Th>
                            <Th>Professional Experience</Th>
                            <Th>Skills</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            data.map((ele,index)=>(
                                <Tr>
                                    <Td>{index+1}</Td>
                                    <Td>{ele.firstName+" "+ele.lastName}</Td>
                                    
                                    <Td>{ele.phoneNumber}</Td>
                                    <Td>{ele.educationalExperiences.map((item)=>(
                                        <Box>
                                            <p><Heading as="h5" size="1xl">degreeName: {item.degreeName}</Heading> 
                                        </p>
                                        <br />
                                        <p><Heading as="h2" size="1xl">schoolName: {item.schoolName}</Heading> 
                                        </p>
                                        <br />
                                        <p><Heading as="h2" size="1xl">startYear: {item.startYear}</Heading> 
                                            </p>
                                            <br />
                                            <p><Heading as="h2" size="1xl">endYear: {item.endYear}</Heading> 
                                            </p>
                                        
                                        </Box>
                                        
                                        
                                    ))}</Td>
                                    <Td>
                                        {
                                            ele.professionalExperiences.map((item)=>(
                                                <Box>
                                                <p><Heading as="h5" size="1xl">companyName: {item.companyName}</Heading> 
                                            </p>
                                            <br />
                                            <p><Heading as="h2" size="1xl">techStack: {item.skillsUsed}</Heading> 
                                            </p>
                                            <br />
                                            <p><Heading as="h2" size="1xl">startYear: {item.startYear}</Heading> 
                                            </p>
                                            <br />
                                            <p><Heading as="h2" size="1xl">endYear: {item.endYear}</Heading> 
                                            </p>
                                            </Box>
                                            ))
                                        }
                                    </Td>
                                    <Td>{ele.skills.map((ele)=>(
                                        <p>{ele}</p>
                                    ))}</Td>
                                    <Td><Button color="green" onClick={()=>HandleDelete(ele._id)}>Delete</Button></Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                    
                </Table>
            </TableContainer>
        </div>
    )
}

export default Client