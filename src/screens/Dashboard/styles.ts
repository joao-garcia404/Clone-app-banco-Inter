import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  background: #f5f6fa;
`;

export const Header = styled.View`
  width: 100%;
  height: 120px;
  background: #ff7828;

  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderAccount = styled.View`
  padding: 20px 20px;
`;

export const BalanceText = styled.Text`
  color: #fff;
  opacity: 0.6;
`;

export const HeaderBalance = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Balance = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ShowBalanceIcon = styled.Image`
  width: 25px;
  height: 25px;
  margin-left: 15px;
`;

export const HeaderUpdated = styled.Text`
  color: #fff;
  opacity: 0.6;
`;

export const HeaderProfileImage = styled.Image`
  width: 45px;
  height: 45px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Actions = styled.View`
  position: relative;
  top: -20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TransferAction = styled(RectButton)`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const PixAction = styled(RectButton)`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
`;

export const InvestAction = styled(RectButton)`
  width: 110px;
  height: 110px;
  border-radius: 10px;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: #f7d2bc;
  align-items: center;
  justify-content: center;
`;

export const TransferIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const PixIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

export const InvestIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const TransferText = styled.Text`
  margin-top: 10px;
`;

export const PixText = styled.Text`
  margin-top: 10px;
`;

export const InvestText = styled.Text`
  margin-top: 10px;
`;

export const ChevronDownIcon = styled.Image`
  position: relative;
  top: -15px;
  width: 50px;
  height: 50px;
  align-self: center;
`;

export const Tips = styled.ScrollView``;

export const Extract = styled.View`
  flex-direction: column;
  /* justify-content: center; */
  height: 180px;
  padding: 20px;
  margin: 0 20px;
  background: #fff;
  border-radius: 20px;
`;

export const ExtractHeader = styled.View`
  flex-direction: row;
  /* align-items: center; */
  justify-content: space-between;
`;

export const ExtractHeaderText = styled.Text`
  font-weight: bold;
  font-size: 17px;
`;

export const ExtractHeaderIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ExtractMain = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ExtractMainText = styled.Text`
  color: #363636;
`;

export const ExtractMainIcon = styled.Image`
  width: 110px;
  height: 110px;
`;

export const Investments = styled.View`
  flex-direction: column;
  /* justify-content: center; */
  height: 180px;
  padding: 20px;
  margin: 0 20px;
  background: #fff;
  border-radius: 20px;
`;

export const Mastercard = styled.View`
  flex-direction: column;
  /* justify-content: center; */
  height: 180px;
  padding: 20px;
  margin: 0 20px;
  background: #fff;
  border-radius: 20px;
`;

export const MastercardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const MastercardHeaderIconText = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const MastercardHeaderText = styled.Text``;

export const MastercardHeaderIconCard = styled.Image`
  width: 40px;
  height: 25px;
  margin-left: 10px;
`;

export const MastercardHeaderIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const PurchasingSection = styled.View`
  width: 100%;
  margin-top: 20px;
  background: #fff;
`;

export const InterShop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px;
  border: 1px solid rgba(255, 120, 40, 0.2);
  border-radius: 10px;
  padding: 20px;
`;

export const InterShopContent = styled.View`
  flex-direction: column;
`;

export const InterShopIcon = styled.Image`
  width: 40px;
  height: 40px;
`;

export const InterShopTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-top: 10px;
`;

export const InterShopText = styled.Text`
  margin-top: 6px;
  color: #363636;
`;

export const InterShopImage = styled.Image``;

export const TravelShell = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 20px;
`;

export const InterTravel = styled.View`
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid rgba(255, 120, 40, 0.2);
`;

export const InterTravelIcon = styled.Image`
  width: 35px;
  height: 35px;
`;

export const InterTravelTitle = styled.Text`
  font-weight: bold;
  margin-top: 5px;
`;

export const InterTravelText = styled.Text`
  margin-top: 5px;
  color: #363636;
`;

export const ShellBox = styled.View`
  flex-direction: column;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid rgba(255, 120, 40, 0.2);
`;

export const ShellBoxIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const ShellBoxTitle = styled.Text`
  font-weight: bold;
  margin-top: 5px;
`;

export const ShellBoxText = styled.Text`
  margin-top: 5px;
  color: #363636;
`;

export const LifeStyleSection = styled.View`
  width: 100%;
  background: #fff;
`;

export const LifeStyleTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 25px;
`;

export const LifeStyleContainerItems = styled.View`
  margin: 20px 40px 0;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LifeStyleContainerItem = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 25px;
`;

export const LifeStyleImageContainer = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background: #f5f6fa;

  justify-content: center;
  align-items: center;
`;

export const LifeStyleImageText = styled.Text`
  font-size: 12px;
  color: #363636;
`;

export const SuportSection = styled.View`
  width: 100%;
  background: #fff;
  border-top-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
`;

export const BabiSuport = styled.View`
  margin: 20px 20px;
  padding: 0 20px;
  border: 1px solid rgba(255, 120, 40, 0.2);
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const BabiSuportContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 0;
`;

export const BabiSuportImage = styled.Image``;

export const BabiSuportText = styled.View`
  margin-left: 10px;
`;

export const BabiSuportTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const BabiSuportDescription = styled.Text`
  margin-top: 2px;
  font-size: 13px;
`;

export const ChevronRightIcon = styled.Image`
  margin-left: auto;
`;

export const IsafeSuport = styled.View`
  margin: 0px 20px;
  margin-bottom: 25px;
  padding: 0 20px;
  border: 1px solid rgba(255, 120, 40, 0.2);
  border-radius: 10px;

  flex-direction: row;
  align-items: center;
`;

export const IsafeContent = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

export const IsafeText = styled.View`
  margin-left: 20px;
`;

export const IsafeTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const IsafeDescription = styled.Text`
  margin-top: 2px;
  font-size: 13px;
`;

export const IsafeImage = styled.Image`
  margin-left: auto;
`;

export const InviteSection = styled.View`
  padding: 20px 20px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InviteContent = styled.View``;

export const InviteTitle = styled.Text`
  font-size: 17px;
  font-weight: bold;
`;

export const InviteDescription = styled.Text`
  font-size: 13px;
  color: #363636;
  margin-top: 4px;
`;

export const InviteButton = styled(RectButton)`
  width: 130px;
  height: 30px;
  background: #ff7828;
  border-radius: 10px;
  margin-top: 10px;

  align-items: center;
  justify-content: center;
`;

export const InviteButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const InviteImage = styled.Image`
  width: 100px;
  height: 100px;
`;
