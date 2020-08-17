import React from 'react';
import { View } from 'react-native';

import { Container, MiniPlayerImage, MiniPlayerInfo, MiniPlayerSubtitle, MiniPlayerTitle } from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MiniPlayer: React.FC = () => {

    const navigation = useNavigation()
  return (
    <Container activeOpacity={0.7} onPress={() => navigation.navigate('Player')} >
    <MiniPlayerImage
      source={{
        uri:
          "https://uploads.jovemnerd.com.br/wp-content/uploads/2020/08/NC_738_lendas_da_segunda_guerra-1210x544.jpg",
      }}
    />
    <MiniPlayerInfo>
      <MiniPlayerTitle numberOfLines={1} ellipsizeMode="clip" >Meu Podcast #666</MiniPlayerTitle>
      <MiniPlayerSubtitle>Autor</MiniPlayerSubtitle>
    </MiniPlayerInfo>
    <TouchableOpacity activeOpacity={0.7}  style={{ flex: 1 }} >
      <MaterialIcons name="play-circle-filled" color="#fff" size={56} style={{ flex: 1 }} />
    </TouchableOpacity>
  </Container>
  );
}

export default MiniPlayer;