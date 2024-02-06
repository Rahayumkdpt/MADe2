import React from 'react';
import { View, Text, Image, TextInput, ScrollView, StyleSheet } from 'react-native';

const CustomComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.box, styles.centerContent]}>
        <Text style={styles.text}>Basic Component in RN</Text>
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/OIP.LC3gVsslKofbx8_hAFbVsgHaFj?w=222&h=180&c=7&r=0&o=5&pid=1.7',
          }}
          style={styles.image}
        />
        <TextInput placeholder="Type here..." style={styles.input} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    marginBottom: 20,
    alignItems: 'center', // Align content horizontally in the center
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'purple',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 3,
    padding: 8,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomComponent;
