import React, { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import AddTodoItemToList from '../AddTodoItemToList/AddTodoItemToList';
import s from './TodoContainer.scss';
import { Item } from '../../interfaces/item';

const TodoContainer: React.FC = () => {
  const [todoItems, setTodoItems] = useState<Item[]>([]);

  const addTodoItem = (newTodo: Item) => {
    setTodoItems([...todoItems, newTodo]);
  };
  console.log('container', todoItems);

  return (
    <div className={s.mainTodoContanier}>
      <AddTodoItemToList addTodoItem={addTodoItem} />
      <ul className={s.todoContainerList}>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            todoItems={todoItems}
            setTodoItems={setTodoItems}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
