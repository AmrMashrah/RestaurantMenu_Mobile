import React from 'react';
import {StyleSheet} from 'react-native';
import AppDrawer from './Drawer';
import Menu from '../screens/Menu';
import Cart from '../screens/Cart';
import {CartIcon} from '../components/CartIcon';
import Checkout from '../screens/Checkout';
import OrderPlaced from '../screens/OrderPlaced';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartProvider} from '../services/CartContext';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={AppDrawer} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({navigation}) => ({
              title: 'My Cart',
              headerTitleStyle: styles.headerTitle,
              headerShown: true,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={({navigation}) => ({
              title: 'Checkout',
              headerTitleStyle: styles.headerTitle,
              headerShown: true,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Confirmation"
            component={OrderPlaced}
            options={({navigation}) => ({
              title: 'Confirmation',
              headerTitleStyle: styles.headerTitle,
              headerShown: true,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default Navigation;
