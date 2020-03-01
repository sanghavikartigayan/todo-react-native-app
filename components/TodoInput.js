import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
      };

    const addTodoHandler = () => {
        props.onAddTodo(enteredTodo);
        setEnteredTodo('');
    }

    const cancelAddTodo = () => {
        props.onCancelAddTodo();
        setEnteredTodo('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="What do you want to do?"
                    onChangeText={todoInputHandler}
                    value={enteredTodo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title="Cancel" 
                            color="red" 
                            onPress={cancelAddTodo} />
                    </View>
                   <View style={styles.button}>
                        <Button 
                            title="Add" 
                            onPress={addTodoHandler} />
                   </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        width: '80%',
        borderColor: 'deepskyblue',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
      },
      buttonContainer: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '60%'
      },
      button: {
          width: '40%'
      }
})

export default TodoInput;