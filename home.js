import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, FlatList, ScrollView, Text, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';

// const { width } = Dimensions.get('window');


const images = [
  { id: 1, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/hfoZXZHm_24ee4cda7b4e46cbbfacf1f5b967bc38.jpg' },
  { id: 2, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_50,dpr_2,fl_progressive/assets/images/2024/NOVEMBER/14/2au3xErh_0f1a519470994cb7a2120cb6404e5ef6.jpg' },
  { id: 3, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/qOpINirr_2179aff64d36424693c82057807d417b.jpg' },
  { id: 4, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/U2txFiKy_36ec99da8d9b4a408550ae01316d1c70.jpg' },
  { id: 5, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/XwFs8aql_eaac617a9a434cb8912707bfe350b404.jpg' },
  { id: 6, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/5yVe88Z8_2f7a65c029ca4b7d9a05563bdad1cd4e.jpg' },
  { id: 7, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/NOVEMBER/14/QsRWn0RY_e303344bb4f1402db854fcd47533c203.jpg' },
  { id: 8, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/aXtYEyfS_707d7d1ce2b44ba297ed19dc72dc48f1.jpg' },
  { id: 9, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/E8hnbVHo_bc6b58ee5f134a3db6dfa13206d5b718.jpg' },
  { id: 10, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/fJdB4hRW_8ac41ba8d1de41738f822e3a3d6a9f0e.jpg' },
  { id: 11, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/HMMlYhP3_1faa2d80e2834c739ba09f931c86d434.jpg' },
  { id: 12, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/eEAZ63sl_ec96b24527854c22b416eb32f338b917.jpg' },
  { id: 13, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/NOVEMBER/14/7fSFwRhP_30a2f36cc9a04da88fd5456e498d4b0b.jpg' },
  { id: 14, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_51,c_limit,fl_progressive/w_51,h_67,q_60,,dpr_2,fl_progressive/assets/images/2024/AUGUST/29/qrqMraWR_43d81c3882994c728b383656616e3c5d.jpg' },


];

const Banners = [
  { id: 1, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/25/9gEMzl5Z_36f5e3e214184e48b8f17e4933c55575.png' },
  { id: 2, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/25/0BRMWpk4_76e9cb06bf384106983d5bd261cb81e2.png' },
  { id: 3, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/7/22/48b413bd-e534-4790-8b7e-595df655c4081721640429465-download--67-.png' },
  { id: 4, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/25/klulQcfe_60764a68783044d0bd996f52e2c560a0.png' },
  { id: 5, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/11/21/2899b0c1-a180-4f1d-bd01-837699e73e251732168318534-Anayna5.png' },
  { id: 6, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/21/azs9Rlq7_6a212fbb87164dc29e57143a1def6746.png' },
  { id: 7, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/11/13/775c1ea3-df91-4b1b-89eb-5f889fef88de1731505852839-Livon_HPW_700.png' },
  { id: 8, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/24/CWXO2zsP_bc751df74e3449ef9e785f8617335b57.gif' },
  { id: 9, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/NOVEMBER/21/IhSv0h4v_c9cc514b90354f6eaa618be82ca374bd.png' },
  { id: 10, uri: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_auto:eco,w_600,c_limit,fl_progressive/assets/images/2024/11/5/b1acbc9c-78a8-43f2-a0b8-49e2724ddf671730813510411-bajaj_ud_nov2.png' },

]

const App = ({ navigation }) => {
  //  countdown Timer
  const initialTime = 24 * 60 * 60 + 59 * 60; // 24 hours, 59 minutes, 0 seconds
  const [timeLeft, setTimeLeft] = useState(initialTime);


  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft((prevTime) => {
  //       if (prevTime <= 0) {
  //         clearInterval(interval);
  //         return 0; // Stops when time reaches zero
  //       }
  //       return prevTime - 1; // Decrement time by 1 second
  //     });
  //   }, 1000);

  //   // Clean up the interval on component unmount
  //   return () => clearInterval(interval);
  // }, []);


  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return { hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{ width: 90, height: 40, }}
            source={{ uri: 'https://ratnamsolutions.com/wp-content/uploads/2024/08/logo-1-200x120.png' }} />

          <View style={{ width: 130, height: 40, borderRadius: 10 }} />
        </View>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', }}>
          <TouchableOpacity>
            <Ionicons name='notifications-outline' size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name='hearto' size={25} style={{ marginHorizontal: 10 }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <EvilIcons name='user' size={35} style={{ marginBottom: 6, marginHorizontal: 6 }} />
          </TouchableOpacity>

        </View>
      </View>

      <ScrollView>
        {/* images container */}
        <View>
          <FlatList
            data={images} // The array of images
            keyExtractor={(item) => item.id} // Unique key for each item
            horizontal // Enables horizontal scrolling
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Image source={{ uri: item.uri }} style={styles.image} resizeMode="contain" />
              </TouchableOpacity>
            )}
          />
        </View>
        {/* Banners  */}
        <View style={styles.container}>
          <Swiper
            autoplay={true}
            loop
            removeClippedSubviews={true}
            showsPagination={true}
          >
            {Banners.map((item, index) => (
              <View key={index} style={styles.slide}>
                <TouchableOpacity>
                  <Image source={{ uri: item.uri }} style={styles.img} />
                </TouchableOpacity>
              </View>
            ))}
          </Swiper>
        </View>
        {/* Timmer to Deals offer_Close's */}
        {/* <View style={styles.timer}>
          <Text style={{ fontSize: 20, }}>Deals Ends In </Text>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{String(hours).padStart(2, '0')} h</Text>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>:</Text>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{String(minutes).padStart(2, '0')} m</Text>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>:</Text>
          <View style={styles.timeBox}>
            <Text style={styles.timeText}>{String(seconds).padStart(2, '0')} s</Text>
          </View>
        </View> */}

      </ScrollView>
    </SafeAreaView>

  )
};

export default App;

const styles = StyleSheet.create({

  image: { width: 90, height: 100, marginHorizontal: 5, borderWidth: 0.2, borderRadius: 10 },
  container: { flex: 1, height: 300, },
  slide: { flex: 1, justifyContent: 'center', backgroundColor: '#fff', },
  img: { height: 250, borderRadius: 10, marginHorizontal: 10 },
  timer: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 20, },
  timeBox: { margin: 5, borderRadius: 5, backgroundColor: '#FEE8D6' },
  timeText: { color: '#FF6E00', fontWeight: 'bold', fontSize: 18 }
})
