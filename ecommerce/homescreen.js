import React from 'react';
import { FlatList, View, Image, Text, StyleSheet } from 'react-native';

const App = () => {
  // Array of objects with id, image URI, and name
  const data = [
    { id: 1, img: 'https://via.placeholder.com/150', name: 'Image 1' },
    { id: 2, img: 'https://via.placeholder.com/150', name: 'Image 2' },
    { id: 3, img: 'https://via.placeholder.com/150', name: 'Image 3' },
  ];

  return ( 
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.img }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
      )}
      numColumns={2} // Displays items in two columns
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  card: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  textContainer: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
});

export default App;
