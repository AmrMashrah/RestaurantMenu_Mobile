import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const OrderPlaced = ({route, navigation}) => {
  const orderNumber = route.params.createOrder.orderNumber;
  const onReturnPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for your order!</Text>
      <Text style={styles.text}>We will be with you shortly...</Text>
      <Text style={[styles.text, styles.orderText]}>Order #{orderNumber}</Text>
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => onReturnPressed()}>
        <Text style={[styles.text, styles.buttonText]}>Return Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderText: {
    paddingTop: '10%',
  },
  returnButton: {
    height: 45,
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B42B3F',
    borderRadius: 50,
    marginVertical: 25,
  },
  buttonText: {
    color: 'white',
  },
});
export default OrderPlaced;
