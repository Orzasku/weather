import {View, Text, Image,StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";

const api = {
    url:"https://api.openweathermap.org/data/2.5/weather?",
    key: "e4ff1eae0742d88bb66c010a46de40b7",
    icons: "http://openweathermap.org/img/wn/"
}

export default function Weather(props) {
    const [temp, setTemp] = useState(0)
    const [description, setDescription] = useState("")
    const [icon, setIcon] = useState("")



  useEffect(() => {
    const url = api.url +
    "lat=" + props.latitude +
    "&lon=" + props.longitude +
    "&units=metric" +
    "&appid=" + api.key
    console.log(url)
    
    fetch(url)
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            setTemp(json.main.temp)
            setDescription(json.weather[0].description)
            setIcon(api.icons + json.weather[0].icon + "@2x.png")
        })
        .catch((error) => {
            setDescription("Error retrieving weather information")
            console.log(error)
        })
  },[])

  return (
    <View>
      <Text style={styles.temp}>{temp}</Text>
      {icon &&
      <Image source={{uri:icon}} style= {{width: 100, height: 100}} /> 
      }
      <Text>{description}</Text>
    </View>
  ) 

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
    temp: {
        alignItems: 'center',
        justifyContent: 'center',
      fontWeight: "bold",
      fontSize: 36,
      color: "red"
    },
    texti: {
      fontSize: 16
    }
  });