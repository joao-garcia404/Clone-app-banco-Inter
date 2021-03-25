import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: #f5f6fa;
`;

export const Header = styled.View`
  padding: 10px 10px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const BackToDashboardContainer = styled(RectButton)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const ProfileImgContainer = styled.View``;

export const ProfileImg = styled.Image`
  width: 55px;
  height: 55px;
`;

export const ShareIconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #fff;

  align-items: center;
  justify-content: center;
`;

export const HeaderProfileText = styled.View`
  align-items: center;
  justify-content: center;

  padding-bottom: 15px;
  border-bottom-width: 1px;
  border-color: rgba(140, 144, 169, 0.2);
`;

export const HeaderProfileTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #48484f;
`;

export const HeaderProfileDescription = styled.Text`
  color: #8c90a9;
`;

export const HeaderFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 10px 50px;
`;

export const UserIconBackground = styled.View`
  padding: 2px 20px;
  background: #8c90a9;
  border-radius: 20px;
`;

export const RingIconBackground = styled.View`
  padding: 2px 20px;
  background: #f5f6fa;
`;

export const MenuIconBackground = styled.View`
  padding: 2px 20px;
  background: #f5f6fa;
`;
