import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'


import { GlobalContext } from '../services/Global/GlobalContext'


import AsyncStorage from '@react-native-async-storage/async-storage'
import { getUser, } from '../services/ApiServices'
import StackNav from './StackNav'
import Login from '../views/Login'
import AuthStack from './AuthStack'


const Index = () => {
  // const [token, settoken] = useState(false);
  const [User, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const {State, StateDispatch} = useContext(GlobalContext)
  const checkUserAuth =async() =>{
    const token = await AsyncStorage.getItem('token');
    
   try {
   let res = await getUser(token);
     if (res.success) {
     await  StateDispatch({type:'LOGIN', user:res.user})

      await setLoading(false);
     }
     else{
        await setLoading(false);
        await AsyncStorage.clear();
        await StateDispatch({type:'LOG_OUT'});
       

     }
   } catch (e) {
     console.log(e.message);
     await setLoading(false);
     await AsyncStorage.clear();
     await StateDispatch({type:'LOG_OUT'});
   }
  }
  useEffect(() => {

   checkUserAuth()
  }, [])
  
   if (loading === true) {
   return <View style={{flex:1, justifyContent:'center', alignContent:'center', alignItems:'center'}}>
<Text style={{fontWeight:'bold'}}>Loading...</Text>
    </View>
   }
   else{
    return (<NavigationContainer>
      {  State.Auth === false? 
      <AuthStack />
    :<StackNav />
        }
        </NavigationContainer>
)

   }
}

export default Index

const styles = StyleSheet.create({})
