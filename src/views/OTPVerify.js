import React, { useContext, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ButtonComp from '../components/Button/ButtonComp'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { verifyOtp } from '../services/ApiServices'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GlobalContext } from '../services/Global/GlobalContext'

const OTPVerify = () => {
    const {State, StateDispatch} = useContext(GlobalContext)
    const otpInput = useRef(null);
    
    const clearText = () => {
 setOtp('')
    }

    const setText = () => {
        otpInput.current.setValue("");
    }

    const [Otp, setOtp] = useState('')
    const submitHandler = async()=>{
try {
    let token = await AsyncStorage.getItem('pretoken');
    let res = await verifyOtp(Otp, token);

    if (res.success) {
    await AsyncStorage.removeItem('pretoken');
    await AsyncStorage.setItem('token', res.token);
    await StateDispatch({type:'LOGIN', user:res.user})
    
    }
    else{
        console.log(res);
    }
} catch (e) {
    console.log(e.message);
}
    }
    return (
        <View
        style={{
            display:'flex',
            flex:1,
            alignItems:'center',
            justifyContent:'center',

        }}
        >
<Text
style={{
    fontWeight:'bold'
}}
>Enter the OTP</Text>

<OTPInputView
    style={{width: '80%', height: 200}}
    pinCount={6}
        code={Otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    onCodeChanged = {code => setOtp(code)}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
 
          <View
          style={{
              display:'flex',
              flexDirection:'row',
              width:'100%',
              justifyContent:'space-around',
              paddingTop:10
          }}
          >
          
          
          <ButtonComp 
           title="Clear" 
           pressFunc={() => clearText()}
           />
           
             <ButtonComp 
           title="Verify" pressFunc={() => submitHandler()}
           />
           </View>
        </View>
    )
}

export default OTPVerify

const styles = StyleSheet.create({
     borderStyleBase: {
    width: 30,
    height: 45,
    color:'grey'
  },
 
  borderStyleHighLighted: {
    borderColor: "#03DAC6",
    color:'grey'
  },
 
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color:'grey'
  },
 
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
    color:'grey'
  },
})
