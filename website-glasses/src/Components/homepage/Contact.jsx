import Button from "../BasicComponents/Genral/button";
import Container from "../BasicComponents/Genral/Container";
import Type from "../BasicComponents/Genral/type";
import "../Styles/footer.css";

function Conract() {
    return (
        <Container>
            <div className="big-margin contact">
                <Type fName="Stay in" Name="Touch" one={true} />
                <p>Subscribe to the newsletter for exclusive access to the latest trends, sales & special offers.</p>
                <input type="Email" placeholder="Your Email Address" />
                <br />
                <Button classes="big-btn no-border-top">JOIN</Button>
            </div>
        </Container>
    );
}

export default Conract;
