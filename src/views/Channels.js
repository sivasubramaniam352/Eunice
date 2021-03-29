import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/core'

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { getWorkSpaceInfo } from '../services/ApiServices';

const Channels = () => {
    const nav = useNavigation();
    const route = useRoute();
    const {wsId} = route.params;
const [haCh, sethaCh] = useState([])
    const fetchWs = async() => {
        try {
            let res = await getWorkSpaceInfo(wsId);
            if (res.success) {
                sethaCh(res.workSpace.channels)
            }
            else{console.log(res.message)}
        } catch (e) {
            console.log(e.message);
        }
    }
    useEffect(() => {
        fetchWs()
    }, [])
    return (
        <View
        style={{
            flex:1,
            padding:10
        }}
        >
           {haCh && haCh.map((e,i) => {
               console.log(e, "E");
               return  <TouchableOpacity
               key={i}
                   style={{
                       padding:10,
                      backgroundColor:'white',
                       marginVertical:5,
                      height:50,
                      elevation:2,
                      borderRadius:10
                   }}
                   onPress={() =>{nav.navigate('Chats', {wsId:wsId, chId:e.channelId._id})}}
               >
                  
                   <View>

                       <Text>{e.channelId.name} </Text>
                       </View> 
                   
            
               </TouchableOpacity>
           })}
        </View>
    )
}

export default Channels

const styles = StyleSheet.create({})
