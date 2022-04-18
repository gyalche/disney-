import React from 'react'
import styled from 'styled-components'
const Header=()=> {
  return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt=""></img>
        </Logo>

        <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt=""></img>
                <span>HOME</span>
            </a>
        </NavMenu>
    </Nav>
  )
}
const Nav=styled.nav`
    position:fixed;
    top:0;
    left:0;
    right:0;
    height:70px;
    background-color:black;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 36px;
    letter-spacing: 10px;
    z-index:3;

`;

const Logo = styled.a`
    padding:0;
    width:80px;
    margin-top:4px;
    max-height:65px;
    display:inline-block;

    img{
        display:block;
        width:100%;
    }
`

const NavMenu = styled.div`
    align-items:center;
    display:flex;
    flex-flow:row nowrap;
    height:100%;
    justify-content: flex-end;
    margin:0px;
    padding:0px;
    position:relative;
    margin-right:auto;
    margin-left:25px;

    a{
        display:flex;
        align-items:center;
        padding: 0 12px;
    
        img{
            height:20px;
            min-width:20px;
            width:20px;
            z-index:auto;
        }
        span{
            color:white;
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            position:relative;
            
        &:before{
            background-color: rgba(249,249,249,1);
            border-radius:9px 0px 4px 4px;
            bottom:-6px;
            content=""
            height:2px;
            left:0px;
            opacity:0;
            position:absolute;
            right:0px;
            transform-origin:left center;
            visibility:hidden;
            
        }
        }
        
    }


    // @media (max-width: 768px){
    //     display:none;
    // }

`
export default Header;