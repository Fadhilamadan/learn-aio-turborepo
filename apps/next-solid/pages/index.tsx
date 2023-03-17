import { FC } from 'react';
import { GetStaticProps } from 'next';

import { IndexContainer } from '@/pages/todo/index.container';
import { getTodos, Todo } from '@/utils/api/todo';

interface IndexPageProps {
  todos: Todo[];
}

const IndexPage: FC<IndexPageProps> = ({ todos }) => {
  return <IndexContainer todos={todos} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const todos = await getTodos();

  return {
    props: { todos },
  };
};

export default IndexPage;
