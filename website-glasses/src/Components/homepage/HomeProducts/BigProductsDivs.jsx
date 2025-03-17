import Products from "../../BasicComponents/Genral/Product";
import Type from "../../BasicComponents/Genral/type";
import Container from "../../BasicComponents/Genral/Container";
import { useLayoutEffect, useState } from "react";
import getProducts from "../../BasicComponents/Functions/getAllProducts";
import getThreeItems from "../../BasicComponents/Functions/getThreeItems";

function useNewArivalProducts(props) {
    var newG = [];
    const [newGlasses, setNewGlasses] = useState([]);

    const t = props.status;
    const header = t === "new" ? "Arrivals" : t === "top" ? "Selling" : "Sale";

    useLayoutEffect(() => {
        getProducts
            .then(function (response) {
                var NG = response;
                NG = getThreeItems(NG, t);
                setNewGlasses(NG);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <Container classes="container-fluid">
            <Type type={t} fName={t !== "sale" && t.charAt(0).toUpperCase() + t.slice(1)} Name={header} />
            <div className="row">
                {newGlasses.map((item) => (
                    <Products
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        price={t === "sale" ? item.salePrice : item.price}
                        src={require("../../../Images/glasses/Glasses/" + item.colors[0].src[0])}
                        oldPrice={t === "sale" && item.price}
                        img="img-big"
                        type={item.status}
                        classes="col-lg-4 col-md-4 col-sm-1 Big-card"
                    />
                ))}
            </div>
        </Container>
    );
}

export default useNewArivalProducts;
