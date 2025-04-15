import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook

export default function HomeScreen() {
  const navigation = useNavigation();  // Initialize the navigation hook

  const [amount, setAmount] = useState('');
  const [change, setChange] = useState(0);

  const total = 0; // sample total

  const calculateChange = () => {
    const received = parseFloat(amount);
    if (!isNaN(received)) {
      setChange(received - total);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Left Side */}
      <View style={styles.leftPanel}>
        <Text style={styles.cartTitle}>🛒 Cart</Text>
        <Text style={styles.text}>Total: ₱{total.toFixed(2)}</Text>

        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Proceed to Checkout</Text>
        </TouchableOpacity>

        <View style={styles.paymentSection}>
          <Text style={styles.sectionTitle}>💵 Payment Calculator</Text>

          <TextInput
            style={styles.input}
            placeholder="Enter amount"
            placeholderTextColor="#aaa"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />

          <TouchableOpacity style={styles.calcBtn} onPress={calculateChange}>
            <Text style={styles.calcBtnText}>Calculate Change</Text>
          </TouchableOpacity>

          <Text style={styles.text}>Change: ₱{change.toFixed(2)}</Text>
        </View>
      </View>

      {/* Right Side */}
      <View style={styles.rightPanel}>
        <Text style={styles.sectionTitle}>🧾 Categories</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {['All', 'Sandwiches', 'Soft Drinks', 'Coffee', 'Pizza'].map((item) => (
            <TouchableOpacity key={item} style={styles.categoryBtn}>
              <Text style={styles.categoryText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Modify the Add Product Button to navigate */}
        <TouchableOpacity 
          style={styles.addProductBtn} 
          onPress={() => navigation.navigate('ProductScreen')}  // Use navigation to go to ProductScreen
        >
          <Text style={styles.addProductText}>+ Add Product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', backgroundColor: '#3a3a3a' },

  // LEFT PANEL
  leftPanel: {
    width: '40%',
    padding: 20,
    backgroundColor: '#2c3e50',
    justifyContent: 'flex-start',
  },
  cartTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 5,
  },
  checkoutBtn: {
    backgroundColor: '#34495e',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  paymentSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    color: '#000',
    marginBottom: 10,
  },
  calcBtn: {
    backgroundColor: '#2980b9',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  calcBtnText: {
    color: '#fff',
    fontWeight: '600',
  },

  // RIGHT PANEL
  rightPanel: {
    width: '60%',
    padding: 20,
    backgroundColor: '#3a3a3a',
  },
  categoryScroll: {
    maxHeight: 50,
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  categoryBtn: {
    backgroundColor: '#16a085',
    paddingVertical: 10,
    paddingHorizontal: 18,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  categoryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  addProductBtn: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addProductText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
