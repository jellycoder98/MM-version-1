import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ACCOUNTS } from "../Data/dummyDataMM.js/AccountData";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favourite";

import OfferFormModal from "../ModalComponent/OfferFormModal";
import RatingModal from "../ModalComponent/RatingModal";

// ProfileOverViewScreen
function ProfileOverViewScreen({ route, navigation }) {
  const profileId = route.params?.profileId;

  const selectedProfile = ACCOUNTS.find((profile) => profile.id === profileId);

  // Redux hooks for managing favorites
  const dispatch = useDispatch();
  const favouriteCompanionIds = useSelector(
    (state) => state.favouriteCompanion.ids
  );

  // Check if this companion is already a favorite
  const companionIsFavourite = favouriteCompanionIds.includes(profileId);

  // State to manage Offer modal visibility
  const [isOfferModalVisible, setOfferModalVisible] = useState(false);

  // State to manage Review and Rating modal visibility
  const [isRatingModalVisible, setRatingModalVisible] = useState(false);

  // Show the Offer Form Modal
  function offerButtonHandler() {
    setOfferModalVisible(true);
  }

  // Go to ChatBox 1v1 directly
  function offerMessageHandler() {}

  function navigateToRatings() {
    setRatingModalVisible(true);
  }

  // Toggle heart button state
  const toggleHeart = () => {
    if (companionIsFavourite) {
      dispatch(removeFavorite({ id: profileId }));
    } else {
      dispatch(addFavorite({ id: profileId }));
    }
  };

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: selectedProfile.imageUrl }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.heartButton} onPress={toggleHeart}>
          <Ionicons
            name={companionIsFavourite ? "heart" : "heart-outline"}
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Hi, I'm {selectedProfile.Name}</Text>
        <Text>User ID:</Text>

        <View style={styles.offerButtons}>
          <Pressable
            style={styles.customOfferButton}
            onPress={offerButtonHandler}
          >
            <Text style={styles.customOfferButtonText}>Offer</Text>
          </Pressable>
        </View>

        <View style={styles.offerButtons}>
          <Pressable
            style={styles.customOfferButton}
            onPress={offerMessageHandler}
          >
            <Text style={styles.customOfferButtonText}>Message</Text>
          </Pressable>
        </View>

        <Text>Height: {selectedProfile.Height}</Text>
        <Text>Gender: {selectedProfile.Gender}</Text>
        <Text>Age: {selectedProfile.Age}</Text>
        <Text>Location: {selectedProfile.Location}</Text>

        <Pressable onPress={navigateToRatings}>
          <Text>4.5 Rating (144 Reviews)</Text>
        </Pressable>

        <Text>
          About {selectedProfile.Name}: {selectedProfile.ProfileDescription}
        </Text>
        <Text>What I Would Like to Do: {selectedProfile.Interest}</Text>
        <Text>Languages: {selectedProfile.Languages}</Text>
        <Text>Adventures: {selectedProfile.Adventures}</Text>
      </View>

      <OfferFormModal
        visible={isOfferModalVisible}
        onClose={() => setOfferModalVisible(false)}
      />

      <RatingModal
        visible={isRatingModalVisible}
        onClose={() => setRatingModalVisible(false)}
      />
    </ScrollView>
  );
}

export default ProfileOverViewScreen;

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 300,
  },
  heartButton: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add background for better visibility
    borderRadius: 20,
    padding: 5,
  },
  offerButtons: {
    marginVertical: 10,
  },
  customOfferButton: {
    backgroundColor: "gold", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center", // Center text horizontally
  },
  customOfferButtonText: {
    color: "black", // Text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
