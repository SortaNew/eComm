import {useState} from "react"

function SubmitUserItem(){
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/user_items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // user_id,
            // item_id,
            quantity,
            price
        }),
        })
        .then((r) => r.json())
        .then(console.log("Hello!"))
    }

    return(
        <form onSubmit={handleSubmit}>
            <select>Pick an item</select>
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