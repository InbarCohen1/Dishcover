
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useEffect } from 'react';

import {
  useFonts,
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic,
} from '@expo-google-fonts/playfair-display';

import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import SwipeRestaurants from './screens/SwipeRestaurants';

// style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
function HomeScreen() {
  return (
    <View  className="bg-white h-full w-full">
      <Text className='text-center mt-3 text-2xl font-light text-orange-300'>
        Home Screen
      </Text>
      {/* Buttons */}
      <View className=" w-full flex-1 items-center justify-center p-5">
        <SignInButton />
        <SignUpButton />

      </View>
    </View> 
  );
}

const Stack = createNativeStackNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular,
    PlayfairDisplay_500Medium,
    PlayfairDisplay_600SemiBold,
    PlayfairDisplay_700Bold,
    PlayfairDisplay_800ExtraBold,
    PlayfairDisplay_900Black,
    PlayfairDisplay_400Regular_Italic,
    PlayfairDisplay_500Medium_Italic,
    PlayfairDisplay_600SemiBold_Italic,
    PlayfairDisplay_700Bold_Italic,
    PlayfairDisplay_800ExtraBold_Italic,
    PlayfairDisplay_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <View></View>;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="SwipeRestaurants" component={SwipeRestaurants} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function SignInButton() {
  const navigation = useNavigation(); // useNavigation hook here
  return (
    <TouchableOpacity className="w-full p-3 rounded-2xl mb-3" onPress={() => navigation.navigate('SwipeRestaurants')} style={styles.button}>
      <Text>Sign In</Text>
    </TouchableOpacity>
  );
}

function SignUpButton() {
  const navigation = useNavigation(); // useNavigation hook here
  return (
    <TouchableOpacity className="w-full p-3 rounded-2xl mb-3" onPress={() => navigation.navigate('Signup')} style={styles.button}>
      <Text className="font-bold">Sign Up</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginVertical: 5, // Adjust the vertical spacing between the buttons
  },
});

export default App;
