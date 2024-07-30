import './chat.css'
export const Texts = () => {
    let userid = 1
    const receipiantid = 0
    // eslint-disable-next-line no-unused-vars
    const message = (content, key) => {
        userid = (userid+1) % 2;
        return <div key={key} className={"message " + (userid === receipiantid ? 'sent' : 'received')}> {content}</div >
    }
    const messages = [
        'wide stay becoming body began ask chemical modern grew salt month exactly broke though hospital within scientific jump explanation still instance cent related feature',
        'mistake natural story wash sea necessary sit way toward depend boat summer read alike hill package managed lovely had dawn monkey courage our essential',
        'title due darkness farther gift blow vote club valley useful serious proud rather matter officer wonderful drop fun studied fighting parallel learn wish mass',
        'language tune seldom allow oldest source why myself peace temperature river increase rough ever occasionally adjective capital business before wild cold sometime below officer',
        'shut identity tune learn treated naturally rain range kids gun drove wall orange green scale step various surrounded dirt anywhere us speak solar crowd',
        'hat tall teacher cabin course score master meat organized detail church coffee transportation copper weak grow building mixture cook occur attempt goes orbit been',
        'was interest flight giant forward electricity chapter build far equator chose give moving receive gulf full union whole till appearance additional subject share truth',
    ]

    return (
        <div className="texts">
            {messages.map((msg, index) => message(msg, index))}
        </div>
    );
}
