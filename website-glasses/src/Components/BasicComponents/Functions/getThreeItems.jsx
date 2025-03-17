function getThreeItems(array, status, range = 3) {
    var g = array.filter((item) => item.status === status && item);
    g.sort(() => Math.random() - 0.5);
    g = g.slice(0, range);
    return g;
}

export default getThreeItems;
