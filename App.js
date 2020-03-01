import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import TodoItem from './components/TodoItem';
import TodoInput from './components/TodoInput';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodoHandler = todoTitle => {
    setTodoList(currentTodo => [...currentTodo, { key: Math.random().toString(), value: todoTitle}]);
    setIsAddMode(false);
  };

  const deleteTodoHandler = todoKey => {
    setTodoList(currentTodo => {
      return currentTodo.filter(todo => todo.key !== todoKey)
    })
  }

  const cancelAddTodoHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={styles.container}>
      <Button title="Add new Todo" onPress={() => setIsAddMode(true)} />
      <TodoInput onAddTodo={addTodoHandler} visible={isAddMode} onCancelAddTodo={cancelAddTodoHandler} />
      <FlatList 
        data={todoList} 
        renderItem={itemData => ( 
          <TodoItem 
              title={itemData.item.value} 
              id={itemData.item.key} 
              onDeleteTodo={deleteTodoHandler} />
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 70
  }
});
