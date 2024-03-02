import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import MainNavigation from './routes/nav';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput style={styles.textbox} placeholder="Enter your username" />
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.textbox} placeholder="Enter your password" secureTextEntry={true} />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View> */}

      <MainNavigation/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  inputContainer: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  textbox: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 15,
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
