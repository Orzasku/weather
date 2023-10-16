import { StyleSheet, Text, View } from 'react-native';''
import * as Location from "expo-location"
import Weather from "./weather";
import { useEffect, useState } from 'react';

export default function Position() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [message, setMessage] = useState("Retrieving location...")
    const [isloading, setIsLoading] = useState(true)
    
    useEffect(() => {

        (async() => {
          let {status} = await Location.requestForegroundPermissionsAsync()
          console.log(status)
          try {
            if (status !== "granted") {
              setMessage("Location not permitted.")
            }
            else {
              const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
              setLatitude(position.coords.latitude)
              setLongitude(position.coords.longitude)
              setMessage("Location retrieved")
              console.log(latitude)
              console.log(longitude)
            }
            } catch (error) {
              setMessage("Error retrieving location.")
              console.log(error)
            }
            setIsLoading(false)
          })()
        },[])

        return (
            <View style={styles.container}>
              <Text style={styles.coords}>{latitude.toFixed(3)},{longitude.toFixed(3)}</Text>
              <Text style={styles.texti}>{message}</Text>
              {isloading === false &&
              <Weather latitude={latitude} longitude={longitude}/>}
            </View>
          ); 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: "bold",
      fontSize: 16
    },
    coords: {
      fontWeight: "bold",
      fontSize: 36,
      color: "green"
    },
    texti: {
      fontSize: 16
    }
  });