import styled from 'styled-components';
import React from 'react';

const Viewers=()=>{

    return(

        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt="" />
            </Wrap>
             <Wrap>
                <img src="/images/viewers-marvel.png" alt="" />
            </Wrap>
             <Wrap>
                <img src="/images/viewers-national.png" alt="" />
            </Wrap>
             <Wrap>
                <img src="/images/viewers-pixar.png" alt="" />
            </Wrap>
             <Wrap>
                <img src="/images/viewers-starwars.png" alt="" />
            </Wrap>

        </Container>
    )
};

const Container=styled.div`
    margin-top:30px;
    padding:30px 0px 26px;
    display:grid;
    grid-gap:25px;
    // gap:25px;
    grid-template-columns:repeat(4, minmax(0, 1fr));

    @media only screen and (max-width:768px){
        grid-template-columns:repeat(1, minmax(0, 1fr));
    }



`
const Wrap=styled.div`
    padding-top:56.25%;
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0) 0s;
    border:3px solid silver;
    
    img{
        inset:0px;
        display:block;
        // object-fit:cover;
        height:100%;
        opacity:1;
        position:absolute;
        transition:opacity 500ms ease-in-out 0s;
        width:100%;
        z-index: 1;
        top:0;
    }


`
export default Viewers;