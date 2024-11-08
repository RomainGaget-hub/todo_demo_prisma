import React from 'react';
import { Button } from './ui/button';

const TodoForm = () => {
    return (
        <div>
            <form action="">
                <label htmlFor="content">Todo</label>
                <input type="text" name="content" id="content" />
                <Button className='ml-4' type='submit' variant="outline">Add</Button>

            </form>
        </div>
    );
}

export default TodoForm;
