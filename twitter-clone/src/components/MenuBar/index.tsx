import React from 'react';

import Button from '../Button';

import {
    Container,
    Topside,
    Logo,
    MenuButton,
    HomeIcon,
    BellIcon,
    EmailIcon,
    FavoriteIcon,
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon

} from './styles';

const MenuBar: React.FC = ( ) => {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon/>
                    <span> Pagina Inicial </span>
                </MenuButton>

                <MenuButton>
                    <BellIcon/>
                    <span> Notificações </span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon/>
                    <span> Mensagens </span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon/>
                    <span> Favoritados </span>
                </MenuButton>

                <MenuButton  className="active">
                    <ProfileIcon/>
                    <span> Perfil </span>
                </MenuButton>


                <Button>
                    <span>Tweetar</span>
                </Button> 


            </Topside>

            <Botside>
                <Avatar/>

                <ProfileData>
                    <strong>Carol Oliveira</strong>
                    <span>@carudev</span>
                </ProfileData>

                <ExitIcon/>
            </Botside>
        </Container>
    ) 
}

export default MenuBar;