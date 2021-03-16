import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Text`
  position: absolute;
  top: 40px;
  font-weight: bold;
  color: #ff7828;
  font-size: 34px;
`;

export const Account = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AccountImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const AccountName = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #262626;
  margin-top: 10px;
`;

export const AccountNumber = styled.Text`
  font-size: 16px;
  color: #1a1919;
  margin-top: 5px;
`;

export const LoginButton = styled(RectButton)`
  width: 200px;
  height: 45px;
  border-radius: 10px;
  background: #ff7828;
  margin-top: 30px;

  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 20px;

  width: 100%;
  padding: 0 20px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ISafe = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ISafeImage = styled.Image`
  width: 20px;
  height: 20px;
`;

export const ISafeText = styled.Text`
  font-weight: bold;
  color: #f87e31;
`;

export const FooterAccount = styled.Text`
  font-weight: bold;
  color: #f87e31;
`;
