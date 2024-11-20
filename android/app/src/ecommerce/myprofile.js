import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput, Alert, PermissionsAndroid, Platform } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const App = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [profilePhoto, setProfilePhoto] = useState(null);

    // Email validation regex
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email); // Returns true if valid, false otherwise
    };

    const handleContinue = () => {
        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email ID.');
            return;
        } else {
            setEmailError('');
            navigation.navigate('mainpage')
        }
    };

    // Request camera permission on Android
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission to take photos.',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        }
        return true; // Permissions are automatically granted on iOS
    };

    const handleImagePicker = () => {
        Alert.alert("Choose an option", "Select your profile photo", [
            {
                text: "Camera",
                onPress: async () => {
                    const hasPermission = await requestCameraPermission();
                    if (hasPermission) {
                        launchCamera({ mediaType: "photo", cameraType: "front" }, (response) => {
                            if (response.didCancel) {
                                console.log("User cancelled camera");
                            } else if (response.errorMessage) {
                                console.error("Camera error: ", response.errorMessage);
                            } else if (response.assets && response.assets[0].uri) {
                                setProfilePhoto(response.assets[0].uri);
                            }
                        });
                    } else {
                        console.log("Camera permission denied");
                    }
                },
            },
            {
                text: "Gallery",
                onPress: () => {
                    launchImageLibrary({ mediaType: "photo" }, (response) => {
                        if (response.didCancel) {
                            console.log("User cancelled gallery");
                        } else if (response.errorMessage) {
                            console.error("Gallery error: ", response.errorMessage);
                        } else if (response.assets && response.assets[0].uri) {
                            setProfilePhoto(response.assets[0].uri);
                        }
                    });
                },
            },
            { text: "Cancel", style: "cancel" },
        ]);
    };

    return (
        <SafeAreaView style={{ flex: 1, padding: 20, backgroundColor: "#F5F5F5" }}>
            <View style={{ paddingVertical: 20, paddingHorizontal: 20, borderRadius: 10, borderWidth: 1, borderColor: "#DDD", height: "100%" }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={25} />
                </TouchableOpacity>

                {/* Profile Photo Section */}
                <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                    <TouchableOpacity onPress={handleImagePicker}>
                        <View style={{ width: 100, height: 100, backgroundColor: "#CCCC", borderRadius: 50, justifyContent: "center", alignItems: "center", overflow: "hidden" }}>
                            {profilePhoto ? (
                                <Image source={{ uri: profilePhoto }} style={{ width: 100, height: 100 }} />
                            ) : (
                                <Text style={{ color: "#666", fontSize: 14 }}>User Image</Text>
                            )}
                        </View>
                    </TouchableOpacity>
                    <Text style={{ marginTop: 10, fontSize: 16, fontWeight: "bold" }}>Profile Photo</Text>
                </View>

                {/* Form Section */}
                <View style={{ padding: 20, borderWidth: 1, borderRadius: 10, borderColor: '#ffd', backgroundColor: '#f7fafc' }}>
                    {/* User Name Input */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontSize: 14 }}>User Name</Text>
                        <TextInput style={{ width: 180, height: 35, borderWidth: 1, borderRadius: 10, fontSize: 12, paddingHorizontal: 10 }} placeholder="Enter your Name" placeholderTextColor="#888" maxLength={16} />
                    </View>

                    {/* Email Input with Validation */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontSize: 14 }}>E_Mail</Text>
                        <TextInput
                            style={{ width: 180, height: 35, borderWidth: 1, borderRadius: 10, fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="abcd12@gmail.com"
                            placeholderTextColor="#888"
                            value={email}
                            onChangeText={setEmail}
                            maxLength={40}
                        />
                    </View>
                    {/* Email Error Message */}
                    {emailError ? <Text style={{ color: 'red', fontSize: 12 }}>{emailError}</Text> : null}

                    {/* Address Input */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontSize: 14 }}>Address</Text>
                        <TextInput style={{ width: 180, height: 35, borderWidth: 1, borderRadius: 10, fontSize: 12, paddingHorizontal: 10 }} placeholder="Enter your Address" placeholderTextColor="#888" maxLength={16} />
                    </View>

                    {/* Phone Number Input */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 5 }}>
                        <Text style={{ fontSize: 14 }}>Number</Text>
                        <TextInput
                            style={{ width: 180, height: 35, borderWidth: 1, borderRadius: 10, fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="9885289461"
                            keyboardType="numeric"
                            placeholderTextColor="#888"
                            maxLength={10}
                        />
                    </View>
                </View>

                {/* Buttons Section */}
                <View style={{ flexDirection: 'row', marginTop: 10, alignSelf: 'flex-end' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <View style={{ width: 80, height: 25, borderWidth: 1, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                            <Text>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleContinue}>
                        <View style={{ width: 80, backgroundColor: '#1E90FF', height: 25, borderWidth: 1, marginLeft: 5, borderRadius: 6, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ color: 'white' }}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default App;
