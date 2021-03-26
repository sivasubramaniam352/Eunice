import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const QrSacn = ({onBarcodeScan}) => {
    return (
        <View
        style={{flex:1}}
        >
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
            onReadCode={(event) =>
              onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        </View>
    )
}

export default QrSacn

const styles = StyleSheet.create({})
