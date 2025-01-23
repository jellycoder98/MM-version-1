import { View, FlatList } from "react-native";
import AccountGridTile from "../Components/AccountGridTile";
import { ACCOUNTS } from "../Data/dummyDataMM.js/AccountData";

function LandingScreen({ navigation }) {
  function renderAccountProfile(profileData) {
    const item = profileData.item;

    return (
      <AccountGridTile
        id={item.id}
        name={item.Name}
        age={item.Age}
        gender={item.Gender}
        profileDescription={item.ProfileDescription}
        preferToMeetUpLocation={item.PreferToMeetUpLocation}
        languages={item.Languages}
        adventures={item.Adventures}
        profileImage={item.imageUrl}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={ACCOUNTS}
        keyExtractor={(item) => item.id}
        renderItem={renderAccountProfile}
      />
    </View>
  );
}
export default LandingScreen;
