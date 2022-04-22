import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';
const Trending=(props)=>{
    return(
        <Container>
            <h4>Trending</h4>
            <Content>
                <Wrap>
                    <Link to="/">
                        <img src="https://imgs.search.brave.com/BDaJICGdAMaOkHT6hCFPN1u-JsJX12SzVt66WiIjD3c/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9sb25n/d29vZGdhcmRlbnMu/b3JnL3NpdGVzL2Rl/ZmF1bHQvZmlsZXMv/aGlnaGxpZ2h0X2lt/YWdlcy8xOTk5LTAy/NjQtYS1wMzE4NzA5/NF8wLmpwZw" alt="" />
                    </Link>
                </Wrap>

                 <Wrap>
                    <Link to="/">
                        <img src="https://imgs.search.brave.com/qKgBEhBLdL0qstcsFKQr8sIKYuWhzI_monkybKOIrcs/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aXhlbHN0YWxrLm5l/dC93cC1jb250ZW50/L3VwbG9hZHMvMjAx/Ni8xMC9EaXNuZXkt/Q2FzdGxlLVBob3Rv/cy5qcGc" alt="" />
                    </Link>
                </Wrap>

                 <Wrap>
                    <Link to="/">
                        <img src="https://imgs.search.brave.com/GMV_p9c3Kceu907aU02hGyabFw_2wwk0ai_Q7QF34M8/rs:fit:1200:1000:1/g:ce/aHR0cHM6Ly9jZG4t/aW1hZ2UudHJhdmVs/YW5kbGVpc3VyZS5j/b20vc2l0ZXMvZGVm/YXVsdC9maWxlcy9z/dHlsZXMvMTYwMHgx/MDAwL3B1YmxpYy8x/NDg5NDIxOTc2L3dh/bHQtZGlzbmV5LXdv/cmxkLW1hZ2ljLWtp/bmdkb20tRElTR1VJ/REUwMzE3LmpwZz9p/dG9rPVczOHhwby1S" alt="" />
                    </Link>
                </Wrap>

                 <Wrap>
                    <Link to="/">
                        <img src="https://imgs.search.brave.com/8qipGSCvAXrXQf8rZQX4zegQWKiwW_SRL53ceYow8fE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9kMjMu/Y29tL2FwcC91cGxv/YWRzLzIwMTUvMDcv/ZDIzLXdhbHQtbWlj/a2V5LXNob3VsZGVy/LXdhbGxwYXBlci0x/NjAweDEyMDAuanBn" alt="" />
                    </Link>
                </Wrap>


            </Content>
        </Container>
    )
};
const Wrap=styled.div`
    padding-top:56.25%;
    border-radius:10px;
    cursor:pointer;
    overflow:hidden;
    position:relative;
    border:3px solid gray;
    img{
        inset:0px;
        height: 100%;
        width:100%;
        position:absolute;
        object-fit:cover;
        opacity:1;
        display:block;
        transition:opacity 500ms ease-in-out;
        z-index:1;
        top:0;
    }
    &:hover{
        transform:scale(1.05);
        border-color:white;
    }

`

const Container=styled.div`
    padding:0 0 26px;
`

const Content=styled.div`
    margin-top:10px;
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4, minmax(0, 1fr));

    @media and only screen and (max-width:768px){
        grid-template-columns:repeat(2, minmax(0, 1fr))
    }
`
export default Trending;