import React, { useState, useRef } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from 'react-native-vector-icons/AntDesign';

const App = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);  // Initial OTP array with empty values
    const inputRefs = useRef([]);  // To handle focus of each input field

    // Handle the change in each input field
    const handleChangeText = (text, index) => {
        // Only allow digits and limit the length to 1 character
        const validText = text.replace(/[^0-9]/g, '');  // Remove non-numeric characters

        // Update OTP array with the valid text entered
        const updatedOtp = [...otp];
        updatedOtp[index] = validText;
        setOtp(updatedOtp);  // Set the updated OTP array

        // Move focus to the next field if the text is entered (not empty) and the current field is not the last one
        if (validText && index < otp.length - 1) {
            inputRefs.current[index + 1].focus();  // Move focus to the next input field
        }
    };

    // Handle backspace key press to move the focus to the previous input field
    const handleKeyPress = (e, index) => {
        // When backspace is pressed and the current input field is empty, move focus to the previous input
        if (e.nativeEvent.key === "Backspace" && otp[index] === "") {
            if (index > 0) {
                inputRefs.current[index - 1].focus();  // Move focus to the previous input field
            }
        }
    };

    const isOtpComplete = otp.every(digit => digit !== '');  // Check if the OTP is complete

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* Header Section */}
            <View style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#CBBB' }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesign name='arrowleft' size={25} color={'black'} />
                    </TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>VERIFY DETAILS</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14, color: '#CCCCC' }}>OTP</Text>
                        <Text style={{ fontSize: 12, color: '#CCCCC' }}>sent to +91-9885280482</Text>
                    </View>
                </View>
                <View>
                    <View style={{ width: 70, height: 70, borderRadius: 35, backgroundColor: 'gray' }}></View>
                </View>
            </View>

            {/* OTP Input Fields */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 }}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#000',
                            textAlign: 'center',
                            fontSize: 18,
                            backgroundColor: '#fffd',
                        }}
                        maxLength={1}  // Limit input to 1 character
                        keyboardType="numeric"  // Only numeric input
                        value={digit}
                        onChangeText={(text) => handleChangeText(text, index)}  // Handle text change
                        onKeyPress={(e) => handleKeyPress(e, index)}  // Handle key press for backspace
                        ref={(ref) => inputRefs.current[index] = ref}  // Assign refs for each input field
                        textAlign="center"
                    />
                ))}
            </View>

            {/* Resend OTP Button */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <TouchableOpacity>
                    <Text style={{ fontSize: 12, color: '#ff781f' }}>Did Not Receive OTP? Resend</Text>
                </TouchableOpacity>
            </View>

            {/* Continue Button */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('mainpage')}
                    disabled={!isOtpComplete}  // Disable if OTP is not complete
                    style={{
                        width: '80%',
                        height: 40,
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: isOtpComplete ? '#ff781f' : '#d3d3d3',
                    }} >
                    <Text style={{ fontSize: 18, color: 'white' }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default App;
