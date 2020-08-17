import React from "react";
import { fromBottom } from "react-navigation-transitions";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Player from "../pages/Player";
import Details from "../pages/Details/indes";
const App = createStackNavigator();

const MainRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: true,
    }}
    initialRouteName="Home"
  >
    <App.Screen
      options={{
        headerShown: false,
      }}
      name="Home"
      component={Home}
    />
    <App.Screen
      options={{
        headerShown: false,
      }}
      name="Details"
      component={Details}
    />
  </App.Navigator>
);

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
      mode="modal"
    >
      <App.Screen
        options={{
          headerShown: false,
        }}
        name="Main"
        component={MainRoutes}
      />
      <App.Screen
        options={{
          gestureDirection: "vertical",
          gestureEnabled: true,
        }}
        name="Player"
        component={Player}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
