import React from "react";
import{View,Text, Image} from 'react-native';
// import { Image } from "react-native-reanimated/lib/typescript/Animated";
 
const Header =()=>{
    <View>
        <View>
            <Image
                style={{width:60,height:50}} 
                source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSct6gpDUGEUp809lqjcb9XhywsRAxP2zlZtA&usqp=CAU'}}/>
            <Text style={{height:100,width:100}}>Hello </Text>
        </View>


    </View>
}
export default Header