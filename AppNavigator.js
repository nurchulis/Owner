import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import Homeku from './Homeku';
import ListStaff from './ListStaff';



const AppNavigator = createStackNavigator({

  Homeku: { screen: Homeku },
  ListStaff: { screen: ListStaff},
},
  {
    defaultNavigationOptions: {
      title: 'Home',
       headerTintColor: 'white',
       fontSize:'25',
       fontWeight:'bold',
      headerStyle: {
        backgroundColor: '#40E0D0',
        color:'40E0D0',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        flex:1,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },

 
);

const App = createAppContainer(AppNavigator);

export default App;