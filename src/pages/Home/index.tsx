import React from "react";
import { Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  Container,
  Title,
  Subtitle,
  PodcastList,
  PodcastImage,
  PodcastTile,
  PodcastTitle,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import MiniPlayer from "../../components/MiniPlayer";

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#464749", "#1b1a1f"]}>
      <Container>
        <Title>Podcasts</Title>
        <Subtitle>Favoritos</Subtitle>
        <PodcastList horizontal>
          <PodcastTile>
            <PodcastImage
              source={{
                uri:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
              }}
            />
            <PodcastTitle>Podcast</PodcastTitle>
          </PodcastTile>
        </PodcastList>
        <Subtitle>Atualizados Recentemente</Subtitle>
        <PodcastList horizontal>
          <PodcastTile>
            <PodcastImage
              source={{
                uri:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
              }}
            />
            <PodcastTitle>Podcast</PodcastTitle>
          </PodcastTile>
        </PodcastList>
        <Subtitle>Todos</Subtitle>
        <PodcastList horizontal>
          <PodcastTile>
            <PodcastImage
              source={{
                uri:
                  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
              }}
            />
            <PodcastTitle>Podcast</PodcastTitle>
          </PodcastTile>
        </PodcastList>
      </Container>
      <MiniPlayer />
    </LinearGradient>
  );
};

export default Home;
