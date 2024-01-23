//content
import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, Button, TouchableOpacity, Alert, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import search from './search';

const Product = ({ item, addToCart }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Productdetail', { item, addToCart });
  };

  return (
    <View style={styles.product}>
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title.length > 10 ? item.title.substring(0, 10) + '...' : item.title}</Text>
      <Text style={styles.price}>{item.price} USD</Text>
      <Button title="Thêm vào giỏ hàng" onPress={() => addToCart(item)} 
      color="#838B83"
      />
    </View>
  );
};

const Body = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [cart, setCart] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Lọc sản phẩm dựa trên từ khóa tìm kiếm
    const filterProducts = () => {
      if (searchKeyword === '') {
        setFilteredProducts(products);
      } else {
        const filtered = products.filter((product) =>
          product.title.toLowerCase().includes(searchKeyword.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    };

    filterProducts();
  }, [searchKeyword, products]);

  const handleSearch = (keyword) => {
    setSearchKeyword(keyword);
  };

  const addToCart = async (item) => {
    try {
      // Lấy dữ liệu giỏ hàng từ AsyncStorage
      const existingCart = await AsyncStorage.getItem('cart');
      const existingCartArray = existingCart ? JSON.parse(existingCart) : [];

      // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const existingItemIndex = existingCartArray.findIndex((cartItem) => cartItem.id === item.id);

      if (existingItemIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng của nó
        existingCartArray[existingItemIndex].quantity += 1;
      } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới vào giỏ hàng với quantity là 1
        existingCartArray.push({ ...item, quantity: 1 });
      }

      // Lưu giỏ hàng mới vào AsyncStorage
      await AsyncStorage.setItem('cart', JSON.stringify(existingCartArray));

      setCart(existingCartArray);
      Alert.alert('Thông báo', 'Đã thêm sản phẩm vào giỏ hàng!');
    } catch (error) {
      console.error('Lỗi khi thêm vào giỏ hàng:', error);
    }
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const renderProducts = currentProducts.map((item) => (
    <Product key={item.id} item={item} addToCart={addToCart} />
  ));

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Danh mục</Text>
      <ScrollView horizontal>
        <Image source={require('../../assets/product/v1.png')} style={styles.image2} />
        <Image source={require('../../assets/product/v2.png')} style={styles.image2} />
        <Image source={require('../../assets/product/a3.png')} style={styles.image2} />
        <Image source={require('../../assets/product/v3.png')} style={styles.image2} />
        <Image source={require('../../assets/product/v4.png')} style={styles.image2} />
        <Image source={require('../../assets/product/v5.png')} style={styles.image2} />
      </ScrollView>
      <Text style={styles.sectionTitle}>Danh sách sản phẩm</Text>
      <ScrollView horizontal>{renderProducts}</ScrollView>
      {/* Nút chuyển trang */}
      <View style={styles.pagination}>
        <Button
          title="Prev"
          onPress={() => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))}
          disabled={currentPage === 1} // Disable nút Prev khi ở trang đầu
          color="#838B83"
          />
        <Text>{currentPage}</Text>
        <Button
          title="Next"
          onPress={() => setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : prevPage))}
          disabled={currentPage === totalPages} // Disable nút Next khi ở trang cuối
          color="#838B83"
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 50,
    marginBottom: 70,
    backgroundColor: '#E0EEE0',
    justifyContent: 'space-around',
  },
  sectionTitle: {
    fontSize: 20,
    marginTop: 5,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    backgroundColor: "#F0FFF0",
    color: "green",
  },
  image: {
    width: 150,
    height: 190,
  },
  image2: {
    width: 90,
    height: 90,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#F0FFF0',
  },
  product: {
    alignItems: 'center',
    backgroundColor: '#F0FFF0',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: '#000080',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default Body;