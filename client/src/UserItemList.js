import UserItem from "./UserItem"

function UserItemList({user, userItems}){
    
    const itemList = userItems.filter(i => {
        console.log(i)
        return i.user_id == user.id
    })
    
    const filter = itemList.map(i => {
        return (
            <UserItem key={i.id} i={i.item}/>
        )
    })
    return (
    <>
    {filter}
    </>
    )
}

export default UserItemList