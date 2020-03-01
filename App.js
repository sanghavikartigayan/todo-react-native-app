import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Button, Text } from 'react-native';
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
         <Text style={styles.title}>TODO</Text>
          <Button title="Add new Todo" onPress={() => setIsAddMode(true)} color="#f5568b"/>
          <TodoInput onAddTodo={addTodoHandler} visible={isAddMode} onCancelAddTodo={cancelAddTodoHandler} />
          <Text style={styles.subtitle}>Recent Todos</Text>
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
    padding: 70,
    backgroundColor: 'rgb(245, 130, 168)',
    height: '100%'
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
    color: 'white',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 20,
    color: 'white',
    marginTop: 20,
    paddingTop: 20,
    textDecorationLine: 'underline'
    }
});
