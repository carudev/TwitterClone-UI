import React from 'react';

import {
    Container,
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

import Feed from '../Feed';
import icon from '../../assets/icon.png';

const ProfilePage: React.FC = () => {
    return (
        <Container>
            <Banner>
                <Avatar >
                    <img src={icon}/>
                </Avatar>
            </Banner>

            <ProfileData>
                 <EditButton outlined>Editar Perfil</EditButton>

                <h1>Carol Oliveira</h1>
                <h2>@carudev</h2>

                <p>Junior Developer</p>

                <ul>
                    <li>
                        <LocationIcon/>
                        Belo Horizonte, Brasil
                    </li>
                    <li>
                        <CakeIcon/>
                        Nascido(a) em 19 de Outubro
                    </li>
                </ul>



                <Followage>
                    <span>
                        seguindo <strong>2.564</strong>
                    </span>
                    <span>
                         <strong>8.965</strong> seguimores
                    </span>

                </Followage>
            </ProfileData>

            <Feed/>
        </Container>
    )
}

export default ProfilePage;