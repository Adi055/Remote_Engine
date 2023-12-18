import {FormControl,FormLabel,Heading,Input,Button,FormHelperText} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';


const Signup=()=>{
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err,setErr]=useState(false)
    const [err1,setErr1]=useState(false)
    const navigate=useNavigate()


    const handleSignup = (e) => {
        e.preventDefault();
        const user = {  email, password };
        fetch("https://lime-embarrassed-butterfly.cyclic.app/user/register", {
          method: "POST" ,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((res)=>{
            if(res.error){
              console.log("hjy",res);
              if(user.password.length<=6 ){
                setErr(true)
            }
            else {
              const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
              if (!specialCharRegex.test(password)) {
                setErr1(true)
              }
            
            }
        
          }
          else{
            navigate("/login")
          }
            
          })
          .catch((err) => console.log(err));
        
        setEmail("")
        setPassword("")
      };




    return (
        <div>
          
           <Heading as='h1' size='1xl' >
            Register Yourself
            </Heading>
            <div>
            <p style={{position:"relative",fontSize:"14px",color:"red"}}>{err && "Password should be above 6 characters"}</p>
           <p style={{position:"relative",fontSize:"14px",color:"red"}}>{err1 && "Password should contain at least one special character"}</p>
            </div>
            <br />
            <form onSubmit={handleSignup}>
            <FormControl>
            
           
                <br />
            <Input type='email'  w={300} placeholder='Email address' mt={5}
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isRequired
            />
            <br />
            <Input type='password'  w={300} placeholder='Password' mt={5}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isRequired
            />
            <FormHelperText color='green'>use special symbol and upper case letter.</FormHelperText>
            <br />
            <Button type="submit" mt={2}
            colorScheme='teal'>Submit</Button>
            </FormControl>
            </form>
        </div>
    )
}

export default Signup