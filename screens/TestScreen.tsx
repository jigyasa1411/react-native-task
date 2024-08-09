
import React, {useEffect, useState} from 'react';

import RootStackParamList from '../model/RootStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

import { RouteProp } from '@react-navigation/native';


type BookDetailScreenRouteProp = RouteProp<RootStackParamList, 'TestScreen'>;
type BookDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TestScreen'>;

type Props = {
    route: BookDetailScreenRouteProp;
    navigation: BookDetailScreenNavigationProp;
};

type Movie = {
    id: string;
    title: string;
    releaseYear: string;
  };

const TestScreen: React.FC<Props> = ({ route }) => {
    const { test } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<Movie[]>([]);
    const getMovies = async () => {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
        console.log('API Response:', json);
        console.log('Movies:', json.movies);
          setData(json.movies);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        getMovies();
      }, []);
    
      return (
        <View style={{flex: 1, padding: 24}}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={data}
              keyExtractor={({id}) => id}
              renderItem={({item}) => (
                <Text>
                  {item.title}, {item.releaseYear}
                </Text>
              )}
            />
          )}
        </View>
      );



};


const getMoviesFromApiAsync = async () => {
    try {
      const response = await fetch(
        'https://reactnative.dev/movies.json',
      );
      const json = await response.json();
      return json.movies;
    } catch (error) {
      console.error(error);
    }
  };
export default TestScreen;
