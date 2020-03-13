function zoomToFeature(event) {
    var layer = event.target;
    map.fitBounds(layer.getBounds());
}

function resetHighlight(event) {
    var layer = event.target;
    layer.setStyle({fillOpacity: 0.3});
    layer.closeTooltip();
}

function highlightFeature(event) {
    var layer = event.target;
    layer.setStyle({fillOpacity: 0.6});
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    layer.openTooltip();
}

function onEachFeatureBase(feature, layer, gemeente_obj) {

    var details = "<dl>" +
        "<dt>" + feature.properties['Gemeentena'] + "</dt>" +
        "<dd>08-03: " + gemeente_obj['COVID 08-03'] + "</dd>" +
        "<dd>09-03: " + gemeente_obj['COVID 09-03'] + "</dd>" +
        "<dd>10-03: " + gemeente_obj['COVID 10-03'] + "</dd>" +
        "<dd>11-03: " + gemeente_obj['COVID 11-03'] + "</dd>" +
        "<dd>12-03: " + gemeente_obj['COVID 12-03'] + "</dd>" +
        "<dd>13-03: " + gemeente_obj['COVID 13-03'] + "</dd>" +
        "</dl>";
    layer.bindTooltip(details);

    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}
