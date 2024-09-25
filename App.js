import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { getApps, initializeApp } from "firebase/app";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import homescreen from "./components/homescreen";
import matchList from "./components/matchList";
import profile from "./components/profile";
import { Ionicons } from "@expo/vector-icons";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNs37IJZr4K3qXgn2uPqaW8xr1OcGs-gE",
  databaseURL:
    "https://innt-gk1-default-rtdb.europe-west1.firebasedatabase.app",
  authDomain: "innt-gk1.firebaseapp.com",
  projectId: "innt-gk1",
  storageBucket: "innt-gk1.appspot.com",
  messagingSenderId: "675636238635",
  appId: "1:675636238635:web:6dc99fd2c1cb2f79534d6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Firebase
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

//Opretter en navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer holder appens navigationstruktur
    //Hver skærm/fane defineres som en Tab.Screen
    <NavigationContainer>
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
          name="Profile"
          component={profile}
          options={{
            tabBarIcon: () => <Ionicons name="person" size={20} />,
          }}
        />
      </Tab.Navigator>
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
