import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 56px;
  padding: 16px;
`;
export const Subtitle = styled.Text`
  color: #fff;
  font-size: 32px;
  padding: 4px 16px;
`;
export const PodcastList = styled.ScrollView`
  min-height: 128px;
`;

export const PodcastGrid = styled.View`
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  flex-basis: 100;
`;
export const PodcastTile = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PodcastTitle = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const PodcastImage = styled.Image`
  height: 90px;
  width: 90px;
  margin: 6px;
`;
