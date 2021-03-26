import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
const scrWidth = Dimensions.get('window').width;
const scrHeight = Dimensions.get('window').height;
const LoginContStyle =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
       
    },
    containerDark:{
        flex:1,
        backgroundColor:'#151618',
        justifyContent:'center',
        alignItems:'center',
    },
    FormCont:{
        width:scrWidth/1.3,
    },
    
   
});

export default LoginContStyle


