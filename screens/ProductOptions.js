import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormButton from '../components/FormButton';

const ProductOptions = (props) => {
  const { navigation } = props;

  const handleCancel = () => {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text>Product Options</Text>
      
      <FormButton
        buttonType='outline'
        onPress={() => handleCancel()}
        title='Cancel'
        buttonColor='#d8737F'
      />

      <FormButton
        buttonType='outline'
        onPress={() => handleCancel()}
        title='Confirm'
        buttonColor='#8cc152'
      />
    </View>

  );
};

ProductOptions.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title')
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 3,
    marginVertical: 3,
  },
})

export default ProductOptions;