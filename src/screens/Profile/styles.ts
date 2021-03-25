import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const ProfileScroll = styled.ScrollView``;

export const AppVersionContainer = styled.View`
  width: 100%;
  padding: 15px 0 0 15px;
`;

export const AppVersion = styled.View`
  width: 100%;
  border-bottom-width: 1px;
  border-color: rgba(140, 144, 169, 0.2);
  padding-right: 15px;
  padding-bottom: 15px;

  flex-direction: row;
  justify-content: space-between;
`;

export const AppVersionText = styled.Text`
  color: #8c90a9;
`;

export const AppVersionNumber = styled.Text`
  color: #8c90a9;
`;

export const AppLogout = styled(RectButton)`
  width: 100%;
  padding: 15px 0 15px 15px;
`;

export const AppLogoutText = styled.Text`
  color: #e31919;
`;

export const InviteSection = styled.View`
  padding: 20px 20px;
  background: #f5f6fa;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
