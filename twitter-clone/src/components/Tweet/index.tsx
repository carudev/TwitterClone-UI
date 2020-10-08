import React from 'react';

import {
    Container,
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    ComentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';


const Tweet: React.FC = ( ) => {
    return (
        <Container>
            
            <Retweeted>
                <RetweetIcon/>
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar/>

                <Content>
                    <Header>
                        <strong>Carol Oliveira</strong>
                        <span>@carudev</span>
                        <Dot/>
                        <time> 01 de out</time>
                    </Header>

                    <Description>Contrata nois</Description>

                    <ImageContent/>

                    <Icons>
                        <Status>
                            <ComentIcon />
                            187
                        </Status>

                        <Status>
                            <RetweetIcon />
                            7832
                        </Status>

                        <Status>
                            <LikeIcon />
                            8.945
                        </Status>

                    </Icons>
                </Content>
            </Body>
        </Container>
    );
}

export default Tweet;