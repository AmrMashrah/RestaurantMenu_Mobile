import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CartContext} from '../../services/CartContext';
export function CartIcon({navigation, type}) {
  const {getItemsCount} = useContext(CartContext);
  return (
    <View style={[styles.container, styles[`icon_${type}`]]}>
      <Text
        style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        Cart ({getItemsCount()})
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 2,
    backgroundColor: '#B42B3F',
    width: 80,
    padding: 10,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon_DRAWER: {
    marginHorizontal: 15,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
