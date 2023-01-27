import { useState } from 'react';
import {Button, Text, View} from 'react-native';

const Clubs = ({ clubName, state }) => {
  // const clubName = 'Remo stars';
  // const state = 'Osun';
  // Function to get club detail
  const getClubDetail = (name, state) => {
    return name + ', based in ' + state + ' state';
  };
  // Store promotion state
  const [firstDivision, setFirstDivision] = useState(false);

  return (
    <View>
      <Text>
        {getClubDetail(clubName, state)}, is{" "}
        {firstDivision
          ? "in the first division"
          : "is not in the first division"}
      </Text>
      <Button
        disabled={firstDivision}
        onPress={() => {
          setFirstDivision(true);
        }}
        title={
          firstDivision
            ? "Currently in the first division"
            : "Not in the first division"
        }
      />
    </View>
  );
};

export default Clubs;
