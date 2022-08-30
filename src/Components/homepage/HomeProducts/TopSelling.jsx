import Products from "../../BasicComponents/Genral/Product";
import Type from "../../BasicComponents/Genral/type";
import Container from "../../BasicComponents/Genral/Container";
import { useLayoutEffect, useState } from "react";
import getProducts from "../../BasicComponents/Functions/getAllProducts";
import getThreeItems from "../../BasicComponents/Functions/getThreeItems";

function useTopSelling() {
    var topG = [];
    var topGlasses = [];
    const [top, setTop] = useState([]);

    const t = "top";
    const header = t === "new" ? "Arrivals" : t === "top" ? "Selling" : "Sale";

    useLayoutEffect(() => {
        getProducts
            .then(function (response) {
                topG = response.data;
                var TG = response;
                TG = getThreeItems(TG, t, 6);
                topGlasses = TG;

                const thread1Length = Math.floor(topGlasses.length / 2);
                const thread1 = topGlasses.slice(0, thread1Length);
                const thread2 = topGlasses.slice(thread1Length, topGlasses.length);

                setTop([thread1, thread2]);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <Type type={t} fName={t !== "sale" && t.charAt(0).toUpperCase() + t.slice(1)} Name={header} />
            <div className="big-margin">
                {top.map((array, topIndex) => {
                    return (
                        <div key={topIndex} className="row">
                            {array.map((item, index) => {
                                var classes = "block col-lg-3 col-md-4 col-sm-1 Small-card";
                                var best = false;
                                var top = true;
                                var img = "img-small";
                                // (0 * 2)
                                if (index === topIndex * 2) {
                                    best = true;
                                    top = false;
                                    classes = "col-lg-6 col-md-4 col-sm-1 Big-card";
                                    img = "";
                                }
                                return (
                                    <Products
                                        key={item._id}
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        top={true}
                                        best={best}
                                        img={img}
                                        src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                                        classes={classes}
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </Container>
    );
}

export default useTopSelling;
