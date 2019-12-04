import React, { Fragment } from 'react';
import { StyleSheet, Dimensions, View, Text, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements';

const ProductGroupList = ({ groups, openProducts }) => {

  return (
    <View style={styles.tiles}>

      {groups && groups.map((group, i) =>
        (<TouchableOpacity
          activeOpacity={0.7}
          style={styles.tile}
          key={i}
          onPress={() => openProducts(group)}
        >


          <Text style={styles.tileTitle}>{group.name}</Text>

        </TouchableOpacity>)
      )}




    </View>
  );
};

const styles = StyleSheet.create({
  tiles: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  tile: {
    width: '49%',
    height: Math.round(Dimensions.get('window').width / 4),
    marginTop: 5,
    backgroundColor: '#d8737f',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15

  },
  tileTitle: {
    color: '#f2f2f2',
    fontSize: 18

  }
})

export default ProductGroupList;