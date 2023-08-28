import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LoginScreen from './LoginScreen';
import CreateAccountScreen from './CreateAccountScreen';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccountScreen}
            options={({ navigation }) => ({
              headerTitle: '',
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Text style={styles.headerBackText}>Go Back</Text>
                </TouchableOpacity>
              ),
            })}
          />
          {/* Add more screens here as needed */}
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerBackText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'black',
  },
});

export default App;
