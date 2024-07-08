


const TaskList = ({tasks,select}) => {
 
    return (
        <>
           <h1 style={{color:'white'}}>TaskList</h1>
  
            <ul>
                {tasks.map((task,index) =>
                    <li className="listItem" key={index}>
                        <input key={-index} onChange={(e)=>{select(index,e)}} type="checkbox" value='X' /> 
                        {task['id']} | {task['desc']} 
                    </li>
                )}
            </ul>
            
        </>
    )
}

export default TaskList