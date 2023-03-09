import { Todo } from './types';

export * from './types';

export const getTodos = async (): Promise<Todo[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos = await response.json();

  return todos.slice(0, 10);
};
