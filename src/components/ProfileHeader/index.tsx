import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import profileImg from '../../assets/profile.png';

import {
  Container,
  Header,
  BackToDashboardContainer,
  ProfileImgContainer,
  ProfileImg,
  ShareIconContainer,
  HeaderProfileText,
  HeaderProfileTitle,
  HeaderProfileDescription,
  HeaderFooter,
  UserIconBackground,
  RingIconBackground,
  MenuIconBackground,
} from './styles';

const ProfileHeader: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('DashBoard');
  }, [navigate]);

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#999999" />
      <Header>
        <BackToDashboardContainer onPress={navigateToDashboard}>
          <Icon name="arrow-left" size={25} color="#ff7828" />
        </BackToDashboardContainer>

        <ProfileImgContainer>
          <ProfileImg source={profileImg} />
        </ProfileImgContainer>

        <ShareIconContainer>
          <Icon name="share-2" size={25} color="#ff7828" />
        </ShareIconContainer>
      </Header>

      <HeaderProfileText>
        <HeaderProfileTitle>
          JOAO VITOR DA SILVA EIRAS GARCIA
        </HeaderProfileTitle>
        <HeaderProfileDescription>
          agência 0000 | conta 0000000-0
        </HeaderProfileDescription>
      </HeaderProfileText>

      <HeaderFooter>
        <UserIconBackground>
          <Icon name="user" size={21} color="#fff" />
        </UserIconBackground>

        <RingIconBackground>
          <Icon name="bell" size={21} color="#8c90a9" />
        </RingIconBackground>

        <MenuIconBackground>
          <Icon name="menu" size={21} color="#8c90a9" />
        </MenuIconBackground>
      </HeaderFooter>
    </Container>
  );
};

export default ProfileHeader;
