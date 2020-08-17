import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/routes/MyTabs";
import Home from "./src/pages/Home";
import AppRoutes from "./src/routes/app.routes";
import MiniPlayer from "./src/components/MiniPlayer";

const App: React.FC = () => {
  return (
    <>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </>
  );
};

export default App;
