import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { ListItem, chevron, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout'


var swipeoutBtns =  [
      {
        component: (
          <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                 borderRadius:50,
              }}
          >
            <Image source={require('./assets/delete.png')} />
          
          </View>
        ),
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => {
          console.log("Delete Item");
        },
       backgroundColor:'#ecf0f1',
       autoClose:'true',

      },
    ];

class List extends Component {
   state = {
      names: [
         {
            id: 0,
            no:'1',
            avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
            name: 'Anna',
            subtitle: 'Costumer Service',
         },
         {
            id: 1,
            no:'2',
            avatar_url: 'https://randomuser.me/api/portraits/men/18.jpg',
            name: 'Rian',
            subtitle: 'Costumer Service',
         },
         {
            id: 2,
            no:'3',
            avatar_url: 'https://randomuser.me/api/portraits/men/11.jpg',
            name: 'Johan',
            subtitle: 'Costumer Service',
         },
         {
            id: 3,
            no:'4',
            avatar_url: 'https://randomuser.me/api/portraits/women/90.jpg',
            name: 'Rika',
            subtitle: 'Teller',
         },
         {
            id: 4,
            no:'5',
            avatar_url: 'https://randomuser.me/api/portraits/women/58.jpg',
            name: 'Amanda',
            subtitle: 'Teller',
         },
         {
            id: 5,
            no:'6',
            avatar_url: 'https://randomuser.me/api/portraits/men/1.jpg',
            name: 'Robi',
            subtitle: 'Satpam',
         },
         {
            id: 6,
            no:'7',
            avatar_url: 'https://randomuser.me/api/portraits/women/17.jpg',
            name: 'Veronica',
            subtitle: 'Teller',
         },
         {
            id: 7,
            no:'8',
            avatar_url: 'https://randomuser.me/api/portraits/women/2.jpg',
            name: 'Venia',
            subtitle: 'Teller',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
      <View style={styles.tengah}>
  
         <ScrollView>
            {
               this.state.names.map((item, index) => (
                  <Swipeout right={swipeoutBtns}>
      <ListItem
        containerStyle={styles.container} 
        key={item.id}
        leftElement={<Text style={styles.number}>{item.no}</Text>}
        leftAvatar={{ size:"medium", title: item.name[0], source: { uri: item.avatar_url } }}
        title={<Text style={styles.nama}>{item.name}</Text>}
        subtitle={
          <Text style={styles.jabatan}>{item.subtitle}</Text>
        }
        rightElement={<Text style={styles.cir}>.</Text>}
        bottomDivider={true}
        >
     <View style = {styles.lineStyle} />
     </ListItem>
      </Swipeout>
               ))
            }
         </ScrollView>
        
           <TouchableOpacity onPress={() => alert('FAB clicked')} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>

         </View> 


      )
   }
}
export default List
const styles = StyleSheet.create ({
   tengah: {
     
    backgroundColor:'white',
   },
   container: {
      paddingLeft: 20, 
      paddingRight:20,
      backgroundColor:'white',

   },
  
  heading: {
    height: 60,
    backgroundColor: 'white',
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
     elevation: 3,
  },
  number: {
   fontSize:15,
   color:'grey',
  },
  headingTest: {
    fontSize: 20,
    color: '#40E0D0',
    fontWeight: 'bold',
  },
   jabatan: {
      color: 'grey'
   },
   nama: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#40E0D0'
   },
   cir: {
     marginTop:-45, 
     fontSize:60,
     fontWeight: 'bold',
     color: '#12F25D',

   },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:5
   },
    fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#12F25D',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
   swipeoutView: {
    height: 50,
    backgroundColor:'red',
  }
})