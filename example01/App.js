//app
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footer from './component/home/footer';
import Header from './component/home/header';
import Body from './component/home/body';
import Productdetail from './component/product/productDetail';
import Cart from './component/cart/cart';
import Search from './component/home/search';
import Profile from './component/home/profile';
import Login from './component/login/login';
const Stack = createStackNavigator();

export default function App() {
  const HomeScreen = () => (
    <View style={styles.container}>
      <Header />
      <Body />
      <Footer />
      <StatusBar style="auto" />
    </View>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Productdetail"
          component={Productdetail}
          options={{
            headerShown: false,
            headerTransparent: true,
            headerBackTitleVisible: false,
            headerLeft: null,
            headerTitleAlign: 'center',
            headerTitle: 'Productdetail',
          }}
        />
        <Stack.Screen
          name="Cart"  // Thêm màn hình cho trang giỏ hàng
          component={Cart}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FFFA',
    justifyContent: 'center',
  },

});