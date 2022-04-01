import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Calculator from "./component/calculator";
import ToDong from "./component/todo";
import * as React from "react";
import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Calculate } from "@expo/vector-icons";
import Example from "./component/todoex";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Calculator"
          component={Calculator}
          // icon={<Icon as={Calculate} />}
        />
        <Tab.Screen name="Todo" component={ToDong} />
        {/* <Tab.Screen name="Todo" component={Example} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
