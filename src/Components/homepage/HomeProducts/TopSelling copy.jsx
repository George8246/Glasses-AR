import Products from "../../BasicComponents/Genral/Product";
import Type from "../../BasicComponents/Genral/type";
import Container from "../../BasicComponents/Genral/Container";
import glasses from "../../../DataArray/glasses";

function useTopSelling() {
    var topGlasses = glasses.filter((item) => item.status === "top" || item.status === "best");

    var temp = [];
    var tempIndex = [];
    for (let index = 0; index < topGlasses.length; index++) {
        const glasses = topGlasses[index];
        if (glasses.status === "best") {
            tempIndex.push(index);
            temp.push(glasses);
        }
    }

    topGlasses.splice(tempIndex[1], 1);
    topGlasses.splice(tempIndex[0], 1);
    topGlasses.splice(0, 0, temp[0]);
    topGlasses.push(temp[1]);

    const thread1Length = Math.floor(topGlasses.length / 2);
    const thread1 = topGlasses.slice(0, thread1Length);
    const thread2 = topGlasses.slice(thread1Length, topGlasses.length);

    return (
        <Container>
            <Type fName="Top" Name="Selling" one={true} />
            <div className="big-margin">
                <div className="row">
                    {thread1.map((item, index) => {
                        if (item.status === "top") {
                            return (
                                <Products
                                    key={index}
                                    id={index}
                                    name={item.name}
                                    price={item.price}
                                    top={true}
                                    best={false}
                                    img="img-small"
                                    src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                                    classes="block col-lg-3 col-md-4 col-sm-1 Small-card"
                                />
                            );
                        } else {
                            return (
                                <Products
                                    key={index}
                                    id={index}
                                    name={item.name}
                                    price={item.price}
                                    best={true}
                                    src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                                    classes="col-lg-6 col-md-4 col-sm-1 Big-card"
                                />
                            );
                        }
                    })}
                </div>
                <div className="row">
                    {thread2.map((item, index) => {
                        if (item.status === "top") {
                            return (
                                <Products
                                    key={index}
                                    id={index}
                                    name={item.name}
                                    price={item.price}
                                    top={true}
                                    best={false}
                                    img="img-small"
                                    src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                                    classes="block col-lg-3 col-md-4 col-sm-1 Small-card"
                                />
                            );
                        } else {
                            return (
                                <Products
                                    key={index}
                                    id={index}
                                    name={item.name}
                                    price={item.price}
                                    best={true}
                                    src={require("../../../Images/glasses/Front/" + item.colors[0].src[0])}
                                    classes="col-lg-6 col-md-4 col-sm-1 Big-card"
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </Container>
    );
}

export default useTopSelling;
