import React from "react";
import {useState} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
interface Iprops{
       c?:string,
}
const Header: React.FC<Iprops>=({c})=>{
       const[show, setShow] =useState<boolean>(false)
       const changeColor=()=>{
              if(window.scrollY >700){
                     setShow(false)
              }else{
                     setShow(true)
              }
       }
       window.addEventListener("scroll",changeColor)
       return(
              <div>
<Box>
       <Main>
              <Logo>
                     Divine
              </Logo>
<Holder>
<Nav c={`${c}`}
// c="red"
 to="home"  >Home</Nav>
<Nav to="about" c={`${c}`}>About</Nav>
<Nav to="services" c={`${c}`}>Services</Nav>
<Nav to="contact" c={`${c}`}>Contact</Nav>
<Nav to="gallery" c={`${c}`}>Gallery</Nav>
</Holder>
</Main>
</Box>
{/* <Nav to="home" c={`${c}`}>Button</Nav> */}
              </div>
       )

}

export default Header;

const Logo=styled.div``
const Nav=styled(Link)<{c:string}>`
display: flex;
margin: 0px 10px;
font-size: 17px;
text-decoration: none;
color: ${({c})=>c};

:hover{
cursor: pointer;

}
`
const Holder=styled.div`
display: flex;
/* background-color: #000; */
`
const Box=styled.div`
       width: 100%;
       height: 10vh;
       background-color: #000;
           justify-content: center;
       display: flex;
       align-items: center;
       position:fixed;
`
const Main=styled.div`
       width: 92%;
       height: 10vh;
      background-color: red;
        justify-content: space-between;
        display: flex;
        align-items: center; 
`