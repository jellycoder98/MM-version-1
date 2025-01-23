// >>> Listing Component <<<<
import { useNavigation } from "@react-navigation/native";

import { View, Text, Image, Pressable, StyleSheet } from "react-native";

function AccountGridTile({ id, name, age, gender, profileImage }) {
  const navigation = useNavigation();

  function selectProfileAccountHandler() {
    navigation.navigate("ProfileOverViewScreen", {
      profileId: id,
    });
  }

  return (
    <View style={styles.gridItem}>
      <Pressable onPress={selectProfileAccountHandler} style={styles.pressable}>
        <Image source={{ uri: profileImage }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text>{age} years old</Text>
          <Text>{gender}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
    elevation: 3, // Shadow for Android
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8, // Shadow for iOS
  },
  pressable: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 150,
  },
  infoContainer: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AccountGridTile;
