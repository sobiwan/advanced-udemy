function getMostFollowers(...usernames){
    let baseURL = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseURL + username));
    return Promise.all(urls).then(function(data){
        let max = data.sort((a,b) => a.followers < b.followers)[0]
        return `${max.name} has the most followers with ${max.followers}`;
    });
}

function starWarsString(id){
    var str = '';
    return $.getJSON(`https://swapi.co/api/people/${id}/`)
     .then(function(data){
         str += `${data.name} is featured in `;
         let filmData = data.films[0];
         return $.getJSON(filmData)
     }).then(function(res){
        str += `${res.title}, directed by ${res.director}`;
        let planetData = res.planets[0];
        return $.getJSON(planetData); 
     }).then(function(res){
         str += ` and it takes place on ${res.name}`
         return str;
     }).then (function(finalString){
         return finalString;
     })
    }

async function getMostFollowers(...usernames){
    let baseURL = "https://api.github.com/users/";
    let urls = usernames.map(username => $.getJSON(baseURL + username));
    let results = await Promise.all(urls)
    let max = results.sort((a,b) => a.followers < b.followers)[0]
    return `${max.name} has the most followers with ${max.followers}`;
}

async function starWarsString(id){
    let str = '';
    let results = await $.getJSON(`https://swapi.co/api/people/${id}/`)
    str += `${results.name} is featured in `;
    let filmData = results.films[0];
    let moreResults = await $.getJSON(filmData);
    str += `${moreResults.title}, directed by ${moreResults.director}`;
    let planetData = moreResults.planets[0];
    let lastResults = await $.getJSON(planetData); 
    str += ` and it takes place on ${lastResults.name}`
    return str;
}