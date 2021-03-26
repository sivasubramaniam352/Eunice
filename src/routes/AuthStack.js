import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login';
import OTPVerify from '../views/OTPVerify';




const AuthStack = () => {
    const Stack = createStackNavigator();
    
    return (
       <Stack.Navigator>
<Stack.Screen name={'login'} component={Login} />
<Stack.Screen name={'OTP'} component={OTPVerify} />
       </Stack.Navigator>
    )
}

export default AuthStack

const styles = StyleSheet.create({})
