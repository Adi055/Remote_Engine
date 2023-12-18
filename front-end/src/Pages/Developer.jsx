
// import React, { useState } from "react";
// import { Button, Card, CardBody, FormLabel, Grid, Input, Select } from "@chakra-ui/react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { PostSuccess } from "../Redux/action";

// let init = {
//   phoneNumber: "",
//   skills: [],
//   professionalExperiences: [
//     {
//       companyName: "",
//       skillsUsed: [],
//       startYear: "",
//       endYear:""
//     },
//   ],
//   educationalExperiences: [
//     {
//       degreeName: "",
//       schoolName: "",
//       startYear: "",
//       endYear:""
//     },
//   ],
// };

// const Developer = () => {
//   const [val, setVal] = useState(init);
//   const dispatch = useDispatch();

//   const handleChange = (e, index, type) => {
//     const { name, value } = e.target;

//     if (type === "professionalExperiences") {
//       const newProfessionalExperiences = [...val.professionalExperiences];
//       newProfessionalExperiences[index] = {
//         ...newProfessionalExperiences[index],
//         [name]: value,
//       };
//       setVal((prevState) => ({ ...prevState, professionalExperiences: newProfessionalExperiences }));
//     } else if (type === "educationalExperiences") {
//       const newEducationalExperiences = [...val.educationalExperiences];
//       newEducationalExperiences[index] = {
//         ...newEducationalExperiences[index],
//         [name]: value,
//       };
//       setVal((prevState) => ({ ...prevState, educationalExperiences: newEducationalExperiences }));
//     } else {
//       setVal((prevState) => ({ ...prevState, [name]: value }));
//     }
//   };

//   const handleAddMoreExperience = (type) => {
//     if (type === "professionalExperiences") {
//       setVal((prevState) => ({
//         ...prevState,
//         professionalExperiences: [
//           ...prevState.professionalExperiences,
//           { companyName: "", skillsUsed: [], startYear: "",endYear:"" },
//         ],
//       }));
//     } else if (type === "educationalExperiences") {
//       setVal((prevState) => ({
//         ...prevState,
//         educationalExperiences: [
//           ...prevState.educationalExperiences,
//           { degreeName: "", schoolName: "", startYear: "",endYear:"" },
//         ],
//       }));
//     }
//   };

//   const PostData = (e) => {
//     e.preventDefault();
//     axios
//       .post("http://localhost:8080/dev/add", val)
//       .then((res) => {
//         dispatch(PostSuccess());
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     console.log("1");
//     setVal("")
//   };

//   return (
//     <div>
//       <Card w="800px" mx="auto">
//         <CardBody>
//           <form onSubmit={PostData}>
//             <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
//             <Input placeholder="Firstname" type="text" isDisabled/>
//          <Input placeholder="Lastname" type="text" isDisabled/>
//          <Input placeholder="email" type="email" isDisabled/>
//               <Input
//                 placeholder="PhoneNumber"
//                 type="phoneNumber"
//                 name="phoneNumber"
//                 onChange={(e) => handleChange(e, null, null)}
//                 value={val.phoneNumber}
//               />
//               <Select name="skills" placeholder="Select Skills" onChange={(e) => handleChange(e, null, null)} value={val.skills}>
//                 <option value="Node">Node</option>
//                 <option value="Java">Java</option>
//                 <option value="React">React</option>
//                 <option value="Angular">Angular</option>
//                 <option value="Saas">Saas</option>
//               </Select>
//             </Grid>

