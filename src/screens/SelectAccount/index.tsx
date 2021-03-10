import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Logo,
  Account,
  AccountImage,
  AccountName,
  AccountNumber,
  LoginButton,
  LoginButtonText,
  Footer,
  FooterAccount,
  ISafe,
  ISafeImage,
  ISafeText,
} from './styles';

import profileImg from '../../assets/profile.png';
import lockImage from '../../assets/lock.png';

const SelectAccount: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToDashboard = useCallback(() => {
    navigate('DashBoard');
  }, [navigate]);

  return (
    <Container>
      <Logo>Inter</Logo>

      <Account>
        <AccountImage source={profileImg} />
        <AccountName>João Vitor</AccountName>
        <AccountNumber>Conta 0000000-0</AccountNumber>
        <LoginButton onPress={navigateToDashboard}>
          <LoginButtonText>Entrar</LoginButtonText>
        </LoginButton>
      </Account>

      <Footer>
        <ISafe>
          <ISafeImage source={lockImage} />
          <ISafeText>iSafe</ISafeText>
        </ISafe>
        <FooterAccount>Trocar ou abrir conta</FooterAccount>
      </Footer>
    </Container>
  );
};

export default SelectAccount;
