import styled from 'styled-components'
import React from 'react'
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import NewDisney from './NewDisney';
import Originals from './Originals';
import Trending from './Trending';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import db from '../firebase.js';
import setMovie from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';
const Home=(props)=>{
    const dispatch=useDispatch();
    const userName=useSelector(selectUserName);
    let recommends=[];
    let newDisney=[];
    let originals=[];
    let trending=[];

    useEffect(()=>{
        db.collection('movies').onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type) {
                    case 'recommend':
                        recommends=[...recommends, {id:doc.id, ...doc.data()}]
                        break;
                    case 'new':
                        newDisney.push({id:doc.id, ...doc.data()});
                        break;
                    case 'original':
                        originals.push({id:doc.id, ...doc.data()});
                        break;
                    
                    case 'trending':
                        trending.push({id: doc.id, ...doc.data()});
                        break;


                }
            });
        });

        dispatch(setMovie({
            recommend:recommends,
            newDisney:newDisney,
            originals:originals,
            trending:trending
        }))
    },[userName]);
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
};

const Container=styled.main`
    position:relative;
    min-height: calc(100vh - 250px);
    overflow-x:hidden;
    display:block;
    top:72px;
    padding:0 calc(3.5vw - 5px);

    &:after { 
        background-image:url(/images/home-background.png);
        position:fixed;
        content="";
        inset:0px;
        opacity:1;
        z-index:-1;

    }
`

export default Home;