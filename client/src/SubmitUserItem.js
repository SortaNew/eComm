import {useState} from "react"

function SubmitUserItem({user, items}){
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    console.log(user.id)
    function handleSubmit(e) {
        e.preventDefault()
        const filter = items.find(i => i.name == e.target["it"].value)
        // console.log(e.target["it"].value)
        fetch("/user_items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user_id: user.id,
            item_id: filter.id,
            quantity: quantity,
            price: price
        }),
        })
        .then((r) => r.json())
        .then(console.log("Hello!"))
    }

    const listedItems = items.map( i => <option>{i.name}</option>)

    return(
        <form onSubmit={handleSubmit}>
            <select
                id="item"
                name="it" 
            >
            {listedItems}
            </select>
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
            <button type="submit">Submit</button>
        </form>
    )

}

export default SubmitUserItem