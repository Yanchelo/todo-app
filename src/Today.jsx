import {todos} from './todo.json';
import ToDoHeader from './components/TodoHeader';

export default function TodayComponent({todos}){


  return  <ToDoHeader
        title={'Heute'}
        // height={200}
    />
}