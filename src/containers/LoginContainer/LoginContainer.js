import { useNavigation } from '@react-navigation/native'
import React,{useState, useContext} from 'react'
import { Dimensions, Pressable,ImagePickerIOS, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { diffClamp } from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons'
import Button from '../../components/Button/ButtonComp'
import Input from '../../components/Input/Input'
import { logIn } from '../../services/ApiServices'
import { GlobalContext } from '../../services/Global/GlobalContext'
import LoginContStyle from './LoginContStyle'
const scrHeight = Dimensions.get('screen').height;
const scrWidth = Dimensions.get('screen').width;
const LoginContainer = () => {
    const {State, StateDispatch} = useContext(GlobalContext)
    const {dark, color} = State;
    const nav = useNavigation();
    const [Form, setForm] = useState([{name:'email/phone',type:'Email/Phone',error:null,field:'emailOrphone' },
    {name:'password',type:'password', error:null,field:'password'}]);
    const [formData, setFormData] = useState({emailOrphone:'', password:''})
    const [Err, setErr] = useState({emailOrphone:'', password:''})
    const changeHandler = (name,e) =>{

        console.log({[name]:e});
        let formSt;
        formSt =[...Form];
        if (name === Form[1].field) {
            setErr({...Err,password:''})
        }
        if (name === Form[0].field) {
            setErr({...Err,emailOrphone:''})
        }
        setForm(formSt);
        return setFormData({...formData,[name]:e});
    }
    const submitHandler = async() =>{
        let errors = {...Err}
        console.log(formData);
        if ( formData.emailOrphone === undefined  || formData.emailOrphone === "" || formData.emailOrphone === null) {
            
            errors.emailOrphone = 'please enter Email or Phone';
        }
        if (formData.password === undefined || formData.password === '' || formData.password === null) {
            
         errors.password='please enter password'; 
        }
       setErr(errors);
       if (errors.emailOrphone === '' && errors.password === ''){
        try {
            let res = await logIn(formData);
            console.log(res);
                if (res.success) {
                    await AsyncStorage.setItem('token', res.token);
                    // AsyncStorage.setItem('user', JSON.stringify(res.user))
                   await StateDispatch({type:'LOGIN', user:res.user});
                  }
                  else{
                      console.log(res.message);
                      alert(res.message);
                  }
        } catch (e) {
            console.log(e.message);
            alert(e.message)
        }
    }
    }
    const FormMap = () =>{
        return Form.map((data, key) =>(
            <View key={key}>
            <Input 
            PH={data.name}
            type={data.type}
            error={Err[data.field]}
            password={data.name==='password'?true:false}
            changeFunc={(e)=>changeHandler(data.field,e)}
            dark={dark ? dark: false}
            />
            </View>
        ))
    }
    return (
        <View style={dark ? LoginContStyle.containerDark: LoginContStyle.container}>
           <Icon name={'food'} size={scrWidth/1.2} color={'red'} />

           <KeyboardAvoidingView style={LoginContStyle.FormCont}> 
           {FormMap()}
           <View  style={{flexDirection:'row' , justifyContent:'space-between'}}>
           <View  style={{flexDirection:'row' , justifyContent:'space-between'}}>
           {/* <Text>New to Crisp?</Text>
            <Pressable onPress={()=>nav.navigate('signUp')}>
                <Text style={{color:"red"}}> Sign up</Text>
            </Pressable> */}
            </View>
           <Button 
           title={'Sign In'}
           pressFunc={()=>submitHandler()}
           />
           </View>
           </KeyboardAvoidingView>
        
        </View>
    )
}

export default LoginContainer

const styles = StyleSheet.create({})
