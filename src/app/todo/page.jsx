import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import React from 'react';

const Page = () => {
    return (
        <div className='flex min-h-screen bg-green-50 items-center justify-center align-middle flex-col gap-2'>
            <h1 className=''>My Todos</h1>
            <TodoForm />
            <TodoList />
        </div>
    );
}

export default Page;
