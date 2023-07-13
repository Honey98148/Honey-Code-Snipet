// Creating Location on Map  :
var latlngs = [[37, -109.05],[41, -109.03],[41, -102.05],[37, -102.04]];
var polygon = L.polygon(latlngs, {color: 'red'}).addTo(cur_frm.fields_dict.crop_acreage_map.map);
cur_frm.fields_dict.crop_acreage_map.map.fitBounds(polygon.getBounds())



