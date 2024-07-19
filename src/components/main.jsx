import Item from "./card";
function Main() {
    return (
        <main className="main">
            <section className="catalog">
                <Item className='card' />
                <Item className='card' />
                <Item className='card' />
            </section>
            <aside>
                <ul>
                    <li>Featured</li>
                    <li>Multiplayer</li>
                    <li>free to play</li>
                    <li>Other</li>
                </ul>
            </aside>
        </main>
    );
}

export default Main;