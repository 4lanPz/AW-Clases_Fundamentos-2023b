// api

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '860fb56d3cmsh99eb55bc54add91p1a57f8jsn0d4b20baaa97',
		'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com'
	}
};

fetch('https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=%3CREQUIRED%3E&nutrition-type=cooking', options)
    //.then(res => console.log(res)) //verifia l estado, publico o privado, en este caso es privado
    .then(res => res.json())
    .then(respuesta => console.log(respuesta))