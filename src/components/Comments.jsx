import React from 'react';
import Comment from './Comment';
import styled from "styled-components";

const Container = styled.div``;

const NewComment = styled.div` 
    display: flex; 
    align-items: center; 
    gap: 10px;
`;

const Avatar = styled.img` 
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Input = styled.input` 
    border: none; 
    border-bottom: 1px solid ${({theme})=>theme.soft}; 
    color: ${({theme})=>theme.text}; 
    background-color: transparent;
    outline: none; 
    padding: 5px; 
    width: 100%;
`;

const Comments = () => {
    return (
        <Container>
            <NewComment>
                <Avatar src="https://yt3.ggpht.com/yti/APfAmoH44jc98NhOcARL3uaZZWbSvvxCms3BNvlXwQ=s88-c-k-c0x00ffffff-no-rj-mo" />
                <Input placeholder="Add a comment..." />
            </NewComment>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </Container>
    )
}

export default Comments