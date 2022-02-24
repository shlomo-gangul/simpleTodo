import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import s from './TodoContainer.scss';
import { Item } from '../../interfaces/item';

const TodoContainer: React.FC = () => {
  const [todoItems, setTodoItems] = useState<Item[]>([]);

  const addTodoItem = (newTodo: Item) => {
    setTodoItems([...todoItems, newTodo]);
  };
  console.log('container', todoItems);

  const onDoneClick = (id: number) => {
    const updatedTodoItems = todoItems.filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.status = false;
      }
      return todoItem;
    });
    setTodoItems(updatedTodoItems);
    console.log('update', todoItems);
  };

  const onRedoDoneClick = (id: number) => {
    const redoTodoItems = todoItems.filter((todoItem) => {
      if (todoItem.id === id) {
        todoItem.status = true;
      }
      return todoItem;
    });
    setTodoItems(redoTodoItems);
    console.log('redo', todoItems);
  };

  const onDeleteClick = (id: number) => {
    const todoItemsAfterfilter = todoItems.filter(
      (todoItem) => todoItem.id !== id
    );
    setTodoItems(todoItemsAfterfilter);
    console.log('filter', todoItems);
  };

  return (
    <div className={s.mainTodoContanier}>
      <AddTodo addTodoItem={addTodoItem} />
      <TodoList
        todoItems={todoItems}
        onDone={onDoneClick}
        onRedo={onRedoDoneClick}
        onDelete={onDeleteClick}
      />
    </div>
  );
};

export default TodoContainer;
