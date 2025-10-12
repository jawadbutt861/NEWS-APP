let apiEverthing = "https://newsapi.org/v2/everything?q=football&apiKey=9aeadfb143464e0ead47b26f81743bf0";
let apiTrending = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9aeadfb143464e0ead47b26f81743bf0";

fetch(apiTrending)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    console.log(res);
    
    return res;
})
.catch((err)=>{
    return err
})