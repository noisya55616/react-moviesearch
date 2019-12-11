import React from 'react';

//input sent from index.js in call
let input = 'frozen';

let code = "<p id='reviews'>";
let boxCode = "<p id='box'>";
let closure = "</p>";
let url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json';
let key = 'WVICcXJihODRENAK1SggWsXqtKEXkodf';

//New York Times Movie Review JSON File is Returned
let requestUrl = url+'?query='+input+'&key='+key; 
createBoxes(requestUrl);

async function createBoxes(reqUrl){
let response = await fetch(reqUrl);
let parsed = JSON.parse(response);

results[parsed.num_results] = parsed.results;//Results of JSON File;

for (i = 0; i > results.length; i++){
    newBox = boxCode;
    //For each result, it will create a box and fill it out with relevant information
    newBox += results[i].display_title;
    newBox += closure;
    code += newBox;
}
}
export default () => code;
