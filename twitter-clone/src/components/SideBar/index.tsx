import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body
} from './styles';

const SideBar: React.FC = ( ) => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon/>
            </SearchWrapper>

            <StickyBox>
            <Body>
                <List 
                    title= "Talvez você curta"
                    elements={[
                        <FollowSugestion 
                        name= "Sol Rodrigues"
                        nickname= "@solrodrigues"
                        />,
                        <FollowSugestion 
                        name= "Pedro Orlando"
                        nickname= "@orlando_pedro"
                        />,
                        <FollowSugestion 
                        name= "Hudson Ferraz"
                        nickname= "@hudsonferraz_"
                        />,
                    ]}
                />


                <List 
                    title= "Trending Topics"
                    elements={[
                        <News/>, <News/>, <News/>
                    ]}
                />


            </Body>
            </StickyBox>
        </Container>
    )
};

export default SideBar;