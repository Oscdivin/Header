import React from "react";
import styled from "styled-components";
const Footer=()=>{
       return(
              <div>
<Box>
       <Main>
Footer

       </Main>
</Box>
              </div>
       )
}
export default Footer;

const Box =styled.div`
width:100%;
height: 10vh;
background: linear-gradient(90deg, rgba(219,254,249,1) 0%, 
rgba(254,255,255,1) 51%, rgba(218,205,205,1) 100%);
justify-content: center;
display: flex;
align-items: center;
/* position: static; */
/* position: fixed; */
/* margin-bottom: 100%; */
`
const Main =styled.div`
width:90%;
height: 10vh;
/* background: linear-gradient(90deg, rgba(219,254,249,1) 0%, 
rgba(254,255,255,1) 51%, rgba(218,205,205,1) 100%);; */
background-color: blue;
justify-content: center;
display: flex;
align-items: center;
color: red;
/* position: absolute; */
`