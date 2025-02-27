import { Button, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "../components/Task";

import { NavigationProp } from "@react-navigation/native";

export default function Dashboard({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <View style={styles.items}>
          <Task text="Task 01" />
          <Task text="Task 01" />
          <Task text="Task 01" />
          <Task text="Task 01" />
          <Task text="Task 01" />
          <Task text="Task 01" />
          <Task text="Task 01" />
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}

      <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  taskContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {
    fontSize: 30,
    color: "#55BCF6",
  },
});
