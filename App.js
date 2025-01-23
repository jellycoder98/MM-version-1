import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./store/redux/store";
import { enableScreens } from "react-native-screens";
enableScreens();
import "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

// BottomTab Screens
import LandingScreen from "./BottomTabScreen/ListingScreen";
import ChatOverviewScreen from "./BottomTabScreen/ChatOverviewScreen";
import FavouritesOverviewScreen from "./BottomTabScreen/FavouritesOverviewScreen";
import UserOverViewScreen from "./BottomTabScreen/UserOverViewScreen";
import AllBookingOverViewScreen from "./BottomTabScreen/AllBookingOverViewScreen";
// SubScreens Files
import ProfileOverViewScreen from "./Screens/ProfileOverViewScreen";
import ConfirmBookingScreen from "./Screens/ConfirmBookingScreen";
import OfferFormModal from "./ModalComponent/OfferFormModal";
// Define the stack
const Stack = createNativeStackNavigator();

// Define Bottom Tab Navigator
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  const navigation = useNavigation();
  return (
    <BottomTab.Navigator
      initialRouteName="List"
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        tabBarActiveTintColor: "#black",

        // >> top right button
        // headerRight: ({ tintColor }) => (
        //   <IconButton
        //     icon="add"
        //     size={24}
        //     color={tintColor}
        //     onPress={() => {
        //       navigation.navigate("OfferFormModal");
        //     }}
        //   />
        // ),
      }}
    >
      <BottomTab.Screen
        name="List"
        component={LandingScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesOverviewScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Booking"
        component={AllBookingOverViewScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatOverviewScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={UserOverViewScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="List">
            <Stack.Screen
              name="List"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileOverViewScreen"
              component={ProfileOverViewScreen}
            />
            <Stack.Screen
              name="ConfirmBookingScreen"
              component={ConfirmBookingScreen}
            />

            <Stack.Screen
              name="OfferFormModal"
              component={OfferFormModal}
              options={{
                presentation: "modal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
