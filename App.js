import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodoHandler = todoTitle => {
    setTodoList(currentTodo => [...currentTodo, { key: Math.random().toString(), value: todoTitle}]);
  };

  return (
    <View style={styles.container}>
      <TodoInput onAddTodo={addTodoHandler} />
      <FlatList data={todoList} renderItem={itemData => ( 
       <TodoItem title={itemData.item.value}/>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  }
});
