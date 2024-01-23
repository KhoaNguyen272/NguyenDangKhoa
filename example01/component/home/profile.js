import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Gửi yêu cầu để lưu thông tin người dùng, ví dụ: gửi yêu cầu đến API
    // hoặc lưu vào cơ sở dữ liệu.

    // Ví dụ đơn giản: in ra thông tin người dùng đã lưu
    console.log('Thông tin người dùng:', { name, address, email });
  };

  return (
    <View style={styles.container}>
        <Text style={styles.pf}>Thông tin</Text>
        <View>
            <Image
            source={require('../../assets/avt.jpg')}
            style={styles.avt}
            />
        </View>
        <View>
            <Text style={styles.txt}>Tên: Nguyễn Đăng Khoa</Text>
            <Text style={styles.txt}>Địa chỉ: Đồng Nai</Text>
            <Text style={styles.txt}>Email: khoaNguyen@gmail.com</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      paddingHorizontal: 10,
      paddingBottom: 50,
      backgroundColor: '#E0EEE0',
    },
    txt:{
        fontSize:30,
    },
    avt:{
       width: 200,
       height: 200, 
       borderRadius:100,
    },
    pf:{
        fontSize:50,
    },
  });

export default Profile;