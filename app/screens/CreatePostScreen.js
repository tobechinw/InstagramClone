// import React, { useEffect, useState } from 'react';
// import { View } from 'react-native';

// import Screen from '../components/Screen';
// import AppText from '../components/AppText';

// import { StyleSheet } from 'react-native';

// import { Camera, CameraType } from 'expo-camera';

// function CreatePostScreen(props) {

// 	const [permission, setPermission] = useState(null)
// 	const [type, setType] = useState(CameraType.back);
	
// 	const getPermission = async () => {
// 		const { status } = await Camera.requestCameraPermissionsAsync()
// 		console.log(status)
// 		setPermission( status === 'granted')
// 		// console.log(cameraPermissi`on)
// 	}

// 	if(permission === null) {
// 		return <View />
// 	}

// 	if(permission === false) {
// 		return <AppText>No access to camera</AppText>
// 	}

// 	useEffect(() => {
// 		getPermission()
// 	}, [])

// 	return (
// 		<Screen style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// 			<Camera 
// 				style= {{ flex: 1 }}
// 				type={type}
// 			/>
// 		</Screen>
// 	);
// }

// export default CreatePostScreen;


import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../components/Screen';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  

  return (
    <Screen style={styles.container}>
      <Camera style={styles.camera} re type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
		  <TouchableWithoutFeedback>
            <MaterialCommunityIcons onPress={toggleCameraType} name='camera-flip-outline' size={30} color={colors.white} />
		  </TouchableWithoutFeedback>
        </View>
      </Camera>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
	marginLeft: 'auto',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

