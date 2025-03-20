
import ToDoHeader from '../TodoHeader';
import ToDoCard from './todo_card';
import { PropTypes } from 'prop-types';


export default function ToDoGroup({group}){ 
return (
    <div>
        <ToDoHeader title= {group.categorie} />
        { Array.isArray&&
            group.entries.map((entry,index) => {                
             return   <ToDoCard 
                    key = {index}
                    title = {entry.name} 
                    isFinished = {entry.isFinished} 
                    
                />
            })
        }
</div>);

}
ToDoGroup.propTypes = {
        group: PropTypes.shape({
        categorie: PropTypes.string.isRequired,
        entries: PropTypes.arrayOf(
        PropTypes.shape({
        name: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired,
        })
      ).isRequired,
    }).isRequired,
  };