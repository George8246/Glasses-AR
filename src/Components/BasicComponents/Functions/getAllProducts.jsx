import axios from "axios";

var glass = getAllProducts();

async function getAllProducts() {
    var glasses = [];
    await axios.post("getProducts", { status: "all" }).then(function (response) {
        glasses = response.data;
    });

    return glasses;
}

export default glass;
