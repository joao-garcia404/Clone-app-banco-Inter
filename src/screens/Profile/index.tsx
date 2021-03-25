import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';

import inviteImg from '../../assets/invite.png';

import {
  Container,
  ProfileScroll,
  AppVersion,
  AppVersionContainer,
  AppVersionText,
  AppVersionNumber,
  AppLogout,
  AppLogoutText,
  InviteSection,
} from './styles';

import {
  InviteButton,
  InviteButtonText,
  InviteContent,
  InviteDescription,
  InviteImage,
  InviteTitle,
} from '../Dashboard/styles';

const Profile: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToSelectAccount = useCallback(() => {
    navigate('SelectAccount');
  }, [navigate]);

  return (
    <Container>
      <ProfileHeader />
      <ProfileScroll>
        <ProfileContent title="Seu nome" />
        <ProfileContent title="Alterar senha" />
        <ProfileContent title="Biometria" />
        <ProfileContent title="Gerenciar dispositivo" />
        <ProfileContent title="Conta digital MEI" />
        <ProfileContent title="Informe de rendimentos" />
        <ProfileContent title="Meus limites" />
        <ProfileContent title="Atualização cadastral" />
        <ProfileContent title="Central de privacidade" />

        <AppVersionContainer>
          <AppVersion>
            <AppVersionText>Versão do App</AppVersionText>
            <AppVersionNumber>9.3</AppVersionNumber>
          </AppVersion>
        </AppVersionContainer>

        <AppLogout onPress={navigateToSelectAccount}>
          <AppLogoutText>Sair do App</AppLogoutText>
        </AppLogout>

        <InviteSection>
          <InviteContent>
            <InviteTitle>Convide seus amigos</InviteTitle>
            <InviteDescription>
              Indique o Inter e chame todo mundo
              {'\n'}
              pra simplificar a vida!
            </InviteDescription>
            <InviteButton>
              <InviteButtonText>Convidar</InviteButtonText>
            </InviteButton>
          </InviteContent>

          <InviteImage source={inviteImg} />
        </InviteSection>
      </ProfileScroll>
    </Container>
  );
};

export default Profile;
