import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';

const UserInterface = ({navigation}) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#CCCCC' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '50%', }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: 'https://w7.pngwing.com/pngs/274/412/png-transparent-uber-eats-icon-logo-tech-companies-thumbnail.png' }} />

                <TouchableOpacity  onPress={() => Linking.openURL("https://play.google.com/store/apps/details?id=com.ubercab.eats&pcampaignid=web_share")} >
                    <View style={{
                        padding: 15,
                        width: '80%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#228C22',
                        flexDirection: 'row',
                        borderRadius: 15,
                        marginTop: 30
                    }}>
                        <Text style={{ fontSize: 20 }}>Continue in App</Text>
                        <AntDesign name='arrowright' size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('home')} >
                    <View style={{
                        padding: 15,
                        width: '80%',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: '#CCCC',
                        flexDirection: 'row',
                        borderRadius: 15,
                        marginTop: 10
                    }}>
                        <Text style={{ fontSize: 20 }}>Continue in App</Text>
                        <AntDesign name='arrowright' size={23} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default UserInterface