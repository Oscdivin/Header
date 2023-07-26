import React from "react";
import styled from "styled-components";
interface IGlobal{
       bg?: string,
       title?: string,
       c?: string,
}
const GlobalPriover:React.FC<IGlobal>=({bg,title,c})=>{
       return(
              <div>
<Container bg={`${bg}`} c={`${c}`}>{title}</Container>

              </div>
       )
}

export default GlobalPriover;

const Container=styled.div<{bg:string, c:string}>`
width: 100%;
height: 595px;
justify-content: center;
align-items: center;
display: flex;
background-color:${({bg})=>bg};
color: ${({c})=>c};
`