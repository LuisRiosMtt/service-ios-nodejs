//generos.js
var genero = require('../models/genero');
var port = process.env.PORT || 8080;
var rutaImagenes = 'https://service-ios.azurewebsites.net/images/'

exports.Listar = function(req,res){
	genero.find(function(err,result){
		if(err){
			res.status(500).json({mensaje:'Error al listar los generos'});
		}
		else
		{
			res.status(200).json(result);
		}
	});
};


exports.cargaMasiva = function(){
 	var genero1 = new genero();
 	genero1.descripcion = "Accion";
 	for(var i=1;i<5;i++)
 	{
 		genero1.peliculas.push({
 			titulo:'Titanic'+i,
 			director:'Josue',
 			sinopsis:'Los géneros cinematográficos se '+
 			'clasifican según los elementos comunes de las '+
 			'películas que abarquen, originalmente según sus '+
 			'aspectos formales (ritmo, estilo o tono y, sobre todo,'+
 			'el sentimiento que busquen provocar en el espectador, ajuste). '+
 			'Alternativamente, los géneros cinematográficos se definen por su ambientación'+
 			'o por su formato. Los géneros siguientes son a menudo concretados para formar subgéneros,'+ 
 			'y también pueden ser combinados para formar géneros híbridos.',
 			duracion:'150 min',
 			foto:rutaImagenes+'Titanic'+i+'.jpg',
 			videoCode: 'fewfw'
 		});
 	}	
 	genero1.save();
};