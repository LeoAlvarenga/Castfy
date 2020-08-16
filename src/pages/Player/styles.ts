import styled from "styled-components/native";
import Constants from "expo-constants";
import { MaterialIcons } from "@expo/vector-icons";
import { Slider } from "react-native";

export const TopBar = styled.View`
  margin-top: ${Constants.statusBarHeight + 16}px;
  flex-direction: row;
`;

export const Middle = styled.View`
  flex: 3;
  align-items: center;
`;

export const Right = styled.View`
  flex: 1;
  padding-right: 16px;
  align-items: flex-end;
`;

export const Left = styled.View`
  flex: 1;
  padding-left: 16px;
`;

export const Title = styled.Text`
  color: white;
  text-transform: uppercase;
`;

export const Subtitle = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  padding: 0 32px;
  padding-bottom: 32px;
`;

export const CoverArea = styled.View`
  flex: 2;
  justify-content: center;
`;

export const CoverImage = styled.Image`
  flex: 1;
  max-height: 70%;
`;

export const PlayerArea = styled.View`
  flex: 1;
`;

export const PlayerTitle = styled.Text`
  color: white;
  font-size: 24px;
`;

export const Controls = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PlayerSubtitle = styled.Text`
  color: #bbbbbb;
  font-size: 16px;
`;

export const PlayButton = styled.TouchableOpacity``;

export const ControlSlider = styled.View`
  flex-basis: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const AudioSlider = styled(Slider)`
  flex-basis: 100%;
`;

export const SliderCurrentTime = styled.Text`
  color: #bbbbbb;
`;

export const SliderTotalTime = styled.Text`
  color: #bbbbbb;
`;
