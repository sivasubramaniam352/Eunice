import React from 'react'
import { Modal , Dimensions} from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { CameraKitCameraScreen } from 'react-native-camera-kit'
const scrW = Dimensions.get("window").width;
const scrH = Dimensions.get("window").height; 
const QRS = ({modalCloseFun,isVisible, qrcodeget}) => {
 
    return (
        <Modal 
        visible={isVisible}
        onRequestClose={()=>modalCloseFun()}
        style={{flex:1, justifyContent:'center'}}>
            <View style={{position:'absolute', backgroundColor:'red', width: 100,height:100, zIndex:10}}>
         
          <CameraKitCameraScreen
            
            showFrame={false}
            // Show/hide scan frame
            scanBarcode={true}
            // Can restrict for the QR Code only
            laserColor={'blue'}
            // Color can be of your choice
            frameColor={'yellow'}
            // If frame is visible then frame color
            colorForScannerFrame={'black'}
            // Scanner Frame color
            onReadCode={(event) =>{
              console.log(event.nativeEvent.codeStringValue)
              qrcodeget(event.nativeEvent.codeStringValue)
            }
            }
          />
    
    </View>
        </Modal>

    )
}

export default QRS

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        
        
      },
      modalView: {

        width:400,
        height:400,
       
        backgroundColor: "white",
        borderTopStartRadius: 20,
        borderTopEndRadius:20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
})
