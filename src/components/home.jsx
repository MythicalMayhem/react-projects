import React from 'react' 
import ShopItem from './shopItem'
const Home = ({add}) => {
    const items = [
        { name: 'establish', price: 48 },
        { name: 'fewer', price: 46 },
        { name: 'ants', price: 10 },
        { name: 'string', price: 20 },
        { name: 'compound', price: 23 },
        { name: 'thread', price: 83 },
    ]
    return (
        <>
            <h1>This is Home </h1>
            <section className='shopItems'>
                {items.map((item, index) => { return <ShopItem key={index} id={index} price = {item['price']} name={item['name']} add={add}/> })}
            </section>
        </>
    )
}

export default Home