import React, { useState } from "react";
import { View, TextInput, SafeAreaView, TouchableOpacity, Text, ImageBackground } from 'react-native';
// import { Image } from "react-native-reanimated/lib/typescript/Animated";
import Icon from 'react-native-vector-icons/Ionicons';

const App = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Check if passwords are filled and match for enabling the Continue button
    const isContinueEnabled = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;

    return (
        <SafeAreaView >
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={{ uri: 'https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}>
                <View style={{ flex: 1, marginVertical: 60, marginHorizontal: 30, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: '80%', marginTop: 20, height: 40, borderRadius: 10, backgroundColor: '#fffd', marginBottom: 10 }}>
                        <TextInput
                            style={{ fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="Enter your email"
                            placeholderTextColor="#888"
                        />
                    </View>

                    {/* New Password Field */}
                    <View style={{ width: '80%', height: 40, borderRadius: 10, backgroundColor: '#fffd', marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="New password"
                            placeholderTextColor="#888"
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={setPassword}
                            maxLength={16} // Set character limit for password
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Icon name={showPassword ? 'eye-off' : 'eye'} size={20} color="#888" style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                    {/* Confirm Password Field */}
                    <View style={{ width: '80%', height: 40, borderRadius: 10, backgroundColor: '#fffd', marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="Confirm password"
                            placeholderTextColor="#888"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            maxLength={16} // Set character limit for confirm password
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Icon name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="#888" style={{ marginRight: 10 }} />
                        </TouchableOpacity>
                    </View>

                    {/* Error Message if Passwords Do Not Match */}
                    {password !== confirmPassword && confirmPassword.length > 0 ? (
                        <Text style={{ color: 'red', marginBottom: 10 }}>Password doesn't match</Text>
                    ) : null}

                    {/* Continue Button */}
                    <TouchableOpacity
                        onPress={() => navigation.navigate('mainpage')}
                        disabled={!isContinueEnabled}
                        style={{
                            width: '80%',
                            height: 40,
                            borderRadius: 10,
                            backgroundColor: isContinueEnabled ? '#ff781f' : '#d3d3d3', // Gray color when disabled
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 20
                        }}
                    >
                        <Text style={{ fontSize: 18, color: 'white' }}>CONTINUE</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

export default App;
