import React, { useState } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,

} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // Ensure you install react-native-vector-icons
import Zocial from 'react-native-vector-icons/Zocial';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Icon from 'react-native-vector-icons/Ionicons';


const App = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Check if passwords are filled and match for enabling the Continue button
    const isContinueEnabled = password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;



    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [activeTab, setActiveTab] = useState("SignIn"); // Tracks active tab

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const isSignin = activeTab === 'signin';
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* <ScrollView> */}
            <View
                style={{
                    backgroundColor: "gray",
                    justifyContent: "center",
                    borderRadius: 10,
                    height: 130,
                    paddingHorizontal: 20,
                }}
            >
                <Text style={{ fontSize: 18, color: "white" }}>
                    {isSignin ? "Let's get you signed in!" : "Let's get you Register"}
                </Text>
            </View>
            <View style={{ marginTop: -20, }}>
                {/* Navigation Section */}
                <View
                    style={{
                        width: "90%",
                        flexDirection: "row",
                        alignItems: "center",
                        height: 50,
                        marginHorizontal: 20,
                        marginBottom: 20,
                        borderRadius: 30,
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: "50%",
                            borderRadius: 20,
                            overflow: "hidden",
                            height: 50,
                            backgroundColor:
                                activeTab === 'signin' ? '#FF6E00' : '#f5f5f5',
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                        onPress={() => setActiveTab('signin')}
                    >
                        <Text style={{ color: activeTab === 'signin' ? 'white' : 'black', fontSize: 18 }}>
                            signin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flelx: 1,
                        width: "50%",
                        borderRadius: 20,
                        overflow: "hidden",
                        height: 50,
                        backgroundColor: !isSignin ? "#FF6E00" : "#f5f5f5",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                        onPress={() => setActiveTab("Register")}
                    >
                        <Text style={{ color: !isSignin ? "white" : "black", fontSize: 18 }}>Register</Text>
                    </TouchableOpacity>
                </View>

                {/* Email Input */}
                {isSignin ? (<>
                    <View
                        style={{
                            width: "90%",
                            height: 40,
                            backgroundColor: "#CCCC",
                            marginBottom: 10,
                            borderRadius: 15,
                            marginVertical: 20,
                            marginHorizontal: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                        }}
                    >
                        <TextInput
                            style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                            placeholder="Email"
                            placeholderTextColor="#888"
                            maxLength={16}
                        />
                    </View>

                    {/* Password Input */}
                    <View
                        style={{
                            width: "90%",
                            height: 40,
                            backgroundColor: "#CCCC",
                            marginBottom: 10,
                            borderRadius: 15,
                            marginVertical: 10,
                            marginHorizontal: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                        }}
                    >
                        <TextInput
                            style={{ flex: 1, fontSize: 14 }}
                            placeholder="Password"
                            placeholderTextColor="#888"
                            maxLength={16}
                            secureTextEntry={!isPasswordVisible}
                            value={password}
                            onChangeText={setPassword}
                        />
                        <TouchableOpacity onPress={togglePasswordVisibility}>
                            <Icon
                                name={isPasswordVisible ? "visibility" : "visibility-off"}
                                size={20}
                                color="#888"
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'flex-end', marginRight: 25,marginBottom:30 }}>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 14, color: '#FF6E00' }}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                </>
                ) : (<>
                    <View>
                        <View
                            style={{
                                width: "90%",
                                height: 40,
                                backgroundColor: "#CCCC",
                                marginBottom: 10,
                                borderRadius: 15,
                                marginVertical: 20,
                                marginHorizontal: 20,
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <TextInput
                                style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                                placeholder="Full Name"
                                placeholderTextColor="#888"
                                maxLength={16}
                            />
                        </View>
                        <View
                            style={{
                                width: "90%",
                                height: 40,
                                backgroundColor: "#CCCC",
                                marginBottom: 10,
                                borderRadius: 15,
                                marginVertical: 8,
                                marginHorizontal: 20,
                                flexDirection: "row",
                                alignItems: "center",
                                paddingHorizontal: 10,
                            }}
                        >
                            <TextInput
                                style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                                placeholder="Email Address"
                                placeholderTextColor="#888"
                                maxLength={16}
                            />
                        </View>
                        {/* New Password Field */}
                        <View style={{
                            width: "90%",
                            height: 40,
                            backgroundColor: "#CCCC",
                            marginBottom: 10,
                            borderRadius: 15,
                            marginVertical: 8,
                            marginHorizontal: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                        }}>
                            <TextInput
                                style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                                placeholder="New password"
                                placeholderTextColor="#888"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                                maxLength={16} // Set character limit for password
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Icon
                                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                                    size={20}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Confirm Password Field */}
                        <View style={{
                            width: "90%",
                            height: 40,
                            backgroundColor: "#CCCC",
                            marginBottom: 10,
                            borderRadius: 15,
                            marginVertical: 8,
                            marginHorizontal: 20,
                            flexDirection: "row",
                            alignItems: "center",
                            paddingHorizontal: 10,
                        }}>
                            <TextInput
                                style={{ flex: 1, fontSize: 12, paddingHorizontal: 10 }}
                                placeholder="Confirm password"
                                placeholderTextColor="#888"
                                secureTextEntry={!showConfirmPassword}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                                maxLength={16} // Set character limit for confirm password
                            />
                            <TouchableOpacity onPress={togglePasswordVisibility}>
                                <Icon
                                    name={isPasswordVisible ? "visibility" : "visibility-off"}
                                    size={20}
                                    color="#888"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Error Message if Passwords Do Not Match */}
                        {password !== confirmPassword && confirmPassword.length > 0 ? (
                            <Text style={{ color: 'red', marginBottom: 10, marginLeft: 25 }}>Password doesn't match</Text>
                        ) : null}

                    </View>
                </>)}
                <TouchableOpacity>
                    <View style={{
                        width: '90%', backgroundColor: 'black', height: 45, borderRadius: 10,
                        justifyContent: 'center', alignItems: 'center',
                        marginVertical: 20, marginHorizontal: 20
                    }}>
                        <Text style={{ color: 'white', fontSize: 16 }}>Login</Text>
                        {/* {isSignin ? "" : "Let's get you Register"} */}

                    </View>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginBottom: 10 }}>___________________</Text>
                    <Text> Or login with </Text>
                    <Text style={{ marginBottom: 10 }}>___________________</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-evenly', }}>

                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FEE8D6', height: 60 }}>
                        <TouchableOpacity>
                            <Zocial name='facebook' color={'#04548c'} size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FEE8D6', height: 60 }}>
                        <TouchableOpacity>
                            <AntDesign name='googleplus' color={'#E27A53'} size={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: '#FEE8D6', height: 60 }}>
                        <TouchableOpacity onPress={()=> navigation.navigate ('homescreen')}>
                            <AntDesign name='apple1' size={40} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', marginVertical: '50%', justifyContent: 'center', marginHorizontal: 20 }}>
                        <Text style={{ color: 'black', fontSize: 14 }}>Create a new account? </Text>
                        <TouchableOpacity >
                            <Text style={{ color: '#FF6E00', fontSize: 14, marginLeft: 10, fontFamily: 'bold' }}>Register Now</Text>
                        </TouchableOpacity>
                    </View> */}
                {/* ///register new account */}
                <View style={{ flexDirection: 'row', marginVertical: '35%',justifyContent: 'center', marginHorizontal: 20 }}>
                    <Text style={{ color: 'black', fontSize: 14 }}>
                        {isSignin ? "Don't have an account? " : "Already have an account? "}
                    </Text>
                        <Text style={{ color: '#FF6E00', fontSize: 14, marginLeft: 10, fontFamily: 'bold' }}>
                            {isSignin ? "Register Now" : "Login"}
                        </Text>
                </View>



            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
};

export default App;
