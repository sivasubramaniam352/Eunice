import React from 'react'
import { StyleSheet,Modal,Dimensions, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import IonIcon from 'react-native-vector-icons/Ionicons'
const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height; 

const QrCodeGenComp = ({visibility,ModalExitFun,orderCode}) => {

    return (
      <Modal
      animationType="slide"
      transparent={true}
      visible={visibility}
      onRequestClose={() => ModalExitFun()}
    >
      <View style={styles.centeredView}>
       
        <View style={styles.modalView}>
        
          <QRCode
      value={orderCode?orderCode:"Just some string value"}
      
      logo={require('../../Assets/Icons/cupcake.png')}
      logoSize={40}
      logoBackgroundColor='transparent'
      size={scrW/2}
    />
<Text style={{fontWeight:'bold', color:'white', fontSize:20, textAlign:'center', marginTop:40}}>Please Scan This QR to Confirm the Delivery</Text>
        </View>
      </View>
    </Modal>


    
    )
}

export default QrCodeGenComp;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: "center",
    
    
  },
  modalView: {

      width:scrW,
      height:scrH,

   
    backgroundColor: "gray",
  
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
   justifyContent:'center',

  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})
