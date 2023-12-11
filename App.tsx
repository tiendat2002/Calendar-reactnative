/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import HomeScreen from './src/HomeScreen';
import EmptyScreen from './src/EmptyScreen';
import ButtonFunction from './components/ButtonFunction';
import SearchScreen from './src/SearchScreen';
import DetailScreen from './src/DetailScreen';
import EditScreen from './src/EditScreen';
import AddScreen from './src/AddScreen';
import { Header } from 'react-native/Libraries/NewAppScreen';
// import { TouchableHighlight } from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root(): React.JSX.Element {
  return (
    <Drawer.Navigator initialRouteName="Home" >
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerTitle:'Tháng 1',
        headerTitleAlign:'left',
        headerRight: ButtonFunction}} />
      <Drawer.Screen name="Profile" component={EmptyScreen} />
      <Stack.Screen name="Settings" component={EmptyScreen} />
    </Drawer.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'left'}}>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{
            headerTitleAlign: 'left',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditScreen"
          component={EditScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddScreen"
          component={AddScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
