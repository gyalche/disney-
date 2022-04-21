import React from 'react'
import styled from 'styled-components'
import { auth } from '../firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {selectUserName, selectUserPhoto, setUserLoginDetails,
setUserSignedOut} from "../features/user/userSlice";
import { useEffect } from 'react';

const Header=(props)=> {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const userName=useSelector(selectUserName);
    const userPhoto=useSelector(selectUserPhoto);

   
    useEffect(()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUser(user);
                window.location.replace('/home');
            }
        })
    }, [userName])

    const handleAuth=(e)=> {
        e.preventDefault();
        if(!userName){
            const provider = new GoogleAuthProvider();
    
        signInWithPopup(auth, provider)
            .then((result)=>{
                console.log(result)
                setUser(result.user);
            }).catch((error)=>{
                // alert(error.message);
                console.log(error.message);
            });
        }
        else if(userName){
            auth.signOut()
                .then(()=>{
                    dispatch(setUserSignedOut)
                    window.location.replace('/home')
                }).catch((error)=>{
                    alert(error.message)
                })
        }
        
    };

    const setUser=(user) => {
        dispatch(
            setUserLoginDetails({
                name: user.name,
                email:user.email,
                photo:user.photo
            })
              
            
        );
    };
  return (
    <Nav>
        <Logo>
            <img src="/images/logo.svg" alt=""></img>
        </Logo>
        {!userName?<Login onClick={handleAuth}>
        Login
        </Login>
        :
        <>
        <NavMenu>
            <a href="/home">
                <img src="/images/home-icon.svg" alt=""></img>
                <span>HOME</span>
            </a>
            <a href="/search">
                <img src="/images/search-icon.svg" alt=""></img>
                <span>SEARCH</span>
            </a>
            <a href="/watchlist">
                <img src="/images/watchlist-icon.svg" alt=""></img>
                <span>WATCHLIST</span>
            </a>
            <a href="/original">
                <img src="/images/original-icon.svg" alt=""></img>
                <span>ORIGINALS</span>
            </a>
            <a href="/movies">
                <img src="/images/movie-icon.svg" alt=""></img>
                <span>MOVIES</span>
            </a>
            <a href="/series">
                <img src="/images/series-icon.svg" alt=""></img>
                <span>SERIES</span>
            </a>
        </NavMenu>
        <SignOut>
             <UserImg src={userPhoto} alt={userName} />
             <DropDown>
                <span onClick={handleAuth}>SignOut</span>
             </DropDown>
        </SignOut>
        </>
    }
        
    </Nav>
  )
}
const SignOut=styled.div`
    position:relative;
    height:48px;
    width:48px;
    display:flex;
    cursor:pointer;
    align-items:center;
    justify-content:center;

    ${UserImg}{
        border-radius:50%;
        width:100%;
        height:100%;
    }

    &:hover{
        ${DropDown}{
            opacity:1;
            transition-duration:1s;
        }
    }
`
const DropDown=styled.div`
    position:absolute;
    top:48px;
    background-color:black;
    right:0;
    border:1px solid white;
    border-radius:4px;
    box-shadow:brown;
    padding:10px;
    font-size:14px;
    letter-spacing:3px;
    width:100%;
    opacity:0;

`
const UserImg=styled.img`
    height:100%;

`
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
        span:hover {
            color:skyblue;
        }
        span{
            color:white;
            font-size:13px;
            letter-spacing:1.42px;
            line-height:1.08;
            padding:2px 0px;
            position:relative;
            
           &:before{
            background-color:white;
            border-radius:9px 0px 4px 4px;
            bottom:-6px;
            content=""
            height:2px;
            left:0px;
            opacity:0;
            position:absolute;
            right:0px;
            transform-origin:left center;
            transform:scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.46,0);
            visibility:hidden;
            width:auto;

        }
    }
    &:hover{
        span:before{
            transform:scaleX(1);
            visibility:visible;
            opacity:1 !important;
        }
    }
        
}


    // @media (max-width: 768px){
    //     display:none;
    // }

`

const Login = styled.a`
background-color: black;
border:1px solid white;
padding:8px 16px;
cursor:pointer;
text-transform: uppercase;
letter-spacing:1.5px;
display:flex;
border-radius:4px;
transition:all .2s ease 0s;

&:hover{
    background-color:white;
    color:black !important;
    border-color:transparent !important;
}
`

export default Header;