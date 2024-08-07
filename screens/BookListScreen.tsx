import * as React from 'react';
import { FlatList, TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Book } from '../model/Book';
import { useBookViewModel } from '../viewmodel/BookViewModel';
import RootStackParamList from '../model/RootStackParamList';




type BookListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookList'>;

type Props = {
  navigation: BookListScreenNavigationProp;
};

const BookListScreen: React.FC<Props> = ({ navigation }) => {
  const { books } = useBookViewModel();

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity

      style={styles.bookItem}
      onPress={() => navigation.navigate('BookDetail', { book: item })}
    >
      <Image
        style={styles.bookCover}
        source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/019/900/152/small_2x/old-book-watercolor-illustration-png.png' }}
      />
      <View style={styles.bookInfo}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  bookItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bookCover: {
    width: 75,
    height: 75,
    borderRadius: 4,
    marginRight: 16,
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

export default BookListScreen;
