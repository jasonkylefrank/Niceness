"use client"
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import React from 'react';

// console.log(React)

const H2 = styled.h2`
  font-size:32px;
  `;
const PasteInput = styled(TextField)`
width: 398px;
border-top: 0;
border-left: 0;
border-right: 0;
`;




export default function PasteLink({url}) {
  
  const [capturedInput, setcapturedInput] = useState("")

  useEffect(() => {
    // console.log(capturedInput);
    if(url===capturedInput) {
      console.log(capturedInput)
      // setPasteInput()
      console.log("hi")
    } else {
      console.log(url)
      console.log(capturedInput)
      console.log("somthing went wrong");
      // console.log(setcapturedInput("hljpo od jifhf i0 g"))
    }
  }, [capturedInput]);

  // function onchange(url,capturedInput,setcapturedInput,value) {
  function onchange(e) {
    setcapturedInput(e.target.value)
  }
  // console.log(capturedInput)
  return (
    <div>
      <H2>Enter your family link</H2>
      <p>Put in the link your family has already sent you.</p>
      <PasteInput placeholder='Paste link here' variant='standard' onChange={onchange}/>
    </div>
  );
}



























































































































































































































































































































































































