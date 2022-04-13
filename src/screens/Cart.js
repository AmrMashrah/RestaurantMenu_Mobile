import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {CartContext} from '../services/CartContext';
export function Cart({navigation}) {
  const {items, getTotalPrice} = useContext(CartContext);

  function Totals() {
    let [total, setTotal] = useState(0);
    let tax = total * 0.06;
    let finalTotal = total + tax;

    useEffect(() => {
      setTotal(getTotalPrice());
    }, []);

    const onCheckoutPressed = () => {
      navigation.navigate('Checkout');
    };
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.cartLineTotal}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Subtotal</Text>
            <Text style={styles.lineRight}>$ {total.toFixed(2)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Tax (6%)</Text>
            <Text style={styles.lineRight}>$ {tax.toFixed(2)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
            <Text style={styles.lineRight}>$ {finalTotal.toFixed(2)}</Text>
          </View>
        </ScrollView>
        <View style={{height: 35}}>
          <TouchableOpacity
            onPress={() => {
              onCheckoutPressed();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  function renderItem({item}) {
    return (
      <View style={styles.cartLine}>
        <Text style={styles.lineLeft}>
          {item.product.name} x {item.qty}
        </Text>
        <Text style={styles.lineRight}>$ {item.totalPrice.toFixed(2)}</Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={item => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 2,
  },
  lineTotal: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  lineLeft: {
    fontSize: 16,
    lineHeight: 35,
    color: '#333333',
  },
  lineRight: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 35,
    color: '#333333',
    textAlign: 'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  button: {
    backgroundColor: '#B42B3F',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Cart;
