import React from "react";

import {
  Container,
  Cover,
  TrackLists,
  Track,
  TrackTitle,
  TrackInfo,
} from "./styles";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MiniPlayer from "../../components/MiniPlayer";

interface ITrack {
  name: string;
  date: string;
  time: string;
}

const Details: React.FC = () => {
  const tracks: ITrack[] = [
    { name: "Meu Podcast #001", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #002", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #003", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #004", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #005", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #006", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #007", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #008", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #009", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #010", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #011", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #012", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #013", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #014", date: "00/00/000", time: "50:00" },
    { name: "Meu Podcast #015", date: "00/00/000", time: "50:00" },
  ];
  return (
    <LinearGradient colors={["#464749", "#1b1a1f"]} style={{ flex: 1 }}>
      <Container>
        <Cover source={{ uri: 'https://images.unsplash.com/photo-1487537023671-8dce1a785863?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' }} />
        <TrackLists>
          {tracks.map((track) => (
            <Track activeOpacity={0.6}>
              <TrackTitle>{track.name}</TrackTitle>
              <TrackInfo>{track.date}</TrackInfo>
              <TrackInfo>{track.time}</TrackInfo>
            </Track>
          ))}
        </TrackLists>
      </Container>
      <MiniPlayer />
    </LinearGradient>
  );
};

export default Details;
