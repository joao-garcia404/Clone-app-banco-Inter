import React from 'react';
import { StatusBar } from 'react-native';
import {
  Container,
  Header,
  HeaderAccount,
  BalanceText,
  HeaderBalance,
  Balance,
  ShowBalanceIcon,
  HeaderUpdated,
  HeaderProfileImage,
  Actions,
  TransferAction,
  PixAction,
  InvestAction,
  IconContainer,
  TransferIcon,
  PixIcon,
  InvestIcon,
} from './styles';

import eyeIcon from '../../assets/eye.png';
import profileImg from '../../assets/profile.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="#9d4814" />
      <Header>
        <HeaderAccount>
          <BalanceText>Saldo em conta</BalanceText>
          <HeaderBalance>
            <Balance>R$ 200,00</Balance>
            <ShowBalanceIcon source={eyeIcon} />
          </HeaderBalance>
          <HeaderUpdated>Atualizado neste momento</HeaderUpdated>
        </HeaderAccount>
        <HeaderProfileImage source={profileImg} />
      </Header>

      <Actions>
        <TransferAction>
          <IconContainer>
            <TransferIcon />
          </IconContainer>
        </TransferAction>
        <PixAction>
          <IconContainer>
            <PixIcon />
          </IconContainer>
        </PixAction>
        <InvestAction>
          <IconContainer>
            <InvestIcon />
          </IconContainer>
        </InvestAction>
      </Actions>
    </Container>
  );
};

export default Dashboard;
