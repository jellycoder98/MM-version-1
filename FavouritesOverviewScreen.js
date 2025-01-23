import { View, Text, FlatList, StyleSheet } from "react-native";
import { ACCOUNTS } from "../Data/dummyDataMM.js/AccountData";
import { useSelector } from "react-redux";

import AccountGridTile from "../Components/AccountGridTile";

function FavouritesOverviewScreen() {
  const favouriteCompanionIds = useSelector(
    (state) => state.favouriteCompanion.ids
  );

  const favouriteCompanion = ACCOUNTS.filter((profile) =>
    favouriteCompanionIds.includes(profile.id)
  );

  if (favouriteCompanion.length === 0) {
    return <Text>You have no favourite companion yet.</Text>;
  } else {
    return (
      <FlatList
        data={favouriteCompanion}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <AccountGridTile
            id={item.id}
            name={item.Name}
            age={item.Age}
            gender={item.Gender}
            profileImage={item.imageUrl}
          />
        )}
      />
    );
  }
}

export default FavouritesOverviewScreen;
