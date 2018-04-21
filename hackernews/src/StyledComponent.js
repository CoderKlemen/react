import React, { Component } from 'react';

import styled from 'styled-components';
// https://www.styled-components.com/docs/basics#react-native 


const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: papayawhip;
    border: none;
    border-radius: 3px;
`;

const Button = styled.button`
    background: ${props => props.primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

class StyledComponent extends Component {

    render() {
        return (
            <div>
                <Wrapper>
                    <Title>Hello World, this is my first styled component!</Title>
                </Wrapper>
                <Input placeholder="@mxstbr" type="text" />
                <Input value="@geelen" type="text" readOnly />
                <Button>Normal</Button>
                <Button primary>Primary</Button>
            </div>       
        );
    };

}

export default StyledComponent;
