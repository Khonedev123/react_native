import { StyleSheet } from "react-native";
export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:50,
    marginHorizontal: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: "orange",
    padding: 25,
    marginTop: 15,
    borderWidth: 2,
    borderColor: "dashed",
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  input:{
    borderBlockColor:"#ddd",
    borderBottomWidth:1,
    paddingHorizontal:8,
    paddingVertical:6,
    marginBottom:15
  }
});
