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
import ui from './android/app/src/ecommerce/ui';
import ecom from './android/app/src/ecommerce/ecom';
import otppage from './android/app/src/ecommerce/otppage';
import mainpage from './android/app/src/ecommerce/mainpage';
import forgetpass from './android/app/src/ecommerce/forgetpass';
import myprofile from './android/app/src/ecommerce/myprofile';
import newsignip from './android/app/src/ecommerce/newsignup';



const Stack = createNativeStackNavigator();


const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ecom" screenOptions={{headerShown:false}}>
        <Stack.Screen name="ecom" component={ecom}/>
        <Stack.Screen name="ui" component={ui}/>
        <Stack.Screen name='home' component={home}/>
        <Stack.Screen name="loginpage" component={LoginPage}/>
        <Stack.Screen name="otppage" component={otppage}/>
        <Stack.Screen name="mainpage" component={mainpage}/>
        <Stack.Screen name="forgetpass" component={forgetpass}/>
        <Stack.Screen name="myprofile" component={myprofile}/>
        <Stack.Screen name="newsignup" component={newsignip}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App