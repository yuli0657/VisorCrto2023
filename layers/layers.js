var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Grupo2_7Oct2018_EPSG9377_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Grupo2_7Oct2018_EPSG9377",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Grupo2_7Oct2018_EPSG9377_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-8225060.690238, 541307.230423, -8223048.534429, 544342.119893]
                            })
                        });
var format_AREA_2 = new ol.format.GeoJSON();
var features_AREA_2 = format_AREA_2.readFeatures(json_AREA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREA_2.addFeatures(features_AREA_2);
var lyr_AREA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREA_2, 
                style: style_AREA_2,
                interactive: true,
                title: '<img src="styles/legend/AREA_2.png" /> AREA'
            });
var format_3101_3 = new ol.format.GeoJSON();
var features_3101_3 = format_3101_3.readFeatures(json_3101_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_3.addFeatures(features_3101_3);
var lyr_3101_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_3, 
                style: style_3101_3,
                interactive: true,
                title: '<img src="styles/legend/3101_3.png" /> 3101'
            });
var format_5112_4 = new ol.format.GeoJSON();
var features_5112_4 = format_5112_4.readFeatures(json_5112_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_4.addFeatures(features_5112_4);
var lyr_5112_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5112_4, 
                style: style_5112_4,
                interactive: true,
                title: '<img src="styles/legend/5112_4.png" /> 5112'
            });
var format_5124_5 = new ol.format.GeoJSON();
var features_5124_5 = format_5124_5.readFeatures(json_5124_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_5.addFeatures(features_5124_5);
var lyr_5124_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_5, 
                style: style_5124_5,
                interactive: true,
                title: '<img src="styles/legend/5124_5.png" /> 5124'
            });
var format_5130_6 = new ol.format.GeoJSON();
var features_5130_6 = format_5130_6.readFeatures(json_5130_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5130_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5130_6.addFeatures(features_5130_6);
var lyr_5130_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5130_6, 
                style: style_5130_6,
                interactive: true,
                title: '<img src="styles/legend/5130_6.png" /> 5130'
            });
var format_2301_7 = new ol.format.GeoJSON();
var features_2301_7 = format_2301_7.readFeatures(json_2301_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2301_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2301_7.addFeatures(features_2301_7);
var lyr_2301_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2301_7, 
                style: style_2301_7,
                interactive: true,
                title: '<img src="styles/legend/2301_7.png" /> 2301'
            });
var format_2308_8 = new ol.format.GeoJSON();
var features_2308_8 = format_2308_8.readFeatures(json_2308_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2308_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2308_8.addFeatures(features_2308_8);
var lyr_2308_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2308_8, 
                style: style_2308_8,
                interactive: true,
                title: '<img src="styles/legend/2308_8.png" /> 2308'
            });
var format_Punto_Geodesico_9 = new ol.format.GeoJSON();
var features_Punto_Geodesico_9 = format_Punto_Geodesico_9.readFeatures(json_Punto_Geodesico_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Punto_Geodesico_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Punto_Geodesico_9.addFeatures(features_Punto_Geodesico_9);cluster_Punto_Geodesico_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Punto_Geodesico_9
});
var lyr_Punto_Geodesico_9 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Punto_Geodesico_9, 
                style: style_Punto_Geodesico_9,
                interactive: true,
                title: '<img src="styles/legend/Punto_Geodesico_9.png" /> Punto_Geodesico'
            });
var format_3101_10 = new ol.format.GeoJSON();
var features_3101_10 = format_3101_10.readFeatures(json_3101_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_10.addFeatures(features_3101_10);
var lyr_3101_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3101_10, 
                style: style_3101_10,
                interactive: true,
                title: '<img src="styles/legend/3101_10.png" /> 3101'
            });
var format_3411_11 = new ol.format.GeoJSON();
var features_3411_11 = format_3411_11.readFeatures(json_3411_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411_11.addFeatures(features_3411_11);
var lyr_3411_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_3411_11, 
                style: style_3411_11,
                interactive: true,
                title: '<img src="styles/legend/3411_11.png" /> 3411'
            });
