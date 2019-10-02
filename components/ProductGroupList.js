import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Tile } from 'react-native-elements';

const ProductGroupList = ({ groups, openProducts }) => {
  
  return (
    <View style={styles.tiles}>
      {groups.length > 0 && groups.map((group, i) =>
        <Tile
          key={i}
          overlayContainerStyle={styles.tile}
          contentContainerStyle={styles.tile}
          containerStyle={styles.tile}
          titleStyle={styles.tileTitle}
          featured
          title={group.name}
          onPress={() => openProducts(group)}
        />
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
    maxHeight: Math.round(Dimensions.get('window').width / 2),
    marginTop: 2,
    backgroundColor: '#d8737f'

  },
  tileTitle: {
    color: '#f2f2f2'

  }
})

export default ProductGroupList;