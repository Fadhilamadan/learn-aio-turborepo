import { FC } from 'react';

import { Todo } from '@/utils/api/todo';

interface TodosProps {
  todos: Todo[];
}

export const Todos: FC<TodosProps> = ({ todos }) => {
  return (
    <ul>
      {todos.map((item: Todo) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
