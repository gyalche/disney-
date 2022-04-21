import styled from 'styled-components'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImgSlider=(props)=>{

    let setting={
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true
        
    }
    return (
        <div>
        <Carousel {...setting}>
            <Wrap>
                <a>
                    <img src='/images/slider-badging.jpg' alt='' />
                </a>
            </Wrap>
             <Wrap>
                <a>
                    <img src='/images/slider-scalejpg' alt='' />
                </a>
            </Wrap>
             <Wrap>
                <a>
                    <img src='/images/slider-badag.jpg' alt='' />
                </a>
            </Wrap>
             <Wrap>
                <a>
                    <img src='/images/slider-scales.jpg' alt='' />
                </a>
            </Wrap>
        </Carousel>
        
        </div>
    )
}

const Carousel = styled(Slider)`
    margin-top:20px;
    margin-left:40px;
    & > button{
        opacity:0;
        height:100%;
        width:5vw;
        z-index:1;

        &:hover{
            opacity:1;
            transition:opacity 0.2s ease 0s;
        }
    }

    ul li button{
        &:before{
            font-size:10px;
            color:rgba(150, 158, 171);
        }
    }

    li.slick-active button:before{
        color:white;
    }

    .slick-list{
        overflow:initial;
    }

    .slick-prev{
        left:-75px;
    }
    .slick-next{
        right:-75px;
    }
    
`;

const Wrap = styled.div`
    position:relative;
    cursor:pointer;
    border-radius:4px;
    overflow:hidden;

    a{
        border-radius:4px;
        box-shadow:white;
        cursor:pointer;
        display:block;
        position:relative;
        padding:4px;
    }
    
    img{
        width:100%;
        height:100%;
    }

    &:hover{
        padding:0px;
        border:3px solid  white;
        transition-duration:300ms;
    }
`

export default ImgSlider;