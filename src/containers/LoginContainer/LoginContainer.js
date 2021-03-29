import { useNavigation } from '@react-navigation/native'
import React,{useState, useContext} from 'react'
import { Dimensions, Pressable,ImagePickerIOS, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { diffClamp } from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Button from '../../components/Button/ButtonComp'
import Input from '../../components/Input/Input'
import { logIn, otpSignIn, signIn } from '../../services/ApiServices'
import { GlobalContext } from '../../services/Global/GlobalContext'
import LoginContStyle from './LoginContStyle'
const scrHeight = Dimensions.get('screen').height;
const scrWidth = Dimensions.get('screen').width;
const LoginContainer = () => {
    const {State, StateDispatch} = useContext(GlobalContext)
    const {dark, color} = State;
    const nav = useNavigation();
    const [formData, setFormData] = useState({email:''})
    const [Err, setErr] = useState({email:''})
    const changeHandler = (name,e) =>{

        if (formData.email) {
            const emailPattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            let match = emailPattern.test(String(e).toLowerCase());
            if (!match) {
              setErr({ ...Err, email: "please enter valid email" });
            } else {
              setErr({ ...Err, email: "" });
            }
          }
          return setFormData({...formData,[name]:e});
        }
        
    
    const submitHandler = async() =>{
        if (Err.email) {
            return
        }
      try {
          let res = await otpSignIn(formData);
          if (res.success) {
            console.log(res.token);
            await AsyncStorage.setItem('pretoken', res.token);
            alert(res.message)
            nav.navigate('OTP');
            
          }
          else{
            console.log(res.error);
          }
      } catch (e) {
          console.log(e.message);
      }
    }
 
    return (
        <View style={dark ? LoginContStyle.containerDark: LoginContStyle.container}>
           <Icon name={'connect-without-contact'} size={scrWidth/1.2} color={'black'} />

           <KeyboardAvoidingView style={LoginContStyle.FormCont}> 
           <View>
            <Input 
            PH={'email'}
           
            error={Err['email']}
            
            changeFunc={(e)=>changeHandler('email',e)}
            dark={dark ? dark: false}
            />
            </View>
           <View  style={{flexDirection:'row' , justifyContent:'space-between'}}>
           <View  style={{flexDirection:'row' , justifyContent:'space-between'}}>
           {/* <Text>New to Crisp?</Text>
            <Pressable onPress={()=>nav.navigate('signUp')}>
                <Text style={{color:"red"}}> Sign up</Text>
            </Pressable> */}
            </View>
           <Button 
           title={'Send OTP'}
           pressFunc={()=>submitHandler()}
           />
           </View>
           </KeyboardAvoidingView>
        
        </View>
    )
}

export default LoginContainer

const styles = StyleSheet.create({})
