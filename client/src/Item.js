

function Item({i}){

    function handleEdit(){

    }

    function handleDelete(){
        fetch(`/items/${i.id}`, 
        { method: 'DELETE' })
        .then(async response => {
            
            if (!response.ok) {
                
            const error = response.status;
            return Promise.reject(error);
        
            }
        }
    )}
    
    return (
        
        <card style={{ width: 100 }}>
            <img style={{ width: 100 }} src="" />

            <title>{i.description}</title>
            
            <p style={{ width: 100 }}>
                {i.name}
            </p>
          
            <br/>
            
            <p style={{ width: 100 }}>
                {i.description}
            </p>
            
            <button>Edit</button>
            <button onClick={handleDelete}>Delete</button>

            <br/><br/>
        
      </card>
        
    )
}

export default Item