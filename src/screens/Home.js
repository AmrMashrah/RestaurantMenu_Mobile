/* eslint-disable react-native/no-inline-styles */
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/core';

const Home = () => {
  const navigation = useNavigation();
  const onOrderPressed = () => {
    navigation.navigate('Menu');
  };

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ImageBackground
        style={{width: '100%', height: '100%', justifyContent: 'center'}}
        source={require('../images/background.jpg')}>
        <View>
          <Text style={styles.text}>La Familial</Text>
          <Text style={[styles.text, {fontSize: 24}]}>
            Taste like <Text style={styles.redText}>Home</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => onOrderPressed()}
            style={styles.button}>
            <Text style={styles.buttonText}>PLACE AN ORDER</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontFamily: 'sophia',
    fontSize: 50,
    marginBottom: 5,
    textAlign: 'center',
  },
  redText: {
    color: '#B42B3F',
  },
  button: {
    backgroundColor: '#B42B3F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: '25%',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'thebomb',
    fontWeight: 'bold',
  },
});

export default Home;
