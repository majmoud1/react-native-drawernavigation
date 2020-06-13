import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import HomeScreen from './screens/HomeScreen';
import HospitalScreen from './screens/HospitalScreen';
import LikeScreen from './screens/LikeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

import { StyleSheet, Text, View, Button } from 'react-native';

const HomeStack = createStackNavigator();
const HospitalStack = createStackNavigator();
const RestaurantStack = createStackNavigator();
const LikeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HomeStack.Screen name="Home" component={HomeScreen}
        options={{
          headerLeft: () => (
            <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
          )
        }}/>
    </HomeStack.Navigator>
  )
}

const HospitalStackScreen = ({navigation}) => {
  return (
    <HospitalStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <HospitalStack.Screen name="Hospital" component={HospitalScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </HospitalStack.Navigator>
  )
}

const RestaurantStackScreen = ({navigation}) => {
  return (
    <RestaurantStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <RestaurantStack.Screen name="Restaurant" component={RestaurantScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </RestaurantStack.Navigator>
  )
}

const LikeStackScreen = ({navigation}) => {
  return (
    <LikeStack.Navigator screenOptions = {{
        headerStyle: {
          backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
      <LikeStack.Screen name="Like" component={LikeScreen}
      options={{
        headerLeft: () => (
          <MaterialCommunityIcons name="menu" color="#fff" size={26} onPress={() => navigation.openDrawer()} />
        )
      }}/>
    </LikeStack.Navigator>
  )
}



const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Hospital" component={HospitalStackScreen} />
        <Drawer.Screen name="Restaurant" component={RestaurantStackScreen} />
        <Drawer.Screen name="Like" component={LikeStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
