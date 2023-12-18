import {FormControl,Heading,Input,Button,Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginSuccess } from '../Redux/action';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Login=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr]=useState(false)
    

    let dispatch=useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = { email, password };
        fetch("https://lime-embarrassed-butterfly.cyclic.app/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res)=>{
            console.log(res.status);
              if(res.status==200){
                return res.json()
              }
              else{
                alert("Wrong email or password")
              }
          })
          .then((res) => {
            if(res.token==undefined){
              
              setErr(true)
            }
            else{
              localStorage.setItem("token", JSON.stringify(res.token));
              onOpen();
              
            }
            
            console.log(res.token);
            dispatch(LoginSuccess(res.token))
            
          })
          .catch((err) => console.log(err));
        setEmail("")
        setPassword("")
      };



    return (
        <div>
          
            <Heading as='h1' size='1xl' noOfLines={1}>
                Login Yourself
            </Heading>
            <div>
            <p style={{position:"relative",fontSize:"14px",color:"red"}}>{err && "Wrong email or password"}</p>
            </div>
            <br />
            <form onSubmit={handleLogin}>
            <FormControl>
            
            <Input type='email'  w={300} placeholder='Email address' mt={5}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            />
            <br />
            <Input type='password'  w={300} placeholder='Password' mt={5}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
            />
            <br />
            <Button type="submit" mt={5}
            colorScheme='teal'>Submit</Button>
            </FormControl>
            </form>
            {/* Modal */}
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login Success</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
           <Link to="/client">
           <Button colorScheme='green' onClick={onClose}>
              Client homepage
            </Button>
            </Link> 
            <Link to="/form">
            <Button colorScheme='green' onClick={onClose} ml="50px">
              Onboard as developer
            </Button>
            </Link>
            
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </div>
    )
}

export default Login