import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import RootStackParamList from '../model/RootStackParamList';



type BookDetailScreenRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;
type BookDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TestScreen'>;

type Props = {
  route: BookDetailScreenRouteProp;
  navigation: BookDetailScreenNavigationProp;
};



const BookDetailScreen: React.FC<Props> = ({ route ,navigation}) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.bookCover}
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small_2x/old-book-watercolor-illustration-png.png' }}
      />
      <SizedBox prop={1000}></SizedBox>
      <Text style={styles.bookTitle}>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.description}</Text>
      <View style={{ height: 20 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>{
          navigation.navigate('TestScreen',{test:"test"})
        } } >
        <Text style={styles.buttonText}>Call API</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const SizedBox = (prop: any) => {
  return <View style={{ height: prop }}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignContent: "center",
    alignItems: "center"

  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  bookCover: {
    width: 150,
    height: 150,
    borderRadius: 4,
    marginRight: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default BookDetailScreen;



