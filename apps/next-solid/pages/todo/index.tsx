import { FC, FormEvent } from 'react';

import { Todos } from '@/components/todo';
import { Todo } from '@/utils/api/todo';

interface IndexPageProps {
  todos: Todo[];
  onNewTodoSubmit: (newTodo: Todo) => void;
}

export const IndexPage: FC<IndexPageProps> = ({ todos, onNewTodoSubmit }) => {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const dataObject = Object.fromEntries(formData.entries()) as any;

    onNewTodoSubmit({
      title: dataObject.title,
      completed: false,
      id: 99,
      userId: 1,
    });
  };

  return (
    <>
      <h1>Todos</h1>
      <Todos todos={todos} />
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">New todo:</label>
        <input type="text" id="title" name="title" />
        <button type="submit">Add</button>
      </form>
    </>
  );
};
