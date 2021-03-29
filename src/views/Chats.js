import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity,Text, View } from 'react-native'
import { getAllchats } from '../services/ApiServices';
import { GlobalContext } from '../services/Global/GlobalContext';
import { WebView } from 'react-native-webview';
const Chats = () => {
    const nav = useNavigation();
    const route = useRoute();
    const {wsId, chId} = route.params;
    const {State, StateDispatch} = useContext(GlobalContext)
    const [Chats, setChats] = useState([])
    const getAllCons = async() => {
        try {
            let res = await getAllchats(wsId, chId, State.user._id);
            if (res.success) {
                setChats(res.chats);
            }
            else{
                console.log(res.error);
            }
        } catch (e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
    
            const loop = setInterval(() => {
              getAllCons();
            }, 2000);
            return () => {
              
                clearInterval(loop);
              };
    }, [wsId, chId])
    return (
        <View
        style={{
            padding:10,

        }}
        >
          {Chats.length > 0 && Chats.map((e,i) => {
              return <TouchableOpacity
               key={i}
                   style={{
                       padding:10,
                      backgroundColor:'white',
                       marginVertical:5,
                      height:100,
                      elevation:2,
                      borderRadius:10
                   }}
                   onPress={() =>{}}
               >
                  <View>
                      <Text>{e.by.username}</Text>
                  </View>
               <View
               style={{
                   fontSize:14,
                   flex:1
               }}
               >
                   <WebView
    originWhitelist={['*']}
    source={{ html: 
    
    `<!DOCTYPE html>
    <html lang="en">
      <head>
      <style>
    body{
        font-size : 40px;
        color: grey;
    }
    </style>
      </head>
      <body>
    ${e.message}
    </body>
    
    `
    
    }}
/>

</View>                

                   
            
               </TouchableOpacity>
          })}
        </View>
    )
}

export default Chats

const styles = StyleSheet.create({})
