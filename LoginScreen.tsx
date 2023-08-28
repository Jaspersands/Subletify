import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    onLogin(email, password);
  };

  const handleCreateAccount = () => {
    navigation.navigate('CreateAccount'); // Navigate to the CreateAccount screen
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          {/* Display the logo using an Image component */}
          <Image source={require('./logo.png')} style={styles.logoImage} />

          {/* Display the app name next to the logo */}
          <Text style={styles.appName}>ubletify</Text>
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Password..."
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.createAccountBtn} onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'row', // Arrange logo and text horizontally
    alignItems: 'center', // Center items vertically
    marginBottom: 40,
  },
  logoImage: {
    width: 100, // Set the width as needed
    height: 100, // Set the height as needed
  },
  appName: {
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 16, // Adjust spacing as needed
    color: '#00A86B', // Light greenish color
  },
  inputView: {
    width: '80%',
    backgroundColor: '#E0E0E0', // Grey color
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black', // Black color for input text
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#00A86B', // Light greenish color
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white', // White color for login button text
  },
  createAccountBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10, // Adjust the spacing as needed
  },
  createAccountText: {
    color: '#00A86B', // Light greenish color
  },
});

export default LoginScreen;
