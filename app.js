let apiEverthing = "https://newsapi.org/v2/everything?q=football&apiKey=9aeadfb143464e0ead47b26f81743bf0";
let apiTrending = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9aeadfb143464e0ead47b26f81743bf0";
let arr = []

fetch(apiTrending)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    for(let i = 0; i < res.articles.length; i++){
        let obj = {
        title : `${res.articles[i].title}`,
        description : `${res.articles[i].description}`,
        content : `${res.articles[i].content}`,
        channelName : `${res.articles[i].source.name}`,
        author : `${res.articles[i].author}`,
        time : `${res.articles[i].publishedAt}`,
        detail : `${res.articles[i].url}`,
    }
    arr.push(obj)
    }
        
        
    
   
    console.log(arr);
    
    return res;
})
.catch((err)=>{
    return err
})