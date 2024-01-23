// Productdetail
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Footer from '../home/footer';

const Productdetail = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();
  

  return (
    <View style={styles.container}>
      <View style={styles.vo}>
          <View style={styles.ib}>
              <Text style={styles.tc}>Chi tiết sản phẩm</Text>
          </View>
      <TouchableOpacity
              style={styles.ib1}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
          <Image
            style={styles.ic}
            source={require("../../assets/image/back-button.png")}
          />
            </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price} USD</Text>
        <Button title="Thêm vào giỏ hàng" onPress={() => addToCart(item)} color="#838B83"/>
      </View>      
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: '#E0EEE0',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 0,
  },
  image: {
    width: 200,
    height: 250,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 20,
    color: '#007BFF',
    marginTop: 10,
  },
  backButton: {
    position: 'absolute',
    top: 30,
    left: 10,
    padding: 10,
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007BFF',
  },
  ic: {
    width: 35,
    height: 35,
    top: 20,
    left: 5,
  },
  ib1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 140,
  },
  vo: {
    flexDirection: 'row',
    height: 90,
    alignItems: 'center',
    borderBottomWidth: 1,
    marginTop: -10,
    backgroundColor: "#E0EEE0",
    flexDirection: "row",
    justifyContent: 'space-around',

  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 5,
    width: 170,
  },
  tc:{
    top: 20,
    fontSize: 26,
    fontWeight: 'bold',
  },  

});

export default Productdetail;