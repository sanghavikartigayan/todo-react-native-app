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
    backgroundColor: 'rgb(240, 239, 237)',
    borderColor: 'rgb(171, 167, 161)',
    borderWidth: 1,
    marginVertical: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  }
})

export default TodoItem;