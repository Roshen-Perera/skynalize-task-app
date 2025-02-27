import {Text, TextInput, View, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView, Platform} from "react-native";

export default function AddTask() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} placeholder={"Write a task"} />
        <View style={styles.button}>
          <Button title="Add Task" />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    button:{
        marginTop: 20,
        width: 100,
    },
    input: {
        padding: 15,
        paddingHorizontal: 25,
        backgroundColor: '#FFF',
        borderRadius: 10,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250,
    },
});