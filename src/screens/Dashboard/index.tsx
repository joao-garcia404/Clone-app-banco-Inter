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
  TransferText,
  PixText,
  InvestText,
  ChevronDownIcon,
  Tips,
  Extract,
  ExtractHeader,
  ExtractHeaderText,
  ExtractHeaderIcon,
  ExtractMain,
  ExtractMainText,
  ExtractMainIcon,
  Investments,
  Mastercard,
  MastercardHeader,
  MastercardHeaderIconText,
  MastercardHeaderText,
  MastercardHeaderIconCard,
  MastercardHeaderIcon,
  PurchasingSection,
  InterShop,
  InterShopContent,
  InterShopIcon,
  InterShopTitle,
  InterShopText,
  InterShopImage,
  TravelShell,
  InterTravel,
  InterTravelIcon,
  InterTravelTitle,
  InterTravelText,
  ShellBox,
  ShellBoxIcon,
  ShellBoxTitle,
  ShellBoxText,
  LifeStyleSection,
  LifeStyleTitle,
  LifeStyleContainerItems,
  LifeStyleContainerItem,
  LifeStyleImageContainer,
  LifeStyleImageText,
  SuportSection,
  BabiSuport,
  BabiSuportContent,
  BabiSuportImage,
  BabiSuportText,
  BabiSuportTitle,
  BabiSuportDescription,
  ChevronRightIcon,
  IsafeSuport,
  IsafeContent,
  IsafeText,
  IsafeTitle,
  IsafeDescription,
  IsafeImage,
  InviteSection,
  InviteContent,
  InviteTitle,
  InviteDescription,
  InviteButton,
  InviteButtonText,
  InviteImage,
} from './styles';