var format_4107_12 = new ol.format.GeoJSON();
var features_4107_12 = format_4107_12.readFeatures(json_4107_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_12.addFeatures(features_4107_12);
var lyr_4107_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_4107_12, 
                style: style_4107_12,
                interactive: true,
                title: '<img src="styles/legend/4107_12.png" /> 4107'
            });
var format_5112_13 = new ol.format.GeoJSON();
var features_5112_13 = format_5112_13.readFeatures(json_5112_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5112_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5112_13.addFeatures(features_5112_13);
var lyr_5112_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5112_13, 
                style: style_5112_13,
                interactive: true,
                title: '<img src="styles/legend/5112_13.png" /> 5112'
            });
var format_5124_14 = new ol.format.GeoJSON();
var features_5124_14 = format_5124_14.readFeatures(json_5124_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_14.addFeatures(features_5124_14);
var lyr_5124_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5124_14, 
                style: style_5124_14,
                interactive: true,
                title: '<img src="styles/legend/5124_14.png" /> 5124'
            });
var format_5130_15 = new ol.format.GeoJSON();
var features_5130_15 = format_5130_15.readFeatures(json_5130_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5130_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5130_15.addFeatures(features_5130_15);
var lyr_5130_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5130_15, 
                style: style_5130_15,
                interactive: true,
                title: '<img src="styles/legend/5130_15.png" /> 5130'
            });
var format_6101_16 = new ol.format.GeoJSON();
var features_6101_16 = format_6101_16.readFeatures(json_6101_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_16.addFeatures(features_6101_16);
var lyr_6101_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_6101_16, 
                style: style_6101_16,
                interactive: true,
                title: '<img src="styles/legend/6101_16.png" /> 6101-'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Grupo2_7Oct2018_EPSG9377_1.setVisible(true);lyr_AREA_2.setVisible(true);lyr_3101_3.setVisible(true);lyr_5112_4.setVisible(true);lyr_5124_5.setVisible(true);lyr_5130_6.setVisible(true);lyr_2301_7.setVisible(true);lyr_2308_8.setVisible(true);lyr_Punto_Geodesico_9.setVisible(true);lyr_3101_10.setVisible(true);lyr_3411_11.setVisible(true);lyr_4107_12.setVisible(true);lyr_5112_13.setVisible(true);lyr_5124_14.setVisible(true);lyr_5130_15.setVisible(true);lyr_6101_16.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Grupo2_7Oct2018_EPSG9377_1,lyr_AREA_2,lyr_3101_3,lyr_5112_4,lyr_5124_5,lyr_5130_6,lyr_2301_7,lyr_2308_8,lyr_Punto_Geodesico_9,lyr_3101_10,lyr_3411_11,lyr_4107_12,lyr_5112_13,lyr_5124_14,lyr_5130_15,lyr_6101_16];
