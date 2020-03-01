import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TodoItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{props.title}</Text>
        </View>
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