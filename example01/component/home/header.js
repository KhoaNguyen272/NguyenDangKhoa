import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Search from "./search";


function Header() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.vo}>
        <View style={styles.ib}>
          <Text style={styles.txt}>Xin chào quý khách</Text>
        </View>
        <TouchableOpacity
          style={styles.ib1}
          onPress={() => {
            navigation.navigate("Cart");
          }}
        >
          <Image
            style={styles.ic}
            source={require("../../assets/image/cart.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.ar}>
        <Text style={styles.txt1}>Tìm kiếm sản phẩm mà bạn muốn</Text>
      </View>
      <View>
        <Search/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  vo: {
    backgroundColor: "#E0EEE0",
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  container: {
    width: "100%",
    backgroundColor: '#E0EEE0',
  },
  ib: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    backgroundColor: '#E0EEE0',
  },
  ib1: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 150,
    backgroundColor: '#E0EEE0',
    flexWrap: 'wrap',
  },
  ic: {
    width: 35,
    height: 35,
    top: 40,
    left: 5,
    backgroundColor: '#E0EEE0',
  },
  txt: {
    flex: 1,
    color: "black",
    fontSize: 26,
    fontWeight: "500",
    top: 40,
    backgroundColor: '#E0EEE0',
  },
  txt1: {
    color: "black",
    fontSize: 24,
    backgroundColor: '#E0EEE0',
    justifyContent: 'center',
    top: -10,
  },
  ic1:{
    width: 35,
    height: 35,
    top: 40,
    left: 5,
    backgroundColor: '#E0EEE0',
  },
  ar: {
    fontSize: 20,
    width: 400,
    height: 50,
    top: 50,
    backgroundColor: '#E0EEE0',
    flexDirection: "row",
    justifyContent: 'space-around',
    marginBottom: 15,
  },
});

export default Header;