lyr_AREA_2.set('fieldAliases', {'id': 'id', });
lyr_3101_3.set('fieldAliases', {'id': 'id', 'Object_id': 'Object_id', 'tipo_via': 'tipo_via', 'TEDS': 'TEDS', 'TNUV': 'TNUV', 'TACC': 'TACC', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NMG': 'NMG', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', });
lyr_5112_4.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'SHAPE': 'SHAPE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NMG': 'NMG', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERMIETRO': 'PERMIETRO', 'AREA': 'AREA', });
lyr_5124_5.set('fieldAliases', {'id': 'id', 'object_id': 'object_id', 'shape': 'shape', 'TEDD': 'TEDD', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', 'DISPERSION': 'DISPERSION', });
lyr_5130_6.set('fieldAliases', {'id': 'id', 'OBJECT_ID': 'OBJECT_ID', 'SHAPE': 'SHAPE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'NMG': 'NMG', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', });
lyr_2301_7.set('fieldAliases', {'id': 'id', });
lyr_2308_8.set('fieldAliases', {'id': 'id', });
lyr_Punto_Geodesico_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NOMBRE_PUN': 'NOMBRE_PUN', 'ALTURA_SOB': 'ALTURA_SOB', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'GLOBALID': 'GLOBALID', });
lyr_3101_10.set('fieldAliases', {'id': 'id', 'Object_id': 'Object_id', 'tipo_via': 'tipo_via', 'TEDS': 'TEDS', 'TNUV': 'TNUV', 'TACC': 'TACC', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NMG': 'NMG', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', });
lyr_3411_11.set('fieldAliases', {'id': 'id', });
lyr_4107_12.set('fieldAliases', {'id': 'id', });
lyr_5112_13.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'SHAPE': 'SHAPE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'NMG': 'NMG', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERMIETRO': 'PERMIETRO', 'AREA': 'AREA', });
lyr_5124_14.set('fieldAliases', {'id': 'id', 'object_id': 'object_id', 'shape': 'shape', 'TEDD': 'TEDD', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', 'DISPERSION': 'DISPERSION', });
lyr_5130_15.set('fieldAliases', {'id': 'id', 'OBJECT_ID': 'OBJECT_ID', 'SHAPE': 'SHAPE', 'SYMBOL': 'SYMBOL', 'PROYECTO': 'PROYECTO', 'NMG': 'NMG', 'FECHA': 'FECHA', 'PK_CUE': 'PK_CUE', 'CAMBIO': 'CAMBIO', 'RESPONSABL': 'RESPONSABL', 'VIGENCIA': 'VIGENCIA', 'FECHA_MODI': 'FECHA_MODI', 'RULE_ID': 'RULE_ID', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', });
lyr_6101_16.set('fieldAliases', {'ID': 'ID', 'ELEV': 'ELEV', });
lyr_AREA_2.set('fieldImages', {'id': 'TextEdit', });
lyr_3101_3.set('fieldImages', {'id': 'TextEdit', 'Object_id': 'TextEdit', 'tipo_via': 'Range', 'TEDS': 'Range', 'TNUV': 'Range', 'TACC': 'Range', 'SYMBOL': 'Range', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NMG': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'Range', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'Range', 'FECHA_MODI': 'DateTime', 'RULE_ID': 'TextEdit', 'PERIMETRO': 'TextEdit', });
lyr_5112_4.set('fieldImages', {'id': '', 'OBJECTID': '', 'SHAPE': '', 'SYMBOL': '', 'PROYECTO': '', 'FECHA': '', 'NMG': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABL': '', 'VIGENCIA': '', 'FECHA_MODI': '', 'RULE_ID': '', 'PERMIETRO': '', 'AREA': '', });
lyr_5124_5.set('fieldImages', {'id': 'TextEdit', 'object_id': 'TextEdit', 'shape': 'TextEdit', 'TEDD': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RULE_ID': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', 'DISPERSION': 'TextEdit', });
lyr_5130_6.set('fieldImages', {'id': '', 'OBJECT_ID': '', 'SHAPE': '', 'SYMBOL': '', 'PROYECTO': '', 'NMG': '', 'FECHA': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABL': '', 'VIGENCIA': '', 'FECHA_MODI': '', 'RULE_ID': '', 'PERIMETRO': '', 'AREA': '', });
lyr_2301_7.set('fieldImages', {'id': '', });
lyr_2308_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Punto_Geodesico_9.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NOMBRE_PUN': '', 'ALTURA_SOB': '', 'PROYECTO': '', 'SYMBOL': '', 'FECHA': '', 'RULEID': '', 'PK_CUE': '', 'GLOBALID': '', });
lyr_3101_10.set('fieldImages', {'id': '', 'Object_id': '', 'tipo_via': '', 'TEDS': '', 'TNUV': '', 'TACC': '', 'SYMBOL': '', 'PROYECTO': '', 'FECHA': '', 'NMG': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABL': '', 'VIGENCIA': '', 'FECHA_MODI': '', 'RULE_ID': '', 'PERIMETRO': '', });
lyr_3411_11.set('fieldImages', {'id': 'TextEdit', });
lyr_4107_12.set('fieldImages', {'id': 'TextEdit', });
lyr_5112_13.set('fieldImages', {'id': 'TextEdit', 'OBJECTID': 'TextEdit', 'SHAPE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'FECHA': 'DateTime', 'NMG': 'TextEdit', 'PK_CUE': 'TextEdit', 'CAMBIO': 'TextEdit', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'TextEdit', 'RULE_ID': 'TextEdit', 'PERMIETRO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_5124_14.set('fieldImages', {'id': '', 'object_id': '', 'shape': '', 'TEDD': '', 'SYMBOL': '', 'PROYECTO': '', 'FECHA': '', 'PK_CUE': '', 'CAMBIO': '', 'RESPONSABL': '', 'VIGENCIA': '', 'FECHA_MODI': '', 'RULE_ID': '', 'PERIMETRO': '', 'AREA': '', 'DISPERSION': '', });
lyr_5130_15.set('fieldImages', {'id': 'TextEdit', 'OBJECT_ID': 'TextEdit', 'SHAPE': 'TextEdit', 'SYMBOL': 'TextEdit', 'PROYECTO': 'TextEdit', 'NMG': 'TextEdit', 'FECHA': 'DateTime', 'PK_CUE': 'TextEdit', 'CAMBIO': 'Range', 'RESPONSABL': 'TextEdit', 'VIGENCIA': 'TextEdit', 'FECHA_MODI': 'DateTime', 'RULE_ID': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_6101_16.set('fieldImages', {'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_AREA_2.set('fieldLabels', {'id': 'inline label', });
lyr_3101_3.set('fieldLabels', {'id': 'inline label', 'Object_id': 'inline label', 'tipo_via': 'inline label', 'TEDS': 'inline label', 'TNUV': 'inline label', 'TACC': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'NMG': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', });
lyr_5112_4.set('fieldLabels', {'id': 'inline label', 'OBJECTID': 'inline label', 'SHAPE': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'NMG': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERMIETRO': 'inline label', 'AREA': 'inline label', });
lyr_5124_5.set('fieldLabels', {'id': 'inline label', 'object_id': 'inline label', 'shape': 'inline label', 'TEDD': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', 'AREA': 'inline label', 'DISPERSION': 'inline label', });
lyr_5130_6.set('fieldLabels', {'id': 'inline label', 'OBJECT_ID': 'inline label', 'SHAPE': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'NMG': 'inline label', 'FECHA': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', 'AREA': 'inline label', });
lyr_2301_7.set('fieldLabels', {'id': 'inline label', });
lyr_2308_8.set('fieldLabels', {'id': 'inline label', });
lyr_Punto_Geodesico_9.set('fieldLabels', {'fid': 'inline label', 'OBJECTID': 'inline label', 'NOMBRE_PUN': 'inline label', 'ALTURA_SOB': 'inline label', 'PROYECTO': 'inline label', 'SYMBOL': 'inline label', 'FECHA': 'inline label', 'RULEID': 'inline label', 'PK_CUE': 'inline label', 'GLOBALID': 'inline label', });
lyr_3101_10.set('fieldLabels', {'id': 'inline label', 'Object_id': 'inline label', 'tipo_via': 'inline label', 'TEDS': 'inline label', 'TNUV': 'inline label', 'TACC': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'NMG': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', });
lyr_3411_11.set('fieldLabels', {'id': 'inline label', });
lyr_4107_12.set('fieldLabels', {'id': 'inline label', });
lyr_5112_13.set('fieldLabels', {'id': 'inline label', 'OBJECTID': 'inline label', 'SHAPE': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'NMG': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERMIETRO': 'inline label', 'AREA': 'inline label', });
lyr_5124_14.set('fieldLabels', {'id': 'inline label', 'object_id': 'inline label', 'shape': 'inline label', 'TEDD': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'FECHA': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', 'AREA': 'inline label', 'DISPERSION': 'inline label', });
lyr_5130_15.set('fieldLabels', {'id': 'inline label', 'OBJECT_ID': 'inline label', 'SHAPE': 'inline label', 'SYMBOL': 'inline label', 'PROYECTO': 'inline label', 'NMG': 'inline label', 'FECHA': 'inline label', 'PK_CUE': 'inline label', 'CAMBIO': 'inline label', 'RESPONSABL': 'inline label', 'VIGENCIA': 'inline label', 'FECHA_MODI': 'inline label', 'RULE_ID': 'inline label', 'PERIMETRO': 'inline label', 'AREA': 'inline label', });
lyr_6101_16.set('fieldLabels', {'ID': 'inline label', 'ELEV': 'inline label', });
lyr_6101_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});