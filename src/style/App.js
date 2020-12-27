import React from 'react';
import styled, {css} from 'styled-components';
import Button2 from './Button2';
/*
const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: ${props => props.color || 'black'};
    border-radius: 50%;
    ${props =>
    props.huge &&
    css`
        width: 10rem;
        height: 10rem;
    `}
`;*/

const AppBlock = styled.div`
        width: 512px;
        margin: 0 auto;
        margin-top : 4rem;
        border: 1px solid #424242;
        padding: 1rem;
`;
function App( {color}) {
    return  (
    <AppBlock>
        <Button2>Button</Button2>
    </AppBlock>
    );
    // <Circle color={color} huge />
}

export default App;
