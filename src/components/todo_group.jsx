import  ToDoCard  from './todo_card';
import { PropTypes } from 'prop-types';
import ToDoHeader from './TodoHeader'

export default function ToDoGroup({ group }) {

  return (
    <div>
      <ToDoHeader title = { String(group.categorie)} />
      {
         group.entries.map((entry, index) => {     
           return   <ToDoCard 
                  key = {index}
                  categorie={group.categorie}
                  title = {String(entry.name)} 
                  isFinished = {entry.isFinished} 
              />
          })
      }
    </div>
  );
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
