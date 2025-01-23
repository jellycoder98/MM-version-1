import React from "react";
import { Text, View, Modal, Button, StyleSheet } from "react-native";

function OfferFormModal(props) {
  return (
    <Modal
      visible={props.visible}
      animationType="slide"
      onRequestClose={props.onClose} // Handle back button on Android
    >
      <View style={styles.modalContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Title of the Event</Text>
          {/* Close Button */}
          <Button title="Close" onPress={props.onClose} />
        </View>

        <View style={styles.body}>
          <View>
            <Text>What companion offer</Text>
            <Text>Here will be a list of offer's button</Text>
          </View>
          <View>
            <Text>Other?</Text>
          </View>
          <View>
            <Text>Date and Time</Text>
          </View>
          <View>
            <Text>Offer</Text>
          </View>
          <View>
            <Text>Here should be a container, for terms and conditions</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default OfferFormModal;

const styles = StyleSheet.create({
  modalContent: {
    flex: 1, // Takes up the entire screen
    backgroundColor: "white", // Set a background color
    paddingTop: 50, // Padding to avoid the notch
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    padding: 20,
  },
});
