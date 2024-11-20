

import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ }}>
      <View style={{ flexDirection: 'row', }}>
        {/* //logo image */}
        <View style={{backgroundColor:'black'}}>
          <Image style={{ height: 80, width: 90 }} source={{ uri: 'https://d130des25qkd8b.cloudfront.net/assets/images/logo.png' }} />
          <View>
            <View style={{ flexDirection: 'row', backgroundColor: '#3D2314' }}>
              <Ionicons name='grid-outline' size={23} color={'white'} />
              <Text style={{ marginLeft: 10, color: 'white' }}>Dashboard</Text>
            </View>

            <View style={{ flexDirection: 'row', backgroundColor: '#3D2314' }}>
              <Ionicons name='grid-outline' color={'white'} size={23} />
              <Text style={{ marginLeft: 10, color: 'white' }}>Report</Text>
            </View>
            <View style={{ flexDirection: 'row', backgroundColor: '#3D2314' }}>
              <FontAwesome6 name='shop' color={'white'} size={20} />
              <Text style={{ marginLeft: 10, color: 'white' }}>NSO</Text>
            </View>
          </View>
        </View>
        {/* 2nd off number part */}
        <View>
          <View style={{
            flexDirection: 'row',
            backgroundColor: '#5A3825', width: '95%',
            justifyContent: 'center', alignItems: 'center',
            height: 70
          }}>
            <Image style={{ height: 35, marginRight: 5, width: 200 }} source={{ uri: 'https://d130des25qkd8b.cloudfront.net/assets/images/phone.png' }} />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <View style={{ height: 45, width: 45, borderRadius: 21, borderWidth: 1, borderColor: 'white' }}>
                <View style={{
                  height: 38, width: 38, borderRadius: 18,
                  borderWidth: 1, backgroundColor: 'white',
                  marginTop: 3, marginHorizontal: 3
                }}  >
                  <FontAwesome name='user' style={{ color: '#CCCCCC', marginLeft: 7, marginTop: 6.5 }} size={30} />
                  {/* <Image style={{height:30,width:30}} source={{uri:'https://d130des25qkd8b.cloudfront.net/assets/images/dummy-avatar.jpg'}}/> */}
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{marginTop:10,marginLeft:10,borderWidth:1,height:'55%',width:'85%',borderRadius:10}}>
                <View style={{backgroundColor: '#5A3825'}}>
                  <Text style={{fontSize:16,color:'white'}}> NSO Dashboard</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                  <View style={{width:100,height:60,borderWidth:1,
                                backgroundColor:'#FFD300',borderRadius:5,
                                }}>

                  </View>
                  <View style={{width:100,height:60,borderWidth:1,
                                backgroundColor:'#FFD300',borderRadius:5,
                                }}>

                  </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-around',padding:10}}>
                  <View style={{width:100,height:60,borderWidth:1,
                                backgroundColor:'#FFD300',borderRadius:5,
                                }}>

                  </View>
                  <View style={{width:100,height:60,borderWidth:1,
                                backgroundColor:'#FFD300',borderRadius:5,
                                }}>

                  </View>
                </View>
          </View>
        </View>
        {/* NSO part */}
       
      </View>
      
      <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, alignSelf: 'flex-end', padding: 5, marginTop: '25%' }}>
          <View style={{ width: 200, backgroundColor: 'white', padding: 20, borderRadius: 10, }}>
            {/* Close Button */}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name='arrowleft' size={20} color={'black'} />
            </TouchableOpacity>
            <Text style={{ fontSize: 13, }}>Welcome Babu_bde Challa</Text>
            <Text style={{ fontSize: 13, }}>Change Password</Text>
            <Text style={{ fontSize: 13, }}>Logout</Text>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  )
}

export default App