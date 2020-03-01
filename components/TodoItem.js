import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity 
            activeOpacity={0.8} 
            onPress={props.onDeleteTodo.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: 'grey',
    borderColor: 'black',
    borderWidth: 1,
    marginVertical: 10
  }
})

export default TodoItem;