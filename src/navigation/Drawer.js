import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StyleSheet} from 'react-native';
import {CartIcon} from '../components/CartIcon';
import Home from '../screens/Home';
import Menu from '../screens/Menu';
import Orders from '../screens/Orders';

const Drawer = createDrawerNavigator();

function AppDrawer() {
  return (
    <Drawer.Navigator
      initalRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: '#B42B3F',
        drawerActiveBackgroundColor: '#F7E9EB',
      }}>
      <Drawer.Screen
        name="La Familial"
        component={Home}
        options={({navigation}) => ({
          drawerLabel: 'Home',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} type="DRAWER" />,
        })}
      />
      <Drawer.Screen
        name="Menu"
        component={Menu}
        options={({navigation}) => ({
          drawerLabel: 'Menu',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} type="DRAWER" />,
        })}
      />
      <Drawer.Screen
        name="Orders"
        component={Orders}
        options={({navigation}) => ({
          drawerLabel: 'Orders',
          headerTitleStyle: styles.headerTitle,
          headerRight: () => <CartIcon navigation={navigation} type="DRAWER" />,
        })}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default AppDrawer;
