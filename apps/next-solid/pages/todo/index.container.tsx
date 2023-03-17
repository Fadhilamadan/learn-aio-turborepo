import { FC, useState } from 'react';

import { IndexPage } from '@/pages/todo';
import { Todo } from '@/utils/api/todo';

interface IndexContainerProps {
  todos: Todo[];
}

export const IndexContainer: FC<IndexContainerProps> = (props) => {
  const [todos, setTodos] = useState<Todo[]>([...props.todos]);

  const onNewTodoSubmit = async (todo: Todo) => {
    try {
      setTodos([...todos, todo]);
    } catch (err) {
      console.error('Error creating new todo:', err);
    }
  };

  return <IndexPage todos={todos} onNewTodoSubmit={onNewTodoSubmit} />;
};
