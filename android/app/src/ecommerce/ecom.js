import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ImageBackground,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
} from "react-native";

const App = ({ navigation }) => {
    const [isEmailLogin, setIsEmailLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) return "Email is required";
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
    };

    const validatePassword = (value) => {
        if (!value) return "Password is required";
        if (value.length < 6) return "Password must be at least 6 characters long";
        return "";
    };

    const validatePhone = (value) => {
        const phoneRegex = /^[9876]\d{9}$/;
        if (!value) return "Phone number is required";
        if (!phoneRegex.test(value)) return "Invalid phone number. It must be 10 digits and start with 9, 8, 7, or 6.";
        return "";
    };
    

    const handleContinue = () => {
        let emailValidation = validateEmail(email);
        let passwordValidation = validatePassword(password);
        let phoneValidation = validatePhone(phone);

        if (isEmailLogin) {
            setEmailError(emailValidation);
            setPasswordError(passwordValidation);

            if (!emailValidation && !passwordValidation) {
                navigation.navigate("mainpage");
            }
        } else {
            setPhoneError(phoneValidation);

            if (!phoneValidation) {
                navigation.navigate("otppage");
            }
        }
    };

    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={{
                uri: "https://images.pexels.com/photos/1086585/pexels-photo-1086585.jpeg",
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View
                        style={{
                            marginHorizontal: 20,
                            marginVertical: "30%",
                            borderRadius: 15,
                            overflow: "hidden",
                        }}
                    >
                        <ImageBackground
                            style={{ overflow: "hidden" }}
                            source={{
                                uri: "https://images.pexels.com/photos/1086585/pexels-photo-1086585.jpeg",
                            }}
                        >
                            {/* Logo Section */}
                            <View
                                style={{
                                    backgroundColor: "gray",
                                    width: 80,
                                    height: 80,
                                    borderRadius: 40,
                                    marginVertical: "30%",
                                    alignSelf: "center",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Text>Logo</Text>
                            </View>

                            {/* Login Heading */}
                            <View style={{ marginHorizontal: 30 }}>
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                        color: "white",
                                    }}
                                >
                                    LOGIN
                                </Text>
                                <Text style={{ fontSize: 12, color: "white" }}>
                                    {isEmailLogin
                                        ? "Enter your email and password to proceed"
                                        : "Enter your phone number to proceed"}
                                </Text>
                            </View>

                            {/* Input Section */}
                            <View style={{ alignItems: "center", marginTop: 10 }}>
                                {isEmailLogin ? (
                                    <>
                                        <TextInput
                                            style={{
                                                width: "80%",
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: "#fffd",
                                                marginBottom: 10,
                                                paddingHorizontal: 10,
                                                fontSize: 12,
                                            }}
                                            placeholder="Enter your email"
                                            placeholderTextColor="#888"
                                            value={email}
                                            onChangeText={(value) => {
                                                setEmail(value);
                                                setEmailError(validateEmail(value));
                                            }}
                                        />
                                        {emailError ? (
                                            <Text
                                                style={{
                                                    color: "red",
                                                    fontSize: 12,
                                                    alignSelf: "flex-start",
                                                    marginLeft: "10%",
                                                    marginBottom: 5,
                                                }}
                                            >
                                                {emailError}
                                            </Text>
                                        ) : null}

                                        <TextInput
                                            style={{
                                                width: "80%",
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: "#fffd",
                                                marginBottom: 10,
                                                paddingHorizontal: 10,
                                                fontSize: 12,
                                            }}
                                            placeholder="Enter your password"
                                            placeholderTextColor="#888"
                                            secureTextEntry
                                            value={password}
                                            onChangeText={(value) => {
                                                setPassword(value);
                                                setPasswordError(validatePassword(value));
                                            }}
                                        />
                                        {passwordError ? (
                                            <Text
                                                style={{
                                                    color: "red",
                                                    fontSize: 12,
                                                    alignSelf: "flex-start",
                                                    marginLeft: "10%",
                                                    marginBottom: 5,
                                                }}
                                            >
                                                {passwordError}
                                            </Text>
                                        ) : null}
                                    </>
                                ) : (
                                    <>
                                        <TextInput
                                            style={{
                                                width: "80%",
                                                height: 40,
                                                borderRadius: 10,
                                                backgroundColor: "#fffd",
                                                marginBottom: 10,
                                                paddingHorizontal: 10,
                                                fontSize: 12,
                                            }}
                                            placeholder="Enter your phone number"
                                            placeholderTextColor="#888"
                                            keyboardType="numeric"
                                            maxLength={10}
                                            value={phone}
                                            onChangeText={(value) => {
                                                setPhone(value);
                                                setPhoneError(validatePhone(value));
                                            }}
                                        />
                                        {phoneError ? (
                                            <Text
                                                style={{
                                                    color: "red",
                                                    fontSize: 12,
                                                    alignSelf: "flex-start",
                                                    marginLeft: "10%",
                                                    marginBottom: 5,
                                                }}
                                            >
                                                {phoneError}
                                            </Text>
                                        ) : null}
                                    </>
                                )}

                                {/* Actions */}
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-evenly",
                                        alignItems: "center",
                                        marginTop: 10,
                                    }}
                                >
                                    {isEmailLogin && (
                                        <TouchableOpacity
                                            onPress={() =>
                                                navigation.navigate("forgetpass")
                                            }
                                        >
                                            <Text
                                                style={{
                                                    padding: 10,
                                                    color: "white",
                                                    fontSize: 16,
                                                    marginRight:20
                                                }}
                                            >
                                                Forgot Password?
                                            </Text>
                                        </TouchableOpacity>
                                    )}

                                    <TouchableOpacity onPress={() => setIsEmailLogin(!isEmailLogin)}>
                                        <Text style={{ color: "white", fontSize: 14 }}>
                                            {isEmailLogin ? "Login with Phone" : "Login with Email"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {/* Continue Button */}
                                <TouchableOpacity
                                    style={{
                                        width: "80%",
                                        height: 40,
                                        borderRadius: 10,
                                        backgroundColor: "#ff781f",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginVertical: 10,
                                    }}
                                    onPress={handleContinue}
                                >
                                    <Text style={{ fontSize: 18, color: "white" }}>CONTINUE</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{backgroundColor:'white',height:30}}>
                            <TouchableOpacity onPress={()=>navigation.navigate('newsignup')}>
                            <Text>new LOGin </Text>
                            </TouchableOpacity>
                            </View>

                        </ImageBackground>
                    </View>
                  
                </ScrollView>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default App;
