import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import List from './List.js'


class Homeku extends React.Component {

  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Daftar Staff</Text>
        <Button
          title="Daftar Staff"
          onPress={() => {
            this.props.navigation.navigate('ListStaff', {
              itemId: 86,
              otherParam: 'Daftar Staff',
            });
          }}
        />
      <Text>Daftar Layanan</Text>
        <Button
          title="Daftar Layanan"
          onPress={() => {
            this.props.navigation.navigate('ListStaff', {
              itemId: 86,
              otherParam: 'Daftar Layanan',
            });
          }}
        />
      </View>
    );
  }  
}



export default createAppContainer(Homeku);