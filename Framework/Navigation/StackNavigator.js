import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen/Index";
import { Intro } from "../Screens/Intro";
import { Login } from "../Screens/Login";
import { Profile } from "../Screens/Profile";
import { Signup } from "../Screens/Signup";

const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