//             <FormLabel>Professional Experience</FormLabel>
//             {val.professionalExperiences.map((experience, index) => (
//               <Grid key={index} templateColumns="repeat(3, 1fr)"  gap={6}>
//                 <Input
//                   type="text"
//                   placeholder="companyName"
//                   name="companyName"
//                   onChange={(e) => handleChange(e, index, "professionalExperiences")}
//                   value={experience.companyName}
//                 />
//                 <Select
//                   placeholder="skillsUsed"
//                   name="skillsUsed"
//                   onChange={(e) => handleChange(e, index, "professionalExperiences")}
//                   value={experience.skillsUsed}
//                 >
//                   <option value="Node">Node</option>
//                   <option value="Java">Java</option>
//                   <option value="React">React</option>
//                   <option value="Angular">Angular</option>
//                   <option value="Saas">Saas</option>
//                 </Select>
//                 <Input
//                   placeholder="Start Year"
//                   type="number"
//                   name="startYear"
//                   onChange={(e) => handleChange(e, index, "professionalExperiences")}
//                   value={experience.startYear}
//                 />
//                 <Input
//                   placeholder="End Year"
//                   type="number"
//                   name="endYear"
//                   onChange={(e) => handleChange(e, index, "professionalExperiences")}
//                   value={experience.endYear}
//                 />
//               </Grid>
//             ))}
//             <Button bg="green" color="white" w="32vh" onClick={() => handleAddMoreExperience("professionalExperiences")}>
//               Add More Experience
//             </Button>

//             <FormLabel>Educational Experience</FormLabel>
//             {val.educationalExperiences.map((experience, index) => (
//                             <Grid key={index} templateColumns="repeat(3, 1fr)" gap={6}>
//                             <Input
//                               type="text"
//                               placeholder="degreeName"
//                               name="degreeName"
//                               onChange={(e) => handleChange(e, index, "educationalExperiences")}
//                               value={experience.degreeName}
//                             />
//                             <Input
//                               type="text"
//                               placeholder="schoolName"
//                               name="schoolName"
//                               onChange={(e) => handleChange(e, index, "educationalExperiences")}
//                               value={experience.schoolName}
//                             />
//                             <Input
//                               placeholder="Start Year"
//                               type="number"
//                               name="startYear"
//                               onChange={(e) => handleChange(e, index, "educationalExperiences")}
//                               value={experience.startYear}
//                             />
//                             <Input
//                               placeholder="End Year"
//                               type="number"
//                               name="endYear"
//                               onChange={(e) => handleChange(e, index, "educationalExperiences")}
//                               value={experience.endYear}
//                             />
//                           </Grid>
//                         ))}
//                         <Button bg="green" color="white" w="32vh" onClick={() => handleAddMoreExperience("educationalExperiences")}>
//                           Add More Education
//                         </Button>
//                             <br />
//                             <br />
//                         <Button bg="blue" color="white" w="32vh" mt="5" type="submit">
//                           Submit
//                         </Button>
//                       </form>
//                     </CardBody>
//                   </Card>
//                 </div>
//               );
//             };
            
//             export default Developer;
            
