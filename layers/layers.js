var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KKJABAR_1 = new ol.format.GeoJSON();
var features_KKJABAR_1 = format_KKJABAR_1.readFeatures(json_KKJABAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KKJABAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KKJABAR_1.addFeatures(features_KKJABAR_1);
var lyr_KKJABAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KKJABAR_1, 
                style: style_KKJABAR_1,
                popuplayertitle: 'KK JABAR',
                interactive: true,
                title: '<img src="styles/legend/KKJABAR_1.png" /> KK JABAR'
            });
var format_PerjumpaanSatwaBid1_2026_2 = new ol.format.GeoJSON();
var features_PerjumpaanSatwaBid1_2026_2 = format_PerjumpaanSatwaBid1_2026_2.readFeatures(json_PerjumpaanSatwaBid1_2026_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerjumpaanSatwaBid1_2026_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerjumpaanSatwaBid1_2026_2.addFeatures(features_PerjumpaanSatwaBid1_2026_2);
var lyr_PerjumpaanSatwaBid1_2026_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerjumpaanSatwaBid1_2026_2, 
                style: style_PerjumpaanSatwaBid1_2026_2,
                popuplayertitle: 'Perjumpaan Satwa Bid1_2026',
                interactive: true,
                title: '<img src="styles/legend/PerjumpaanSatwaBid1_2026_2.png" /> Perjumpaan Satwa Bid1_2026'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_KKJABAR_1.setVisible(true);lyr_PerjumpaanSatwaBid1_2026_2.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KKJABAR_1,lyr_PerjumpaanSatwaBid1_2026_2];
