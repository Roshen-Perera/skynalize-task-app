import {Button, StyleSheet, Text, TextInput, View} from "react-native";

export default function Dashboard() {
    return (
      <View style={styles.container}>
        <View style={styles.taskContainer}>
          <Text style={styles.heading}>Tasks to do</Text>
          <View style={styles.items}></View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskContainer:{
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
    items: {
        flex: 1,
    },
});