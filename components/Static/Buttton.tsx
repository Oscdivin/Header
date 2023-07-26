import React from "react";
import {useState} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import {AiOutlineArrowUp } from "react-icons/ai"
// AiOutlineArrowUp

interface Idata{
       c?: string,
}
const Button: React.FC<Idata>=({c,})=>{

              const[show, setShow] =useState<boolean>(false)
       const changeColor=()=>{
              if(window.scrollY >9000){
                     setShow(false)
              }else{
                     setShow(true)
              }
     }
     return(
            <div id="home">
<Box>
     <Main>
<Nav to="home" c={`${c}`}><Btn><AiOutlineArrowUp/></Btn></Nav>

     </Main>
</Box>
            </div>
     )
}

export default Button;

const Btn=styled(AiOutlineArrowUp)`
font-weight: 56px;
font-size: 40px;
`
const Box=styled.div`
width: 70px;
height: 70px;
background-color: transparent;
border-radius: 50px;
justify-content: center;
display: flex;
align-items: center;
/* position: fixed; */
position: absolute;
/* margin: 45px; */
top: 430%;
left: 184vh;
box-shadow: silver ;
/* box-shadow:rgb(18,194,233); */
box-shadow: linear-gradient(90deg, rgba(18,194,233,1) 0%, rgba(196,113,237,1) 35%, rgba(246,79,89,1) 100%);
;

:hover{
cursor: pointer;
background-color: red;

} 
`
const Main=styled.div`
border-radius: 50px;
justify-content: center;
display: flex;
align-items: center;
color: #ffff;
font-size: 8px;
/* top: 34px
; */
`
const Nav=styled(Link)<{c:string}>`
     text-decoration: none;
color: ${({c})=>c};
/* :hover{ */
/* cursor: pointer; */
// background-color: red;
// transform: all scale(360);
// }
// `
// import React from "react"
// import GlobalPriover from "../../Global/GlobalProvider";
// interface ibuttonn{
     /* c?:string; */
// }
// const  Button: React.FC<ibuttonn>=({c})=>{
       
            /* const[show, setShow] =useState<boolean>(false)
     const changeColor=()=>{
            if(window.scrollY >9000){
                   setShow(false)
            }else{
                   setShow(true)
            }
     } */
     /* return( */
            /* <div id="button"> */
// {/* <GlobalProvider bg="#4444" title="welcome to Gallery" c="red"/> */}
// <GlobalPriover bg="" title="welcome to button" c="red"/>

// <Box>
      /* <Main> */
// <Nav to="home" c={`${c}`}>Button</Nav>

// {/* // <Nav to="button" c={`${c}`}>Button</Nav> */}
// {/* Button */}
      /* </Main>
// </Box>
            </div>
     ) */
// }
// export default Button;



// const Box=styled.div`
// width: 70px;
// height: 70px;
// background-color: transparent;
// border-radius: 50px;
// justify-content: center;
// display: flex;
// align-items: center;
// /* position: fixed; */
// position: absolute;
// /* margin: 45px; */
// top: 575%;
// left: 184vh;


// :hover{
// cursor: pointer;
// background-color: red;
// }
// `
// const Main=styled.div`
// border-radius: 50px;
// justify-content: center;
// display: flex;
// align-items: center;
// color: #ffff;
// font-size: 8px;
// /* top: 34px
// ; */
// `

// const Nav=styled(Link)<{c:string}>`
// display: flex;
// margin: 0px 10px;
// font-size: 17px;
// text-decoration: none;
// color: ${({c})=>c};

// :hover{
// cursor: pointer;

// }
// `