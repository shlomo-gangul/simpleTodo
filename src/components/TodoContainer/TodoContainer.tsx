import React, { useState, useEffect } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import s from './todo-container.scss';
import { Item } from '../../interfaces/item';
import { ADDED, COMPLETED, DELETED } from '../../consts';

const TodoContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (value: string) => {
    setItems([
      ...items,
      { content: value, status: ADDED, id: Math.random() * 50 },
    ]);
  };
  console.log('container', items);

  const modifyStatus = (
    items: Item[],
    id: Item['id'],
    status: Item['status']
  ) => items.filter((item) => (item.id === id ? (item.status = status) : item));

  const onAdd = (id: number) => setItems(modifyStatus(items, id, ADDED));

  const onComplete = (id: number) =>
    setItems(modifyStatus(items, id, COMPLETED));

  const onDelete = (id: number) => setItems(modifyStatus(items, id, DELETED));

  return (
    <div className={s.todoContanier}>
      <AddTodo addItem={addItem} />
      <TodoList
        items={items}
        onDone={onComplete}
        onRedo={onAdd}
        onDelete={onDelete}
      />
    </div>
  );
};

export default TodoContainer;
