import React, { useState } from 'react';
import { Item } from '../../interfaces/item';
import s from './TodoItem.scss';

interface IProps {
  item: Item;
  todoItems: Item[];
  setTodoItems: React.Dispatch<React.SetStateAction<Item[]>>;
}

const TodoItem: React.FC<IProps> = ({ item, todoItems, setTodoItems }) => {
  const [todoItem, setTodoItem] = useState(item);
  const onDoneTodoClick = () => {
    const updatedTodoItems = todoItems.filter((listItem) => {
      if (listItem.id !== todoItem.id) {
        setTodoItem({ ...todoItem, status: false });
      }
      return todoItem;
    });
    setTodoItems(updatedTodoItems);
    console.log('update', todoItems);
  };
  const redoDoneTodoClick = () => {
    setTodoItem({ ...todoItem, status: true });
  };
  const onDeleteTodoClick = () => {
    const todoItemsAfterfilter = todoItems.filter(
      (listItem) => listItem.id !== todoItem.id
    );
    setTodoItems(todoItemsAfterfilter);
    console.log('filter', todoItems);
  };

  return (
    <li className={todoItem.status ? s.listitem : s.doneListitem}>
      <p className={todoItem.status ? '' : s.doneFont}>{todoItem.content}</p>
      {todoItem.status ? (
        <button value={todoItem.content} onClick={onDoneTodoClick}>
          done
        </button>
      ) : (
        <div className={s.buttonsDiv}>
          <button onClick={redoDoneTodoClick}>Redo</button>
          <button onClick={onDeleteTodoClick}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
