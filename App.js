// import React from "react";
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import loginpage from './loginpage';  // Default import
// import test from "./test";

// // Create a Stack Navigator
// const Stack = createNativeStackNavigator();

// // HomeScreen component (this will be your initial screen)
// const HomeScreen = ({ navigation }) => {
//   return (
//     <View>
//       <Text>Home Screen</Text>
//       <Button 
//         title="Go to Login"
//         onPress={() => navigation.navigate('loginpage')}
//       />
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
//         {/* Define the home screen */}
//         <Stack.Screen name="home" component={HomeScreen} />

//         <Stack.Screen name="test" component={test} />
        
        
//         {/* Define the loginpage screen */}
//         <Stack.Screen name="loginpage" component={loginpage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//navigation screens
import home from './home';
import LoginPage from "./loginpage";
import ui from './ecommerce/ui';
import ecom from './ecommerce/ecom';
import otppage from './ecommerce/otppage';
import mainpage from './ecommerce/mainpage';
import forgetpass from './ecommerce/forgetpass';
import myprofile from './ecommerce/myprofile';
import newsignip from './ecommerce/newsignup';
import homescreen from './ecommerce/homescreen';
import Header from "./ecommerce/header";


const Stack = createNativeStackNavigator();


const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="header" component={Header}/>
        <Stack.Screen name="ecom" component={ecom}/>
        <Stack.Screen name="ui" component={ui}/>
        <Stack.Screen name='home' component={home}/>
        <Stack.Screen name="loginpage" component={LoginPage}/>
        <Stack.Screen name="otppage" component={otppage}/>
        <Stack.Screen name="mainpage" component={mainpage}/>
        <Stack.Screen name="forgetpass" component={forgetpass}/>
        <Stack.Screen name="myprofile" component={myprofile}/>
        <Stack.Screen name="newsignup" component={newsignip}/>
        <Stack.Screen name='homescreen' component={homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App