import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Cover = styled.Image`
  margin-top: 96px;
  background: blue;
  align-self: center;
  width: 256px;
  height: 256px;
`;

export const TrackLists = styled.View`
  flex: 1;
  margin-top: 24px;
  padding: 0 8px;
`;
export const Track = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-bottom-color: #fff;
  margin-top: 16px;
`;

export const TrackTitle = styled.Text`
  font-size: 26px;
  color: #fff;
  flex-basis: 100%;
`;

export const TrackInfo = styled.Text`
  font-size: 16px;
  color: #bbb;
`;
