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
  PodcastGrid,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import MiniPlayer from "../../components/MiniPlayer";
import { ScrollView } from "react-native-gesture-handler";

interface IPodcasts {
  name: string;
  imageUri: string;
}

const Home: React.FC = () => {
  const navigation = useNavigation();

  const podcasts: IPodcasts[] = [
    {
      name: "podcast 1",
      imageUri:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 2",
      imageUri:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "podcast 3",
      imageUri:
        "https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "podcast 4",
      imageUri:
        "https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "podcast 5",
      imageUri:
        "https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 6",
      imageUri:
        "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 7",
      imageUri:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1058&q=80",
    },
    {
      name: "podcast 8",
      imageUri:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 9",
      imageUri:
        "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "podcast 10",
      imageUri:
        "https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "podcast 11",
      imageUri:
        "https://images.unsplash.com/photo-1529602266431-5e205a27eb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "podcast 12",
      imageUri:
        "https://images.unsplash.com/photo-1482442120256-9c03866de390?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 13",
      imageUri:
        "https://images.unsplash.com/photo-1559526324-c1f275fbfa32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "podcast 14",
      imageUri:
        "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1058&q=80",
    },
  ];

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#464749", "#1b1a1f"]}>
      <Container>
        <Title>Podcasts</Title>
        <Subtitle>Favoritos</Subtitle>
        <PodcastList horizontal>
          {podcasts.map((podcast) => (
            <PodcastTile key={podcast.name} onPress={() => navigation.navigate("Details")} >
              <PodcastImage
                source={{
                  uri: podcast.imageUri,
                }}
              />
              <PodcastTitle>{podcast.name}</PodcastTitle>
            </PodcastTile>
          ))}
        </PodcastList>
        <Subtitle>Atualizados Recentemente</Subtitle>
        <PodcastList horizontal>
          {podcasts.reverse().map((podcast) => (
            <PodcastTile key={podcast.name} onPress={() => navigation.navigate("Details")} >
              <PodcastImage
                source={{
                  uri: podcast.imageUri,
                }}
              />
              <PodcastTitle>{podcast.name}</PodcastTitle>
            </PodcastTile>
          ))}
        </PodcastList>
        <Subtitle>Todos</Subtitle>
        <ScrollView>
          <PodcastGrid>
            {podcasts.reverse().map((podcast) => (
              <PodcastTile key={podcast.name} onPress={() => navigation.navigate("Details")} >
                <PodcastImage
                  source={{
                    uri: podcast.imageUri,
                  }}
                />
                <PodcastTitle>{podcast.name}</PodcastTitle>
              </PodcastTile>
            ))}
          </PodcastGrid>
        </ScrollView>
      </Container>
      <MiniPlayer />
    </LinearGradient>
  );
};

export default Home;
