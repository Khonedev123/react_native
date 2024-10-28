import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { myStyle } from "../style/myStyle";
import {MaterialIcons} from '@expo/vector-icons'
const Person = ({ item,deleteData }) => {
  return (
    <TouchableOpacity onPress={()=>deleteData(item.id)}>
      <View style={myStyle.content}>
        <Text style={myStyle.header}>
          ຊື່ : {item.name} , ອາຍຸ :{item.age}
        </Text>
        <MaterialIcons name="delete" size={30} color="#333"/>
      </View>
    </TouchableOpacity>
  );
};

export default Person;
