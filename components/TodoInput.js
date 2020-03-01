import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet} from 'react-native';

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState('');

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText);
      };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input}
                placeholder="What do you want to do?"
                onChangeText={todoInputHandler}
                value={enteredTodo}
            />
            <Button title="Add" onPress={props.onAddTodo.bind(this, enteredTodo)} />
      </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center'
      },
      input: {
        width: '80%',
        borderBottomColor: 'deepskyblue',
        borderBottomWidth: 1,
        padding: 10
      }
})

export default TodoInput;