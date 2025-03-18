import todos from '../todo.json';
export default function ToDoGroup({group}){





    // für jedes Todod in todos frage ich die kategorien nach
    for( let todo in todos){
        // Habe ich die KAtegorie noch nicht aufgeschrieben schreibe ich sie dazu
        if(!categorieName.contains(todo['categorie'])){
            categorieName += (', '+ todo['categorie']) 
        }
    }
return <div>
    <ToDoHeader title= {group['categorie']} />
    {
        group['entries'].map((entry){
          return  <ToDoCard name = entry.name isFinished = entry.isFinished/>
        })
    }
</div>

}