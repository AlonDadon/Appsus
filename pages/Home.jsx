export class Home extends React.Component {

    render() {
        const str = '&'
        return (
            <section className="home-container flex 
                                space-around align-center">
                <div>
                    <h1 className="logo">Apsus</h1>
                    <h2>Precision, Perfection , Personalization</h2>
                    <h3>One place for your E-mails, Notes {str} Books</h3>
                </div>
                <div className="desk-svg"></div>
            </section>
        )
    }
}
