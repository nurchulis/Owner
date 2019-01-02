import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import List from './List.js'


class App extends React.Component {
  static navigationOptions = {
    title: 'Menu',
    headerStyle: {
      backgroundColor:'white',
    },
     headerTintColor: '#40E0D0',

  };
  render() {
    return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home</Text>
        <Button
          title="Daftar Staff"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'Daftar Staff',
            });
          }}
        />
      </View>
    );
  }  
}

class DaftarStaff extends React.Component {
   static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        flex:1,
        marginLeft:-30,
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  render() {
    return (
     <List />
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: App,
  },
  Details: {
    screen: DaftarStaff,
  },
}, 
   {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#40E0D0',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        flex:1,
      },
    },
  }
);

export default createAppContainer(AppNavigator);