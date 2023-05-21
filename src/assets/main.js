const url = 'https://tasty.p.rapidapi.com/recipes/list-similarities?recipe_id=8138';

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8dee3a112amshc7ef491f01f8913p120446jsn3b103b74570c',
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
	}
};

async function fetchApi (urlApi) {
	const response = await fetch (urlApi, options)
	const data = await response.json()
	return data
}

(async () => {
	try{
		const recipes = await fetchApi(url)
		let view = `
		${recipes.results.map( el => `
		<div class="group relative">
		<div
		  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
		  <img src="${el.thumbnail_url}" alt="${el.show.name}" class="w-full">
		</div>
		<div class="mt-4 flex justify-between">
		  <h3 class="text-sm text-gray-700">
			<span aria-hidden="true" class="absolute inset-0"></span>
			${el.name}
		  </h3>
		</div>
	  </div>
		`).slice(9, 13).join(' ')}
		`
		content.innerHTML = view
	}catch (error){
		console.log(error)
	}
})()