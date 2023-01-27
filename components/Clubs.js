import { useState } from 'react';
import {Button, ScrollView, Text, View} from 'react-native';

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
    <ScrollView>
      <Text>
        {getClubDetail(clubName, state)}, is{" "}
        {firstDivision
          ? "in the first division"
          : "not in the first division"}
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
      <Text>
        {getClubDetail(clubName, state)}, is{" "}
        {firstDivision
          ? "in the first division"
          : "not in the first division"}
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
      <Text>
        {getClubDetail(clubName, state)}, is{" "}
        {firstDivision
          ? "in the first division"
          : "not in the first division"}
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
      <Text>
        {getClubDetail(clubName, state)}, is{" "}
        {firstDivision
          ? "in the first division"
          : "not in the first division"}
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
    </ScrollView>
  );
};

export default Clubs;
