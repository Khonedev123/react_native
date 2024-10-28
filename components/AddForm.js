import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { myStyle } from "../style/myStyle";
import { useState } from "react";
const AddForm = ({insertData}) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(15);
  return (
    <View>
      <TextInput
        placeholder="ປ້ອນຊື່ປະຊາກອນ"
        keyboardType="default"
        style={myStyle.input}
        onChangeText={(value) => setName(value)}
      />
      <TextInput
        placeholder="ປ້ອນອາຍຸປະຊາກອນ"
        keyboardType="number-pad"
        style={myStyle.input}
        onChangeText={(value) => setAge(value)}
      />
      <Button title="ເພິ່ມຂໍ້ມູນ" onPress={() => insertData(name, age)} />
    </View>
  );
};

export default AddForm;
