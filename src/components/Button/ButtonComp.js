import React from 'react'
import { Pressable,View, StyleSheet, Text,TouchableHighlight } from 'react-native';

import BtnStyle from './BtnStyle'

const ButtonComp = ({type, title,style, pressFunc}) => {
   
    return (
       
        <TouchableHighlight style={[BtnStyle.cont, type? 
            type === 'Veg'?{backgroundColor:'green'}:
            type === 'NonVeg'?{backgroundColor:'red'}:null:null, style && style]} 
        onPress={()=>pressFunc()}
        >
          
           <Text style={BtnStyle.txt} >
                {title}
           </Text>
        
        </TouchableHighlight>
      
    )
}

export default ButtonComp;


