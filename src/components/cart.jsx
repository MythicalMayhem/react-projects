import React from 'react'

const Cart = ({ cart, remove }) => {
    return (
        <>
        {console.log(cart)}
            {cart.map((item,index) => {
                return(<div key={index}>
                                <p>{index}</p><h1>{item['name']}</h1>
                                <button onClick={() => remove(item['id'])}>remove</button>
                            </div>
                       )
            })}
        </>

    )
}

export default Cart