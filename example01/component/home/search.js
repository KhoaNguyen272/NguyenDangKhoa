import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState(""); // State to store the search text

  // Function to handle text input changes
  const handleSearch = (text) => {
    setSearchText(text);
    // You can perform any search-related logic here based on the input text
  };

  return (
    <TouchableOpacity style={styles.vo}  onPress={() => {
      navigation.navigate("HomePage1"); 
    }}>
      <View style={styles.container}>
        <SearchBar
          placeholder="Tìm kiếm..."
          containerStyle={{
            backgroundColor: "#E0EEE0",
            width: 500,
            borderBottomColor: "transparent",
            borderTopColor: "transparent",
          }}
          inputContainerStyle={{
            backgroundColor: "#C1CDC1",
            width: 382,
            height: 50,
            borderRadius: 15,
          }}
          onChangeText={handleSearch} // Specify the onChangeText prop to capture text input
          value={searchText} // Pass the state value as the value prop
        />
      </View>
      <View style={styles.ib}>
        <Image
          style={styles.ic}
          source={require("../../assets/sliders.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  vo: {
    backgroundColor: "#E0EEE0",
    flexDirection: "row",
  },
  container: {
    backgroundColor: "#E0EEE0",
    top: 50,
    width: 300,
  },
  ib: {
    width: 100,
    top: 50,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 1,
  },
  ic: {
    width: 35,
    height: 35,
  },
});

export default Search;
// import React, { useState } from 'react';
// import { View, TextInput, Button, FlatList, Text } from 'react-native';

// const Search = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     // Gửi yêu cầu tìm kiếm và nhận kết quả trả về
//     // Ví dụ: sử dụng API để gửi yêu cầu tìm kiếm
//     // và cập nhật danh sách kết quả tìm kiếm (searchResults)

//     // Ví dụ đơn giản: giả định danh sách kết quả tìm kiếm đã được cập nhật
//     setSearchResults([
//       { id: 1, name: 'Sản phẩm 1' },
//       { id: 2, name: 'Sản phẩm 2' },
//       { id: 3, name: 'Sản phẩm 3' },
//     ]);
//   };

//   return (
//     <View>
//       <TextInput
//         placeholder="Nhập từ khóa tìm kiếm"
//         value={searchTerm}
//         onChangeText={text => setSearchTerm(text)}
//       />
//       <Button title="Tìm kiếm" onPress={handleSearch} />

//       <FlatList
//         data={searchResults}
//         keyExtractor={item => item.id.toString()}
//         renderItem={({ item }) => <Text>{item.name}</Text>}
//       />
//     </View>
//   );
// };

// export default Search;