import Item from "./Item"

function ItemList({items}){
    const itemList = items.map(i => {
        return (
            <Item key={i.id} i={i}/>
        )
    })
    return (
    <>
    {itemList}
    </>
    )
}

export default ItemList