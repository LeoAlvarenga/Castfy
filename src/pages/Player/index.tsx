import React from "react";
import { Feather as Icon, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import {
  Container,
  TopBar,
  Left,
  Middle,
  Right,
  Title,
  Subtitle,
  CoverArea,
  PlayerArea,
  CoverImage,
  PlayerTitle,
  PlayerSubtitle,
  PlayButton,
  Controls,
  SliderCurrentTime,
  SliderTotalTime,
  ControlSlider,
  AudioSlider,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

const Player: React.FC = () => {

  const navigation = useNavigation()

  return (
    <LinearGradient colors={["#464749", "#1b1a1f"]} style={{ flex: 1 }}>
      <TopBar>
        <Left>
          <Icon name="chevron-down" size={20} color="white" onPress={() => navigation.goBack()} />
        </Left>
        <Middle>
          <Title>Tocando Podcast</Title>
          <Subtitle>Hipsters ponto Tech</Subtitle>
        </Middle>
        <Right>
          <Icon name="more-vertical" size={20} color="white" />
        </Right>
      </TopBar>
      <Container>
        <CoverArea>
          <CoverImage
            source={{
              uri:
                "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/08/NC_738_lendas_da_segunda_guerra-1210x544.jpg",
            }}
          />
        </CoverArea>
        <PlayerArea>
          <PlayerTitle>React-Native - Hipsters #666</PlayerTitle>
          <PlayerSubtitle>Hipsters Ponto Tech</PlayerSubtitle>
          <Controls>
            <ControlSlider>
              <AudioSlider 
                thumbTintColor="#fff"
                minimumTrackTintColor="#1dd65f"
                maximumTrackTintColor="#777"
                minimumValue={0}
                maximumValue={100}
                value={40}
              />
            <SliderCurrentTime>
              3:30
            </SliderCurrentTime>
            <SliderTotalTime>
              5:00
            </SliderTotalTime>
            </ControlSlider>
          <PlayButton>
            <MaterialIcons name="play-circle-filled" color="white" size={88} />
          </PlayButton>
          </Controls>
        </PlayerArea>
      </Container>
    </LinearGradient>
  );
};

export default Player;
