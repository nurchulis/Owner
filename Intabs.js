import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text,TouchableOpacity } from 'react-native';
import { ViewPager } from 'rn-viewpager';

import StepIndicator from 'react-native-step-indicator';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const labels = ["Data Instansi","Hari dan waktu aktif","Logo"];
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor:'#40E0D0',
  separatorFinishedColor: '#40E0D0',
  separatorUnFinishedColor: '#ecf0f1',
  stepIndicatorFinishedColor: '#ecf0f1',
  stepIndicatorUnFinishedColor: '#ecf0f1',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 20,
  currentStepIndicatorLabelFontSize: 25,
  stepIndicatorLabelCurrentColor: '#40E0D0',
  stepIndicatorLabelFinishedColor: '#40E0D0',
  stepIndicatorLabelUnFinishedColor: 'white',
  labelColor: '#34495e',
  labelSize: 12,
  stepCount: 3,
  currentStepLabelColor: '#40E0D0'
}
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      currentPage:0,
      stepCount:3,
    }
  }
  componentWillReceiveProps(nextProps,nextState) {
    if(nextState.currentPage != this.state.currentPage) {
      if(this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }
  
 handlePress = (position) => {
    this.setState({currentPage: position});
    console.log("Delete Item");
    this.viewPager.setPage(position);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.stepIndicator}>
          <StepIndicator customStyles={firstIndicatorStyles}  currentPosition={this.state.currentPage} stepCount={3} labels={labels}  />
        </View>
       
        <ViewPager
          style={{flexGrow:1}}
          ref={(viewPager) => {this.viewPager = viewPager}}
          onPageSelected={(page) => {this.setState({currentPage:page.position})}}
          >
         <View key="1">

      <Text>Halaman Pertama</Text>
       <TouchableOpacity
                style={styles.customBtnBG}
             onPress={() => this.handlePress(1)}
                >
                  <Text>Next</Text>
                </TouchableOpacity>
        </View>
        <View key="2">
      <Text>Halaman Kedua</Text>
        <TouchableOpacity
                style={styles.customBtnBG}
             onPress={() => this.handlePress(2)}
                >
                  <Text>Next</Text>
                </TouchableOpacity>
        </View>
        <View key="3">
      <Text>Halaman Ketiga</Text>
        
        </View>
        

          </ViewPager>
      </View>
    );
  }

  

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  stepIndicator: {
    marginVertical:50,
  },
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});