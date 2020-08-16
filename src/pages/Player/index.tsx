import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  TopBar,
  Left,
  Middle,
  Right,
  Title,
  Subtitle,
} from "./styles";

const Player: React.FC = () => {
  return (
    <LinearGradient colors={["#464749", "#1b1a1f"]} style={{ flex: 1 }}>
      <TopBar>
        <Left>
          <Icon name="chevron-down" size={20} color="white" />
        </Left>
        <Middle>
          <Title>Tocando Pordcast</Title>
          <Subtitle>Hpsters ponto techj</Subtitle>
        </Middle>
        <Right>
          <Icon name="more-vertical" size={20} color="white" />
        </Right>
      </TopBar>
      <Container></Container>
    </LinearGradient>
  );
};

export default Player;
