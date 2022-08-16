import Products from "../Genral/Product";
import Type from "../Genral/type";
import Container from "../Genral/Container";

function TopSelling() {
    const s = {
        display: "block",
        textAlign: "left",
    };

    return (
        <Container>
            <Type fName="Top" Name="Selling" one={true} />
            <div className="big-margin">
                <div className="row">
                    <Products best={true} classes="col-lg-6 col-md-4 col-sm-1 Big-card" />
                    <Products img="img-small" styles={s} classes="col-lg-3 col-md-4 col-sm-1 Small-card" />
                    <Products img="img-small" styles={s} classes="col-lg-3 col-md-4 col-sm-1 Small-card" />
                </div>
                <div className="row">
                    <Products img="img-small" styles={s} classes="col-lg-3 col-md-4 col-sm-1 Small-card" />
                    <Products img="img-small" styles={s} classes="col-lg-3 col-md-4 col-sm-1 Small-card" />
                    <Products best={true} classes="col-lg-6 col-md-4 col-sm-1 Big-card" />
                </div>
            </div>
        </Container>
    );
}

export default TopSelling;
