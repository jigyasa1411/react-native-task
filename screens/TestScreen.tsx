
import * as React from 'react';
import RootStackParamList from '../model/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import ProfileScreen from './ProfileScreen';

import { RouteProp } from '@react-navigation/native';


type BookDetailScreenRouteProp = RouteProp<RootStackParamList, 'TestScreen'>;
type BookDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TestScreen'>;

type Props = {
    route: BookDetailScreenRouteProp;
    navigation: BookDetailScreenNavigationProp;
};
const TestScreen: React.FC<Props> = ({ route }) => {
    const { test } = route.params;

    return (
        <View>
            <Text>{test}</Text>
            {/* <Text>{book.author}</Text>
            <Text>{book.description}</Text> */}
        </View>
    );
};

export default TestScreen;
