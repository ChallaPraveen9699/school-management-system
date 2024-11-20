import React from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Entypo from 'react-native-vector-icons/Entypo';


const App = ({navigation}) => {
  return (
    // navigating to loginpage component and that component is BELGIAN WAFFLE project
    // <View>
    //   <Text>Hello bro</Text>
    //   <TouchableOpacity  onPress={() => navigation.navigate('loginpage')} >
    //       <Text>click this</Text>
    //   </TouchableOpacity>
    // </View>


    <SafeAreaView>
      <View style={{padding:10,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
          <Entypo name='menu' size={20}/>
          <Text style={{fontSize:18}}>Uber </Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Eats</Text>
        </View>
        <View style={{flexDirection:'row',}}>
          <Entypo name='menu' size={20}/>
          <Text style={{fontSize:18}}>Uber </Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Eats</Text>
        </View>
      

      </View>
    </SafeAreaView>

  )
};

export default App;
