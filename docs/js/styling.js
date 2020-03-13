var mapOpts = {
    style: 'grijs',
    target: 'map',
    center: {
        longitude: 5.35,
        latitude: 52.15
    },
    overlay: 'false',
    marker: false,
    zoom: 8,
    search: false
};

var lineStyle = {
    "color": "#aaa",
    "weight": 1,
    "opacity": 0.3
};

function getPctColorValue(gemeente_obj) {
    var value = (gemeente_obj["COVID 13-03"] / gemeente_obj["Inwonertal"]) * 18000;

    if (value === undefined || value === "" || value < 0.5)
        return "#fef0d9";
    if (value < 1)
        return "#fdd49e";
    if (value < 2)
        return "#fdbb84";
    if (value < 5)
        return "#fc8d59";
    if (value < 10)
        return "#e34a33";
    return "#b30000";
}

function getAbsColorValue(gemeente_obj) {
    var value = gemeente_obj["COVID 13-03"];

    if (value === undefined || value === "" || value < 2)
        return "#fef0d9";
    if (value < 4)
        return "#fdd49e";
    if (value < 7)
        return "#fdbb84";
    if (value < 12)
        return "#fc8d59";
    if (value < 25)
        return "#e34a33";
    return "#b30000";
}