import eyeIcon from '../../assets/eye.png';
import profileImg from '../../assets/profile.png';
import dolarImg from '../../assets/dolar.png';
import investImg from '../../assets/invest.png';
import pixImg from '../../assets/pix.png';
import chevronDownImg from '../../assets/chevron-down.png';
import closedEyeImg from '../../assets/closed-eye.png';
import pigImg from '../../assets/pig.png';
import cardImg from '../../assets/card.png';
import cartImg from '../../assets/cart.png';
import shopImg from '../../assets/shop.png';
import planeImg from '../../assets/plane.png';
import gasolineImg from '../../assets/gasoline.png';
import babiImg from '../../assets/babi.png';
import chevronRightImg from '../../assets/chevron-right.png';
import IsafeImg from '../../assets/Isafe.png';
import InviteImg from '../../assets/invite.png';

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
            <TransferIcon source={dolarImg} />
          </IconContainer>
          <TransferText>Transferência</TransferText>
        </TransferAction>
        <PixAction>
          <IconContainer>
            <PixIcon source={pixImg} />
          </IconContainer>
          <PixText>Pix</PixText>
        </PixAction>
        <InvestAction>
          <IconContainer>
            <InvestIcon source={investImg} />
          </IconContainer>
          <InvestText>Investimentos</InvestText>
        </InvestAction>
      </Actions>
      <ChevronDownIcon source={chevronDownImg} />

      <Tips horizontal>
        <Extract>
          <ExtractHeader>
            <ExtractHeaderText>Extrato</ExtractHeaderText>
            <ExtractHeaderIcon source={closedEyeImg} />
          </ExtractHeader>
          <ExtractMain>
            <ExtractMainIcon source={pigImg} />
            <ExtractMainText>
              As informações sobre seu perfil
              {'\n'}
              estão ocultas para garantir sua
              {'\n'}
              privacidade, para habilita-las,
              {'\n'}
              basta clicar no olhoacima.
            </ExtractMainText>
          </ExtractMain>
        </Extract>

        <Investments>
          <ExtractHeader>
            <ExtractHeaderText>Investimentos</ExtractHeaderText>
            <ExtractHeaderIcon source={closedEyeImg} />
          </ExtractHeader>
          <ExtractMain>
            <ExtractMainIcon source={pigImg} />
            <ExtractMainText>
              As informações sobre seu perfil
              {'\n'}
              estão ocultaspara garantir sua
              {'\n'}
              privacidade, para habilita-las,
              {'\n'}
              basta clicar no olhoacima.
            </ExtractMainText>
          </ExtractMain>
        </Investments>

        <Mastercard>
          <MastercardHeader>
            <MastercardHeaderIconText>
              <MastercardHeaderText>Mastercard</MastercardHeaderText>
              <MastercardHeaderIconCard source={cardImg} />
            </MastercardHeaderIconText>
            <MastercardHeaderIcon source={closedEyeImg} />
          </MastercardHeader>

          <ExtractMain>
            <ExtractMainIcon source={pigImg} />
            <ExtractMainText>
              As informações sobre seu perfil
              {'\n'}
              estão ocultas para garantir sua
              {'\n'}
              privacidade, para habilita-las,
              {'\n'}
              basta clicar no olho acima.
            </ExtractMainText>
          </ExtractMain>
        </Mastercard>
      </Tips>

      <PurchasingSection>
        <InterShop>
          <InterShopContent>
            <InterShopIcon source={cartImg} />
            <InterShopTitle>Inter Shop</InterShopTitle>
            <InterShopText>
              Compre e ganhe
              {'\n'}
              cachback
            </InterShopText>
          </InterShopContent>
          <InterShopImage source={shopImg} />
        </InterShop>

        <TravelShell>
          <InterTravel>
            <InterTravelIcon source={planeImg} />
            <InterTravelTitle>Inter Travel</InterTravelTitle>
            <InterTravelText>
              Receba cashback em
              {'\n'}
              passagens aéreas
            </InterTravelText>
          </InterTravel>

          <ShellBox>
            <ShellBoxIcon source={gasolineImg} />
            <ShellBoxTitle>Shell Box</ShellBoxTitle>
            <ShellBoxText>
              Abasteça seu veículo
              {'\n'}
              com cashback
            </ShellBoxText>
          </ShellBox>
        </TravelShell>
      </PurchasingSection>

      <LifeStyleSection>
        <LifeStyleTitle>Estilo de vida</LifeStyleTitle>

        <LifeStyleContainerItems>
          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Casa</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Entretenimento</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Tecnologia</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Transporte</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Esporte</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Viagem</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Saúde</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Beleza</LifeStyleImageText>
          </LifeStyleContainerItem>

          <LifeStyleContainerItem>
            <LifeStyleImageContainer />
            <LifeStyleImageText>Moda</LifeStyleImageText>
          </LifeStyleContainerItem>
        </LifeStyleContainerItems>
      </LifeStyleSection>

      <SuportSection>
        <BabiSuport>
          <BabiSuportContent>
            <BabiSuportImage source={babiImg} />
            <BabiSuportText>
              <BabiSuportTitle>Oi, posso ajudar?</BabiSuportTitle>
              <BabiSuportDescription>
                A Babi vai te ajudar com todo o
              </BabiSuportDescription>
              <BabiSuportDescription>
                conteúdo da nossa central
              </BabiSuportDescription>
            </BabiSuportText>
          </BabiSuportContent>
          <ChevronRightIcon source={chevronRightImg} />
        </BabiSuport>

        <IsafeSuport>
          <IsafeContent>
            <IsafeImage source={IsafeImg} />
            <IsafeText>
              <IsafeTitle>ISafe</IsafeTitle>
              <IsafeDescription>
                Token para autenticar suas
                {'\n'}
                transações na Conta Digital
              </IsafeDescription>
            </IsafeText>
          </IsafeContent>
          <ChevronRightIcon source={chevronRightImg} />
        </IsafeSuport>
      </SuportSection>

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

        <InviteImage source={InviteImg} />
      </InviteSection>
    </Container>
  );
};

export default Dashboard;
