

import * as React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../model/RootStackParamList';


type BookDetailScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type BookDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Profile'>;

type Props = {
    route: BookDetailScreenRouteProp;
    navigation: BookDetailScreenNavigationProp;
};

const ProfileScreen: React.FC<Props> = ({ route }) => {
    const { userId } = route.params;

    return (
        <View>
            <Text>{userId}</Text>
            {/* <Text>{book.author}</Text>
            <Text>{book.description}</Text> */}
        </View>
    );
};

export default ProfileScreen;
