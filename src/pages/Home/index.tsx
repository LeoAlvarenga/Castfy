import React from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  MiniPlayer,
  Container,
  MiniPlayerImage,
  MiniPlayerTitle,
  MiniPlayerInfo,
  MiniPlayerSubtitle,
} from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// import { Container } from './styles';

const Home: React.FC = () => {

    const navigation = useNavigation()

  return (
    <LinearGradient style={{ flex: 1 }} colors={["#464749", "#1b1a1f"]}>
      <Container>
          <Button title="Clicar" onPress={() => navigation.navigate("Main", { screen: 'Details' })}/>
      </Container>
      <MiniPlayer activeOpacity={0.7} onPress={() => navigation.navigate('Player')} >
        <MiniPlayerImage
          source={{
            uri:
              "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/08/NC_738_lendas_da_segunda_guerra-1210x544.jpg",
          }}
        />
        <MiniPlayerInfo>
          <MiniPlayerTitle>Meu Podcast #666</MiniPlayerTitle>
          <MiniPlayerSubtitle>Autor</MiniPlayerSubtitle>
        </MiniPlayerInfo>
        <TouchableOpacity activeOpacity={0.7} >
          <MaterialIcons name="play-circle-filled" color="#fff" size={56} />
        </TouchableOpacity>
      </MiniPlayer>
    </LinearGradient>
  );
};

export default Home;
