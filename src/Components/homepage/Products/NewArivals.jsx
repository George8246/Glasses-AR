import Products from "../Genral/Product";
import Type from "../Genral/type";
import Container from "../Genral/Container";

function newArivalProducts(props) {
    return (
        <Container classes="container-fluid">
            <Type fName="New" Name="Arrivals" />
            <div className="row">
                <Products img="img-big" type="New" classes="col-lg-4 col-md-4 col-sm-1 Big-card" />
                <Products img="img-big" type="New" classes="col-lg-4 col-md-4 col-sm-1 Big-card" />
                <Products img="img-big" type="New" classes="col-lg-4 col-md-4 col-sm-1 Big-card" />
            </div>
        </Container>
    );
}

export default newArivalProducts;
