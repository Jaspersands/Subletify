// App.tsx
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import LoginScreen from './LoginScreen';

function App(): JSX.Element {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email: string, password: string) => {
    // Perform login logic here, e.g., sending the credentials to a server for validation
    // Once login is successful, set isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
          {/* Your main app content here */}
        </ScrollView>
      ) : (
        <LoginScreen onLogin={handleLogin} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
