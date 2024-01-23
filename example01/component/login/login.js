import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Button, FlatList, StyleSheet, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Input } from "react-native-elements";

const Login = ()=>{
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Xử lý đăng nhập tại đây
    console.log('Username:', username);
    console.log('Password:', password);
  };
    return(
        <View>
            <View>
                <StatusBar backgroundColor={"#E0EEE0"} barStyle="dark-content"></StatusBar>
            </View>
            <SafeAreaView style={styles.container}>
                <Image
                source={require('../../assets/avt.jpg')}
                style={styles.avt}
                />
                <Text style={styles.tit}>Đăng nhập</Text>
                <Text style={styles.tit1}>Bạn cần phải đồng ý với</Text>
                <Text style={styles.tit2}><TouchableOpacity style={styles.tit2} onPress={()=>Alert.alert("Chưa có chính sách nào....")}><Text style={styles.txt}>Điều khoản và chính sách quyền riêng tư</Text></TouchableOpacity></Text>
                <Input
                    style={styles.input
                    }
                    placeholder="Tên đăng nhập"
                    onChangeText={text => setUsername(text)}
                    value={username}
                    leftIcon={{ type: 'font-awesome', name: 'user', color:'gray' }}
                />
                <Input
                    style={styles.input}
                    placeholder="Mật khẩu"
                    secureTextEntry
                    onChangeText={text => setPassword(text)}
                    value={password}
                    leftIcon={{ type: 'font-awesome', name: 'lock', color:'gray' }}
                />
                <TouchableOpacity style={styles.tit2} onPress={()=>Alert.alert("Gửi mã OTP hoặc email...")}><Text style={styles.txt1}>Quên mật khẩu?</Text></TouchableOpacity>
                <Button color={'#838B83'} title="Đăng nhập" onPress={() => {
                navigation.navigate("Home");
                }} />
                <View style={styles.lg}>

                    <TouchableOpacity style={styles.tit2} onPress={()=>Alert.alert("Chưa có tính năng....")}><Image
                    source={require('../../assets/gg.png')}
                    style={styles.ic}
                    /></TouchableOpacity>

                    <TouchableOpacity style={styles.tit2} onPress={()=>Alert.alert("Chưa có tính năng....")}><Image
                    source={require('../../assets/fb.png')}
                    style={styles.ic}
                    /></TouchableOpacity>

                    <TouchableOpacity style={styles.tit2} onPress={()=>Alert.alert("Chưa có tính năng....")}><Image
                    source={require('../../assets/sms.png')}
                    style={styles.ic}
                    /></TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: 200,
        paddingHorizontal: 10,
        paddingBottom: 300,
        backgroundColor: '#E0EEE0',
    },
    tit: {
        backgroundColor: '#E0EEE0',
        fontSize: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign:'center',
    },  
    tit1: {
        backgroundColor: '#E0EEE0',
        fontSize: 15,
        fontWeight: 'bold',
        justifyContent: 'center',
        textAlign:'center',
        padding: 10,
    },
    tit2: {
        backgroundColor: '#E0EEE0',
        fontSize: 15,
        justifyContent: 'center',
        color: '#3399FF',
        textAlign:'center',
    },
    input: {
        height: 50,
        borderColor: 'gray',
        paddingHorizontal: 10,
    },
    txt: {
        color:"#3399FF",
        paddingBottom: 20,
    },
    txt1: {
        color:"#3399FF",
        paddingBottom: 20,
        alignSelf:'flex-end'
    },
    avt:{
        width: 200,
        height: 200, 
        borderRadius:100,
        alignSelf: 'center'
     },
     ic:{
        width: 48,
        height: 48, 
     },
     lg:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        marginTop:10,
    },
  });
  
export default Login;
