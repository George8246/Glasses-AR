import Button from "../Genral/button";
import Container from "../Genral/Container";
import Type from "../Genral/type";
import "./footer.css";

function Conract() {
    return (
        <Container>
            <div className="big-margin contact">
                <Type fName="Stay in" Name="Touch" one={true} />
                <p>Subscribe to the newsletter for exclkusive access to the latest trends, sales & special offers.</p>
                <input type="text" placeholder="Your Email Address" />
                <br />
                <Button classes="big-btn no-border-top">JOIN</Button>
            </div>
        </Container>
    );
}

export default Conract;
