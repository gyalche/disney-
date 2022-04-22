import styled from 'styled-components';
import React from 'react'
const Recommends=(props)=>{
    return(
        <Container>
            <h4>Recommended for you</h4>
            <Content>
                <div>one</div>
                <div>one</div>

            </Content>
        </Container>
    )
};

const Container=styled.div`
    padding:0 0 26px;
`

const Content=styled.div`
    display:grid;
    grid-gap:25px;

    grid-template-columns:repeat(2, minmax(0, 1fr))
`
export default Recommends;