lyr_KKJABAR_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'NOMOR': 'NOMOR', 'NO_POLY': 'NO_POLY', 'FUNGS_BSR': 'FUNGS_BSR', 'FUNGSI_KWS': 'FUNGSI_KWS', 'KODE_PROV': 'KODE_PROV', 'F_UPDT': 'F_UPDT', 'N_KWS': 'N_KWS', 'KPH': 'KPH', 'PNJK_PROV': 'PNJK_PROV', 'SPH': 'SPH', 'TGL_PROV': 'TGL_PROV', 'LS_PROV': 'LS_PROV', 'PNJK_PARS': 'PNJK_PARS', 'TGL_PARS': 'TGL_PARS', 'LS_PARS': 'LS_PARS', 'TBT': 'TBT', 'JNS_TBT': 'JNS_TBT', 'BATB': 'BATB', 'KET_TBT': 'KET_TBT', 'ERA_TAP': 'ERA_TAP', 'SK_TAP': 'SK_TAP', 'TGL_TAP': 'TGL_TAP', 'LS_TAP': 'LS_TAP', 'KET_TAP': 'KET_TAP', 'KETERANGAN': 'KETERANGAN', 'TAP_PARS': 'TAP_PARS', 'TGL_TAPPAR': 'TGL_TAPPAR', 'LS_TAPPAR': 'LS_TAPPAR', 'EDIT': 'EDIT', 'REKON': 'REKON', 'SHAPE_LENG': 'SHAPE_LENG', 'BAST': 'BAST', 'KET_ASAL': 'KET_ASAL', 'ASAL': 'ASAL', 'BATM': 'BATM', 'SUM_HA': 'SUM_HA', 'SUM_MTR': 'SUM_MTR', 'TIPO_1': 'TIPO_1', 'TIPO_2': 'TIPO_2', 'TIPO_3': 'TIPO_3', 'TIPO_4': 'TIPO_4', 'KET_TIPO': 'KET_TIPO', 'TENURIAL': 'TENURIAL', 'PERSONIL': 'PERSONIL', 'TGL_UPDT': 'TGL_UPDT', 'FID_JABAR': 'FID_JABAR', 'OBJECTID': 'OBJECTID', 'F_TAP': 'F_TAP', 'Nama': 'Nama', 'NAMA_KAWAS': 'NAMA_KAWAS', 'Hectares': 'Hectares', 'FID_Kawasa': 'FID_Kawasa', 'OBJECTID_3': 'OBJECTID_3', 'SK_TAP_1': 'SK_TAP_1', 'SHAPE_LE_1': 'SHAPE_LE_1', 'BH': 'BH', 'KET_BATM': 'KET_BATM', 'KODE_TIPO': 'KODE_TIPO', 'TIPOLOGI': 'TIPOLOGI', 'Hectares_1': 'Hectares_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', 'Shape_Area': 'Shape_Area', 'Jalur': 'Jalur', });
lyr_PerjumpaanSatwaBid1_2026_2.set('fieldAliases', {'MANDAT': 'MANDAT', 'KAWASAN': 'KAWASAN', 'X': 'X', 'Y': 'Y', 'KATEGORI': 'KATEGORI', 'JENIS_SATW': 'JENIS_SATW', 'TIPE_TEMUA': 'TIPE_TEMUA', });
lyr_KKJABAR_1.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID_2': 'Range', 'NOMOR': 'TextEdit', 'NO_POLY': 'TextEdit', 'FUNGS_BSR': 'TextEdit', 'FUNGSI_KWS': 'TextEdit', 'KODE_PROV': 'TextEdit', 'F_UPDT': 'TextEdit', 'N_KWS': 'TextEdit', 'KPH': 'TextEdit', 'PNJK_PROV': 'TextEdit', 'SPH': 'TextEdit', 'TGL_PROV': 'TextEdit', 'LS_PROV': 'TextEdit', 'PNJK_PARS': 'TextEdit', 'TGL_PARS': 'TextEdit', 'LS_PARS': 'TextEdit', 'TBT': 'TextEdit', 'JNS_TBT': 'TextEdit', 'BATB': 'TextEdit', 'KET_TBT': 'TextEdit', 'ERA_TAP': 'TextEdit', 'SK_TAP': 'TextEdit', 'TGL_TAP': 'DateTime', 'LS_TAP': 'TextEdit', 'KET_TAP': 'TextEdit', 'KETERANGAN': 'TextEdit', 'TAP_PARS': 'TextEdit', 'TGL_TAPPAR': 'TextEdit', 'LS_TAPPAR': 'TextEdit', 'EDIT': 'TextEdit', 'REKON': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'BAST': 'TextEdit', 'KET_ASAL': 'TextEdit', 'ASAL': 'TextEdit', 'BATM': 'TextEdit', 'SUM_HA': 'TextEdit', 'SUM_MTR': 'TextEdit', 'TIPO_1': 'TextEdit', 'TIPO_2': 'TextEdit', 'TIPO_3': 'TextEdit', 'TIPO_4': 'TextEdit', 'KET_TIPO': 'TextEdit', 'TENURIAL': 'TextEdit', 'PERSONIL': 'TextEdit', 'TGL_UPDT': 'TextEdit', 'FID_JABAR': 'TextEdit', 'OBJECTID': 'TextEdit', 'F_TAP': 'TextEdit', 'Nama': 'TextEdit', 'NAMA_KAWAS': 'TextEdit', 'Hectares': 'TextEdit', 'FID_Kawasa': 'TextEdit', 'OBJECTID_3': 'TextEdit', 'SK_TAP_1': 'TextEdit', 'SHAPE_LE_1': 'TextEdit', 'BH': 'TextEdit', 'KET_BATM': 'TextEdit', 'KODE_TIPO': 'TextEdit', 'TIPOLOGI': 'TextEdit', 'Hectares_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Le_3': 'TextEdit', 'Shape_Area': 'TextEdit', 'Jalur': 'TextEdit', });
lyr_PerjumpaanSatwaBid1_2026_2.set('fieldImages', {'MANDAT': 'TextEdit', 'KAWASAN': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'KATEGORI': 'TextEdit', 'JENIS_SATW': 'TextEdit', 'TIPE_TEMUA': 'TextEdit', });
lyr_KKJABAR_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'NOMOR': 'no label', 'NO_POLY': 'no label', 'FUNGS_BSR': 'no label', 'FUNGSI_KWS': 'no label', 'KODE_PROV': 'no label', 'F_UPDT': 'no label', 'N_KWS': 'no label', 'KPH': 'no label', 'PNJK_PROV': 'no label', 'SPH': 'no label', 'TGL_PROV': 'no label', 'LS_PROV': 'no label', 'PNJK_PARS': 'no label', 'TGL_PARS': 'no label', 'LS_PARS': 'no label', 'TBT': 'no label', 'JNS_TBT': 'no label', 'BATB': 'no label', 'KET_TBT': 'no label', 'ERA_TAP': 'no label', 'SK_TAP': 'no label', 'TGL_TAP': 'no label', 'LS_TAP': 'no label', 'KET_TAP': 'no label', 'KETERANGAN': 'no label', 'TAP_PARS': 'no label', 'TGL_TAPPAR': 'no label', 'LS_TAPPAR': 'no label', 'EDIT': 'no label', 'REKON': 'no label', 'SHAPE_LENG': 'no label', 'BAST': 'no label', 'KET_ASAL': 'no label', 'ASAL': 'no label', 'BATM': 'no label', 'SUM_HA': 'no label', 'SUM_MTR': 'no label', 'TIPO_1': 'no label', 'TIPO_2': 'no label', 'TIPO_3': 'no label', 'TIPO_4': 'no label', 'KET_TIPO': 'no label', 'TENURIAL': 'no label', 'PERSONIL': 'no label', 'TGL_UPDT': 'no label', 'FID_JABAR': 'no label', 'OBJECTID': 'no label', 'F_TAP': 'no label', 'Nama': 'no label', 'NAMA_KAWAS': 'no label', 'Hectares': 'no label', 'FID_Kawasa': 'no label', 'OBJECTID_3': 'no label', 'SK_TAP_1': 'no label', 'SHAPE_LE_1': 'no label', 'BH': 'no label', 'KET_BATM': 'no label', 'KODE_TIPO': 'no label', 'TIPOLOGI': 'no label', 'Hectares_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Le_3': 'no label', 'Shape_Area': 'no label', 'Jalur': 'no label', });
lyr_PerjumpaanSatwaBid1_2026_2.set('fieldLabels', {'MANDAT': 'inline label - always visible', 'KAWASAN': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'KATEGORI': 'no label', 'JENIS_SATW': 'inline label - always visible', 'TIPE_TEMUA': 'no label', });
lyr_PerjumpaanSatwaBid1_2026_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});