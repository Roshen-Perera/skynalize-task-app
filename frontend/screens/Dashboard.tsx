import {
  Button,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "../components/Task";

import { NavigationProp } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { AppDispatch } from "../store/Store";
import { useDispatch, useSelector } from "react-redux";
import Tasks from "../model/Task";
import { addTask, getTask } from "../reducers/TaskSlice";
export default function Dashboard({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {

  const [id, setId] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();
  const tasks = useSelector((state: { task: Tasks[] }) => state.task);


useEffect(() => {
  if (Array.isArray(tasks) && tasks.length === 0) {
    dispatch(getTask());
  }
}, [dispatch, tasks]);

  return (
    <View style={styles.container}>
      <View style={styles.taskContainer}>
        <View style={styles.items}>
          {Array.isArray(tasks) &&
            tasks.map((task) => <Task key={task.id} text={task.task} />)}
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}

      <View style={styles.writeTaskWrapper}>
        <TouchableOpacity onPress={() => navigation.navigate("AddTask")}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView> */}
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
  writeTaskWrapper: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
