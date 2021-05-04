export class Home extends React.Component {

    render() {
        const str = '&'
        return (
            <section className="home-container flex 
                                space-around align-center">
                <div>
                    <h2>Emails,Notes {str} book</h2>
                    <h1>Where style and efficiency meets</h1>
                </div>
                <img src="../assets/img/HomeBG.jpg" alt="" />
            </section>
        )
    }
}