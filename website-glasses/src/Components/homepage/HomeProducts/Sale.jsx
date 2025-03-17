import Products from "../../BasicComponents/Genral/Product";
import Type from "../../BasicComponents/Genral/type";
import Container from "../../BasicComponents/Genral/Container";
import { useLayoutEffect, useState } from "react";
import getProducts from "../../BasicComponents/Functions/getAllProducts";
import getThreeItems from "../../BasicComponents/Functions/getThreeItems";

function useSaleProducts() {
    var saleG = [];
    const [saleGlasses, setSaleGlasses] = useState([]);
    
    const t = "sale";
    const header = t === "new" ? "Arrivals" : t === "top" ? "Selling" : "Sale";

    useLayoutEffect(() => {
        getProducts
            .then(function (response) {
                var SG = response;
                SG = getThreeItems(SG, t);
                setSaleGlasses(SG);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <Container classes="container-fluid">
            <Type type={t} fName={t !== "sale" && t.charAt(0).toUpperCase() + t.slice(1)} Name={header} />
            <div className="row">
                {saleGlasses.map((item, index) => (
                    <Products
                        key={item._id}
                        id={item._id}
                        name={item.name}
                        sale={true}
                        price={item.price}
                        oldPrice={item.salePrice}
                        src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                        img="img-big"
                        type={item.status}
                        classes="col-lg-4 col-md-4 col-sm-1 Big-card"
                    />
                ))}
            </div>
        </Container>
    );
}

export default useSaleProducts;
