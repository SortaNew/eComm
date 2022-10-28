

function Item({i}){

    // function handleEdit(){
    //     fetch(`http://localhost:3000/user_items/`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({
    //         title: 'foo',
    //     }),
    //     headers: {
    //         'Content-type': 'application/json',
    //     },
    //     })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));

    // }

    // function handleDelete(){
    //     fetch(`/items/${i.id}`, 
    //     { method: 'DELETE' })
    //     .then(async response => {
            
    //         if (!response.ok) {
                
    //         const error = response.status;
    //         return Promise.reject(error);
        
    //         }
    //     }
    // )}
    
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

            <br/><br/>
        
      </card>
        
    )
}

export default Item