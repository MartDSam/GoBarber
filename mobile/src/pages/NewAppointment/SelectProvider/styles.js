import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const ProvidersList = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
    numColumns: 2,
})`
    margin-top: 60px;
    padding: 0px 20px;
`;

export const Provider = styled(RectButton)`
    width: 100%;
    flex: 0.5;
    background: #fff;
    border-radius: 4px;
    padding: 20px;
    align-items: center;
    margin: 0px 10px 20px;
`;

export const Avatar = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25px;
`;

export const Name = styled.Text`
    margin-top: 15px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    text-align: center;
`;
