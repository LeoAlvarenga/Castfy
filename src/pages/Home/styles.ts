import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const MiniPlayer = styled.TouchableOpacity`
    flex-direction: row;
    background: #171717;
    padding: 16px;
    padding-bottom: 32px;
    align-items: center;
    justify-content: space-between;
`;

export const MiniPlayerInfo = styled.View`
    justify-content: space-around;
`

export const MiniPlayerImage = styled.Image`
    height: 72;
    width: 72;
`;

export const MiniPlayerTitle = styled.Text`
    color: #fff;
    font-size: 24px;
`

export const MiniPlayerSubtitle = styled.Text`
color: #bbb;
font-size: 16px;

`
