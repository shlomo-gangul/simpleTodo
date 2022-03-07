import React, { useState, useCallback } from 'react';
import TodoList from '../TodoList/TodoList';
import AddTodo from '../AddTodo/AddTodo';
import s from './todo-container.scss';
import { Item } from '../../interfaces/item';
import { ADDED, COMPLETED, DELETED } from '../../consts';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (list: Item[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const TodoContainer: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (content: string) =>
    setItems([...items, { content, status: ADDED, id: Math.random() * 50 }]);

  console.log('container', items);

  const modifyStatus = (
    items: Item[],
    id: Item['id'],
    status: Item['status']
  ) =>
    items.map((item) => {
      if (item.id === id) {
        item.status = status;
      }
      return item;
    });

  const onAdd = (id: number) => setItems(modifyStatus(items, id, ADDED));

  const onComplete = (id: number) =>
    setItems(modifyStatus(items, id, COMPLETED));

  const onDelete = (id: number) => setItems(modifyStatus(items, id, DELETED));

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const newOrder = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(newOrder);
    // the only one that is required
  };
  return (
    <div className={s.todoContanier}>
      <AddTodo addItem={addItem} />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable-1">
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TodoList
                items={items}
                onComplete={onComplete}
                onRedo={onAdd}
                onDelete={onDelete}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoContainer;