import React, { useState } from "react";
import { Button, Card, CardBody, FormLabel, Grid, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { PostSuccess } from "../Redux/action";

let init = {
  firstName:"",
  lastName:"",
  phoneNumber: "",
  skills: [],
  professionalExperiences: [
    {
      companyName: "",
      skillsUsed: [],
      startYear: "",
      endYear: "",
    },
  ],
  educationalExperiences: [
    {
      degreeName: "",
      schoolName: "",
      startYear: "",
      endYear: "",
    },
  ],
};

const Developer = () => {
  const [val, setVal] = useState(init);
  const dispatch = useDispatch();

  const handleChange = (e, index, type) => {
    const { name, value } = e.target;

    if (type === "professionalExperiences") {
      const newProfessionalExperiences = [...val.professionalExperiences];
      newProfessionalExperiences[index] = {
        ...newProfessionalExperiences[index],
        [name]: value,
      };
      setVal((prevState) => ({ ...prevState, professionalExperiences: newProfessionalExperiences }));
    } else if (type === "educationalExperiences") {
      const newEducationalExperiences = [...val.educationalExperiences];
      newEducationalExperiences[index] = {
        ...newEducationalExperiences[index],
        [name]: value,
      };
      setVal((prevState) => ({ ...prevState, educationalExperiences: newEducationalExperiences }));
    } else {
      setVal((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleAddMoreExperience = (type) => {
    if (type === "professionalExperiences") {
      setVal((prevState) => ({
        ...prevState,
        professionalExperiences: [
          ...prevState.professionalExperiences,
          { companyName: "", skillsUsed: [], startYear: "", endYear: "" },
        ],
      }));
    } else if (type === "educationalExperiences") {
      setVal((prevState) => ({
        ...prevState,
        educationalExperiences: [
          ...prevState.educationalExperiences,
          { degreeName: "", schoolName: "", startYear: "", endYear: "" },
        ],
      }));
    }
  };

  const PostData = (e) => {
    e.preventDefault();
    console.log("Sending data:", val);
    axios
      .post("https://lime-embarrassed-butterfly.cyclic.app/dev/add", val)
      .then((res) => {
        dispatch(PostSuccess());
        alert("your data has been saved")
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("1");
   setVal(init)
  };

  return (
    <div>
      <Card w="800px" mx="auto">
        <CardBody>
          <form onSubmit={PostData}>
            <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(3, 1fr)" gap={6}>
              <Input placeholder="Firstname" type="text"  name="firstName" onChange={(e) => handleChange(e, null, null)} value={val.firstName}/>
              <Input placeholder="Lastname" type="text"  name="lastName" onChange={(e) => handleChange(e, null, null)} value={val.lastName}/>
              <Input placeholder="email" type="email"  isDisabled/>
              <Input
                placeholder="PhoneNumber"
                type="phoneNumber"
                name="phoneNumber"
                onChange={(e) => handleChange(e, null, null)}
                value={val.phoneNumber}
              />
              <Select name="skills" placeholder="Select Skills" onChange={(e) => handleChange(e, null, null)} value={val.skills}>
                <option value="Node">Node</option>
                <option value="Java">Java</option>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Saas">Saas</option>
              </Select>
            </Grid>

            <FormLabel>Professional Experience</FormLabel>
            {val.professionalExperiences &&
              val.professionalExperiences.map((experience, index) => (
                <Grid key={index} templateColumns="repeat(3, 1fr)" gap={6}>
                  <Input
                    type="text"
                    placeholder="companyName"
                    name="companyName"
                    onChange={(e) => handleChange(e, index, "professionalExperiences")}
                    value={experience.companyName}
                  />
                  <Select
                    placeholder="skillsUsed"
                    name="skillsUsed"
                    onChange={(e) => handleChange(e, index, "professionalExperiences")}
                    value={experience.skillsUsed}
                  >
                    <option value="Node">Node</option>
                    <option value="Java">Java</option>
                    <option value="React">React</option>
                    

<option value="Angular">Angular</option>
<option value="Saas">Saas</option>
</Select>
<Input
placeholder="Start Year"
type="number"
name="startYear"
onChange={(e) => handleChange(e, index, "professionalExperiences")}
value={experience.startYear}
/>
<Input
placeholder="End Year"
type="number"
name="endYear"
onChange={(e) => handleChange(e, index, "professionalExperiences")}
value={experience.endYear}
/>
</Grid>
))}
<Button bg="green" color="white" w="32vh" onClick={() => handleAddMoreExperience("professionalExperiences")}>
Add More Experience
</Button>

<FormLabel>Educational Experience</FormLabel>
{val.educationalExperiences &&
val.educationalExperiences.map((experience, index) => (
<Grid key={index} templateColumns="repeat(3, 1fr)" gap={6}>
<Input
type="text"
placeholder="degreeName"
name="degreeName"
onChange={(e) => handleChange(e, index, "educationalExperiences")}
value={experience.degreeName}
/>
<Input
type="text"
placeholder="schoolName"
name="schoolName"
onChange={(e) => handleChange(e, index, "educationalExperiences")}
value={experience.schoolName}
/>
<Input
placeholder="Start Year"
type="number"
name="startYear"
onChange={(e) => handleChange(e, index, "educationalExperiences")}
value={experience.startYear}
/>
<Input
placeholder="End Year"
type="number"
name="endYear"
onChange={(e) => handleChange(e, index, "educationalExperiences")}
value={experience.endYear}
/>
</Grid>
))}
<Button bg="green" color="white" w="32vh" onClick={() => handleAddMoreExperience("educationalExperiences")}>
Add More Education
</Button>
<br />
<br />
<Button bg="blue" color="white" w="32vh" mt="5" type="submit">
Submit
</Button>
</form>
</CardBody>
</Card>
</div>
);
};

export default Developer;
