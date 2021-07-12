import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Search } from "../screens/search/search";
import { Details } from "../screens/details/details";
import { Website } from "../screens/website/website";

const Stack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="details" component={Details} />
        <Stack.Screen name="website" component={Website} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
