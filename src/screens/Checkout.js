import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import CustomTextInput from '../components/CustomTextInput';
import {useForm} from 'react-hook-form';
import {CartContext} from '../services/CartContext';

const Checkout = ({navigation}) => {
  const {getTotalPrice} = useContext(CartContext);
  const [orderNumber, setOrderNumber] = useState();
  const {control, handleSubmit} = useForm();

  const onPlaceOrderPressed = data => {
    const name = data.name;
    const email = data.email;
    const number = data.number;
    const cardInfo = data.cardInfo;
    let subtotal = getTotalPrice();
    let tax = subtotal * 0.06;
    let total = subtotal + tax;
    subtotal = subtotal.toFixed(2);
    tax = tax.toFixed(2);
    total = total.toFixed(2);

    let requestBody = {
      query: `
            mutation {
                createOrder(orderInput: {name: "${name}", email: "${email}", phoneNumber: "${number}", cardInfo: ${cardInfo}, subtotal: ${subtotal}, tax: ${tax}, total: ${total}}){
                    _id
                    orderNumber
                  }
            }
        `,
    };

    fetch('http://10.0.2.2:8000/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('FAILED');
        }
        return res.json();
      })
      .then(resData => {
        navigation.navigate('Confirmation', resData.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View>
      <CustomTextInput
        name="email"
        label="Email"
        control={control}
        rules={{required: 'Email is required'}}
      />
      <CustomTextInput
        name="name"
        label="Name"
        control={control}
        rules={{required: 'Name is required'}}
      />
      <CustomTextInput
        name="number"
        label="Phone Number"
        control={control}
        rules={{required: 'Phone Number is required'}}
      />
      <CustomTextInput
        name="cardInfo"
        label="Credit Card Number"
        keyboardType="numeric"
        control={control}
        rules={{required: 'Credit Card is required'}}
      />
      <View style={{height: 45}}>
        <TouchableOpacity
          onPress={handleSubmit(onPlaceOrderPressed)}
          style={styles.button}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#B42B3F',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Checkout;
