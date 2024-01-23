import React from "react";
import {View,Text,Image,TextInput,Button,StyleSheet,TouchableOpacity,} from "react-native";
import { useNavigation } from "@react-navigation/native";

function Footer() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.cap}>
        <TouchableOpacity style={styles.menu}
               onPress={() => {
                navigation.navigate("Home");
              }}>      
          <Image
            style={styles.ic}
            source={require("../../assets/home.png")}
          ></Image>
          <Text style={styles.txt}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menu}
        onPress={() => {
          navigation.navigate("Search");
        }}>
          <Image
            style={styles.ic}
            source={require("../../assets/search.png")}
          ></Image>
          <Text style={styles.txt}>Search</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}
          >
          <Image
            style={styles.ic}
            source={require("../../assets/heart.png")}
          ></Image>
          <Text style={styles.txt}>Liked</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu}
        onPress={() => {
          navigation.navigate("Profile");
        }}>
          <Image
            style={styles.ic}
            source={require("../../assets/user.png")}
          ></Image>
          <Text style={styles.txt}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 800,
    backgroundColor: "#C1CDC1",
    width: "100%",
    height: 50,
    flex: 1,
    position: "absolute",
    justifyContent: "space-around",
    alignItems: "center", // Căn giữa theo chiều ngang
    
  },
  cap: {
    flexDirection: "row",
    height: 45,
    paddingTop: 5,
    marginTop: 10,
  },
  menu: {
    flex: 1,
    marginLeft: 30,
    width: 70,
  },
  ic: {
    width: 20,
    height: 20,
    tintColor: "green",
  },
  txt: {
    left: -3,
    fontSize: 12,
    color: "green",
  },
});

export default Footer;
