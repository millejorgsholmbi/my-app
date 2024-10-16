import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { getApps, initializeApp } from "firebase/app";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import homescreen from "./components/homescreen";
import matchList from "./components/matchList";
import profile from "./components/profile";
import { Ionicons } from "@expo/vector-icons";
import MapScreen from "./components/mapScreen";
import SignUpScreen from "./components/signUpScreen";
import LoginScreen from "./components/loginScreen";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNs37IJZr4K3qXgn2uPqaW8xr1OcGs-gE",
  authDomain: "innt-gk1.firebaseapp.com",
  databaseURL:
    "https://innt-gk1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "innt-gk1",
  storageBucket: "innt-gk1.appspot.com",
  messagingSenderId: "675636238635",
  appId: "1:675636238635:web:6dc99fd2c1cb2f79534d6e",
};

// Initialiser Firebase
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

// Opret en Stack Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator(); // Opretter en Tab Navigator

// Definerer Tab Navigator til hovedfaner
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={homescreen}
        options={{
          tabBarIcon: () => <Ionicons name="home" size={20} />,
        }}
      />
      <Tab.Screen
        name="Matches"
        component={matchList}
        options={{
          tabBarIcon: () => <Ionicons name="list" size={20} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => <Ionicons name="map" size={20} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={profile}
        options={{
          tabBarIcon: () => <Ionicons name="person" size={20} />,
        }}
      />
    </Tab.Navigator>
  );
}

// Appens hovedfunktion
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Først viser vi login-skærmen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Log ind" }}
        />
        {/* Tilføj Opret Bruger skærmen */}
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "Opret Bruger" }}
        />
        {/* Indlejrer Tab Navigator efter login */}
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }} // Skjuler headeren når brugeren er i tabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
