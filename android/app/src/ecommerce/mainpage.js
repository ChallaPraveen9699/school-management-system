import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';

const App = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header Section */}
      <View style={{ padding: 15, backgroundColor: '#CCCCCC', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Entypo name="menu" size={30} />
        </TouchableOpacity>
        <Image
          style={{ width: 90, height: 30, }}
          source={{ uri: 'https://banner2.cleanpng.com/20180620/jaj/kisspng-web-development-logo-webstore9-web-design-5b2af8a4557626.9215526115295428203501.jpg' }} />


        <AntDesign name="search1" size={25} />
        <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
          <AntDesign name="hearto" size={20} />
        </View>
        <AntDesign name="shoppingcart" size={30} />
      </View>

      {/* Modal */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{
          width: '75%', height: '90%', backgroundColor: 'white',
          justifyContent: 'flex-start', alignSelf: 'flex-star', padding: 20, borderRadius: 10
        }}>
          <TouchableOpacity onPress={()=> setModalVisible(false)}>
          <AntDesign name='arrowleft' size={25} style={{marginBottom:15}} color={'black'}/>
          </TouchableOpacity>
          {/* Profile Item */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <FontAwesome5 name='user-circle' size={25} color={'black'} />
            <TouchableOpacity onPress={()=>navigation.navigate ('myprofile')}>
              <Text style={{ marginLeft: 10, fontSize: 16 }}>My Profile</Text>
            </TouchableOpacity>
          </View>

          {/* Cart Item */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <AntDesign name="shoppingcart" size={25} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Cart</Text>
          </View>

          {/* Address Item */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,marginLeft:5 }}>
            <Foundation name="clipboard-notes" size={25} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Address</Text>
          </View>

          {/* Wish List Item */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15,marginLeft:5 }}>
            <AntDesign name="hearto" size={20} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>Wish List</Text>
          </View>

          {/* Orders Item */}
          <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 15 }}>
            <Feather name='package' size={25} />
            <Text style={{ marginLeft: 10, fontSize: 16 }}>My Orders</Text>
          </View>



          {/* Logout Button */}
          <TouchableOpacity
            style={{
              marginTop: 20,
              width: '60%',
              height: 40,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              backgroundColor: 'white'
            }}
            onPress={() => navigation.navigate('ecom')}
          >
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>

      </Modal>

      <View style={{marginVertical:20,marginHorizontal:30,alignItems:'center',width:50,height:20,borderWidth:1}}>
        <TouchableOpacity onPress={()=>navigation.navigate('newsignup')}>
          <Text>new LOGin </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
}

export default App