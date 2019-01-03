import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text,TouchableOpacity, TextInput, Picker, ScrollView, KeyboardAvoidingView } from 'react-native';
import {Divider} from 'react-native-elements';
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

export default class Edit extends Component {
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

                 <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={100}>
        <View style={styles.stepIndicator}>
          <StepIndicator customStyles={firstIndicatorStyles}  currentPosition={this.state.currentPage} stepCount={3} labels={labels}  />
        </View>

        <ViewPager style={{flexGrow:1}} ref={(viewPager) => {this.viewPager = viewPager}} onPageSelected={(page) => {this.setState({currentPage:page.position})}}>
                  
                  {/*Halaman Data Instansi*/}
                 <View key="1" style={styles.containerPage}>

                
                
                    {/*Nama Instansi*/}
                       <ScrollView>
                    <View style={styles.PageInstansi}>
                        <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Nama Instansi</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="BRI Cabang Pusat"/>
                        </View>
                    <Divider style={{ backgroundColor: 'grey' }} />
                        <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kategori</Text>  
                          <Picker
                          selectedValue={this.state.language}
                          style={{height: 40,  width:160, position: 'absolute', right:0, marginTop:-10}}
                          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                          <Picker.Item label="Pelayanan Umum" value="java" />
                          <Picker.Item label="CHulis here" value="js" />
                          </Picker>
                        </View>
                    </View>
                    {/*Halaman Alamat*/}
                    
                      <View style={styles.PageInstansiBawah}>
                     
                    <Text>Alamat</Text>
                     <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Provinsi</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Jawa Barat"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kota</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Kota Bekasi"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kecamatan</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Bintara Jaya"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kode Pos</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="17136"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansiBawah}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Alamat Lengkap</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Jl.Raya Bintara"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey' }} />
                     



                    </View>

                      <View style={styles.PageInstansiMap}>
                     
                    <Text>Pilih Lokasi dengan GPS</Text>
                     <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Provinsi</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Jawa Barat"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kota</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Kota Bekasi"/>
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />



                    </View>
       

                      </ScrollView>

                          <TouchableOpacity style={styles.customBtnBG} onPress={() => this.handlePress(1)}>
                              <Text style={styles.customBtnText}>Lanjut</Text>
                          </TouchableOpacity>  
                  </View>
                
               
                                
                  {/*Halaman Hari dan Waktu Aktif*/}
                  <View key="2">
                    <Text>Halaman Kedua</Text>
                        <TouchableOpacity style={styles.customBtnBG} onPress={() => this.handlePress(2)}>
                              <Text style={styles.customBtnText}>Lanjut</Text>
                        </TouchableOpacity>
                  </View>
              
                  {/*Halaman Logo*/}
                  <View key="3">
                    <Text>Halaman Ketiga</Text>
                        <TouchableOpacity  style={styles.customBtnBG}>
                          <Text style={styles.customBtnText}>Simpan</Text>
                        </TouchableOpacity>
                  </View>
        </ViewPager>
          </KeyboardAvoidingView>
      </View>
    );
  }

  

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}

const styles = StyleSheet.create({
  container: {
     top:0,
    flex: 1,
    backgroundColor: '#ecf0f1',

  },
    form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerPage:{
    padding:5,
      justifyContent: 'center',
  },
  indikator:{
  },
  stepIndicator: {
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#ffffff', 
    top:0,
  },
  //Page Data Instansi
  PageInstansi:{
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    width:'100%',
  },
  PageInstansiBawah:{
    marginTop:7,
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    width:'100%',
  },
  PageInstansiMap:{
    marginTop:7,
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    paddingBottom:60,
    width:'100%',
  },
  NamaInstansiBawah:{
    flexDirection: 'row',
    margin:10,
    paddingBottom:10,
  },
  NamaInstansi: {
    flexDirection: 'row',
    margin:10,
  },
  //Page Data Instansi

  //PageHaridanWaktu//
  PageHaridanWaktu:{
    backgroundColor:'#ffffff',
    padding:5,
    flexDirection: 'row',
    width:'100%',
  },
  //End PageHaridanWaktu
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
    customBtnBG: {
    backgroundColor: "#40E0D0",
    paddingHorizontal: 30,
    position: 'absolute',
    flex:1,
    alignSelf:'center',
    width:'100%',
    paddingVertical: 5,
    borderRadius: 30,
    bottom:10,

    },
        customBtnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",
        textAlign:'center'
    },

});