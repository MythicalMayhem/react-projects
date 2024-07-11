import React from 'react'

const ShopItem = ({ name,price,id,add}) => {

    return (
        <>
            <div className='shopItem'>
                <img src="https://picsum.photos/200" alt="dog" /><br />
                <h2>{name}</h2>
                <h3>{price} $</h3>
                <button onClick={()=>{
                    add({id: id,name:name})
                }}>add</button>
            </div>
        </>
    )
}

export default ShopItem