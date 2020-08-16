import styled from "styled-components/native";
import Constants from "expo-constants";

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
`;
