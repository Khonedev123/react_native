import { View, FlatList, Text, Alert } from "react-native";
import { myStyle } from "./style/myStyle";
import Person from "./components/Person";
import { useState } from "react";
import AddForm from "./components/AddForm";
export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "khone", age: 30 },
    { id: 2, name: "jojo", age: 30 },
    { id: 3, name: "koko", age: 30 },
    { id: 4, name: "lolo", age: 30 },
  ]);

  const deleteData = (id) => {
    setData((prevData) => {
      return prevData.filter((item) => item.id != id);
    });
  };
  const insertData = (name, age) => {
    if (name) {
      setData((prevData) => {
        return [{ id: Math.random().toString(), name, age }, ...prevData];
      });
    } else {
      Alert.alert("ແຈ້ງເຕືອນ", "ກະລຸນາປ້ອນຊື່ປະຊາກອນ");
    }
  };
  return (
    <View style={myStyle.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Person item={item} deleteData={deleteData} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text
            style={{ alignSelf: "center", fontSize: 25, fontWeight: "bold" }}
          >
            ຂໍ້ມູນປະຊາກອນ
          </Text>
        }
        ListEmptyComponent={
          <Text style={{ alignSelf: "center", fontSize: 20 }}>ບໍ່ມີຂໍ້ມູນ</Text>
        }
      />
      <AddForm insertData={insertData} />
    </View>
  );
}
