import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import { Container, Content, Text } from './styles';

interface ProfileContentProps {
  title: string;
}

const ProfileContent: React.FC<ProfileContentProps> = ({ title }) => {
  return (
    <Container>
      <Content>
        <Text>{title}</Text>
        <Icon name="chevron-right" size={25} color="#48484f" />
      </Content>
    </Container>
  );
};

export default ProfileContent;
