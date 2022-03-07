import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { TodoList as ITodoList } from '../../interfaces/todoList';
import s from './todo-list.scss';
import { DELETED } from '../../consts';
import { Draggable } from 'react-beautiful-dnd';

const TodoList: ITodoList = ({ items, onComplete, onRedo, onDelete }) => {
  return (
    <ul className={s.list}>
      {items.map(
        (item, index) =>
          item.status !== DELETED && (
            <Draggable draggableId={item.id.toString()} index={index}>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <TodoItem
                    key={index}
                    item={item}
                    onComplete={onComplete}
                    onRedo={onRedo}
                    onDelete={onDelete}
                  />
                </div>
              )}
            </Draggable>
          )
      )}
    </ul>
  );
};

export default TodoList;
