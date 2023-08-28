import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface CreateAccountScreenProps {
  onCreateAccount: (email: string, password: string) => void;
  navigation: any; // Navigation prop
}

function CreateAccountScreen({ onCreateAccount, navigation }: CreateAccountScreenProps): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleCreateAccount = () => {
    // Add validation and account creation logic here
    if (password === retypePassword) {
      onCreateAccount(email, password);
    } else {
      // Display an error message
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Retype Password"
        value={retypePassword}
        onChangeText={setRetypePassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create Account</Text>
      </TouchableOpacity>

      {/* "Go Back" button */}
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  createAccountButton: {
    backgroundColor: '#00A86B', // Light greenish color
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  createAccountButtonText: {
    color: 'white',
    fontSize: 16,
  },
  goBackButton: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goBackButtonText: {
    fontSize: 16,
    color: '#00A86B', // Light greenish color
    //textDecorationLine: 'underline',
  },
});

export default CreateAccountScreen;
