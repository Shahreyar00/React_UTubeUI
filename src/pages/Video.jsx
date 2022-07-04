import React from 'react';
import styled from "styled-components";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
import Card from '../components/Card';
import Comments from '../components/Comments';

const Container = styled.div`
    display: flex;
    gap: 20px;

    @media screen and (max-width:1024px){
        flex-direction: column;
    }
`;

const Content = styled.div` 
    flex: 5;
`;

const VideoWrapper = styled.div`
    
`;
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    margin-bottom: 10px;
    color: ${({theme})=>theme.text}; 
`;

const Details = styled.div` 
    display: flex; 
    align-items: center; 
    justify-content: space-between;

    @media screen and (max-width:560px){
        flex-direction: column;
        gap: 5px;
        align-items: flex-start;
    }
`;

const Info = styled.span` 
    color: ${({theme})=>theme.textSoft}; 
`;

const Buttons = styled.div` 
    display: flex; 
    gap: 20px;
    color: ${({theme})=>theme.text}; 
`;

const Button = styled.div` 
    display: flex; 
    align-items: center;
    gap: 5px;
    cursor: pointer;
`;

const Hr = styled.hr` 
    margin: 15px 0px;
    border: 0.5px solid ${({theme})=>theme.soft};
`;

const Recommendation = styled.div` 
    flex: 2;
    display: flex;
    flex-direction: column;

    @media screen and (max-width:1024px){
        flex-direction: row;
        flex-wrap: wrap;
        gap: 10px;
        justify-content: center;
    }
`;

const Channel = styled.div` 
    display: flex;
    justify-content: space-between;
`;

const ChannelInfo = styled.div` 
    display: flex; 
    gap: 20px;
`;

const Image = styled.img` 
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const ChannelDetail = styled.div` 
    display: flex; 
    flex-direction: column;
    color: ${({theme})=>theme.text};
`;

const ChannelName = styled.span`
    font-weight: 500;
`;

const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.textSoft};
    font-size: 12px;
`;

const Description = styled.p`
    font-size: 14px;

    @media screen and (max-width: 560px){
        display: none;
    }
`;

const Subscribe = styled.button`
    background-color: #cc1a00;
    text-transform: uppercase;
    font-weight: 500;
    color: white;
    border: none;
    border-radius: 3px;
    height: max-content;
    padding: 10px 20px;
    cursor: pointer;
`;

const Video = () => {
    return (
        <Container>
            <Content>
                <VideoWrapper>
                    <iframe
                        width="100%"
                        height="350px"
                        src="https://www.youtube.com/embed/mLUTB5TwM4o"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </VideoWrapper>
                <Title>Test Video</Title>
                <Details>
                    <Info>123,345 views • July 2, 2022</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon /> 1423
                        </Button>
                        <Button>
                            <ThumbDownOffAltOutlinedIcon /> Dislike
                        </Button>
                        <Button>
                            <ReplyOutlinedIcon /> Share
                        </Button>
                        <Button>
                            <AddTaskOutlinedIcon /> Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />
                <Channel>
                    <ChannelInfo>
                        <Image src="https://yt3.ggpht.com/ytc/AKedOLQuONFgFu1BtXgGqGhmOmc8c8JqTVDADFLTOKyt4g=s176-c-k-c0x00ffffff-no-rj" />
                        <ChannelDetail>
                            <ChannelName>Carwow</ChannelName>
                            <ChannelCounter>7.16M subscribers</ChannelCounter>
                            <Description>
                                Need help buying your next car? Click the following link and my team and I will help you 
                                choose your ideal car at a fair price - from Mat Watson! http://bit.ly/-Help-Me-carwow
                            </Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>subscribe</Subscribe>
                </Channel>
                <Hr />
                <Comments />
            </Content>
            <Recommendation>
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
                <Card type="sm" />
            </Recommendation>
        </Container>
    )
}

export default Video