import {useState} from "react"

function UserItem({i}){
    console.log(i)
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    function handleEdit(e){
        e.preventDefault()
        fetch(`/user_items/${i.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            "quantity": quantity,
            "price": price
        }),
        headers: {
            'Content-type': 'application/json',
        },
        })
        .then((response) => response.json())
        .then(async response => {
            
            if (!response.ok) {
                
            const error = response.status;
            return Promise.reject(error);
        
            }
        })

    }

    function handleDelete(){
        fetch(`/user_items/${i.id}`, 
        { method: 'DELETE' })
        .then(async response => {
            
            if (!response.ok) {
                
            const error = response.status;
            return Promise.reject(error);
        
            }
        })
    }
    
    return (
        
        <card style={{ width: 100 }}>
            <img style={{ width: 100 }} src={i.image} />

            <title>{i.description}</title>
            
            <p style={{ width: 100 }}>
                {i.name}
            </p>
          
            <br/>
            
            <p style={{ width: 100 }}>
                {i.description}
            </p>
            
            <form onSubmit={handleEdit}>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <button type="submit">Edit</button>
            </form>
            
            <button onClick={handleDelete}>Delete</button>

            <br/><br/>
        
      </card>
        
    )
}

export default UserItem