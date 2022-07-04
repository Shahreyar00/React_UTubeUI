import React from 'react';
import styled from "styled-components";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";


const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({ theme }) => theme.bgLighter};
    height: 56px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    padding: 0px 20px;
    position: relative;

    @media screen and (max-width:640px){
        padding: 0px 5px;
    }
`;

const Search = styled.div`
    width: 40%;
    position: absolute;
    left: 0px;
    right: 0px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    border: 1.5px solid #ccc;
    border-radius: 3px;

    @media screen and (max-width:640px){
        width: 60%;
    }
`;

const Input = styled.input` 
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 15px;
    color: ${({theme})=>theme.text}; 
`;

const Button = styled.button` 
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff; 
    color: #3ea6ff;
    border-radius: 3px; 
    font-weight: 500; 
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;

    @media screen and (max-width:640px){
        padding: 5px;
    }    
`;

const Tagtext = styled.span` 
    @media screen and (max-width:640px){
        display: none;
    }
`;



const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Search>
                    <Input placeholder="Search" />
                    <SearchOutlinedIcon />
                </Search>
                <Link to="signin" style={{textDecoration:"none"}}>
                    <Button>
                        <AccountCircleOutlinedIcon />
                        <Tagtext>
                            SIGN IN 
                        </Tagtext>
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Navbar