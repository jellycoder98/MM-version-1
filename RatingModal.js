import { Text, View, Modal } from "react-native";

function RatingModal(props) {
  return <Modal visible={props.visible} animationType="slide"></Modal>;
}

export default RatingModal;
