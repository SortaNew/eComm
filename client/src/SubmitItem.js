import {useState} from "react"

function SubmitItem(){
    
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            description,
            image
        }),
        })
        .then((r) => r.json())
        .then(console.log("Hello!"))
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="item_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="imageUrl">Image Url:</label>
            <input
                type="text"
                id="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )

}

export default SubmitItem