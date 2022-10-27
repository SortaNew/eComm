import Item from "./Item"

function UserItemList({userItems}){

    // const itemList = items.filter(i => {
    //     return (i.user_items.map( arr =>{
    //         return (
    //             arr.user_id    
    //         )}
    //         )      
    //     ) == 2
    // })
  
    const itemList = userItems.filter( i => {
        return i.user_id == 2
    })
    const comp = itemList.map(i => {
        return <Item key={i.id} i={i.item}/>
    })
    
    
    return (
    <>
    {comp}
    </>
    )
}

export default UserItemList