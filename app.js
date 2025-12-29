let section = document.querySelector(".news-section");
let categories = document.querySelector(".categories")



function other(){
    

     let categoryArray = ["Trending","Business","Entertainment","General","Health","Science","Sports","Technology"];

    categoryArray.map((item)=>{
    categories.innerHTML +=`
    <button class="category-btn">${item}</button>
    `});

    let categorybtn = document.querySelectorAll(".category-btn");

categorybtn.forEach((item,index)=>{

    item.addEventListener("click",()=>{
        
        if(index === 0){

            section.innerHTML = " ";
            trending();
        }

        else{

            let apiEverthing = `https://newsapi.org/v2/everything?q=${categoryArray[index]}&apiKey=9aeadfb143464e0ead47b26f81743bf0`;

            let arr2 = [];
            section.innerHTML = " ";

            fetch(apiEverthing)

            .then((res)=>{

                return res.json();

            })
            .then((res)=>{

              
                 for(let i = 0; i < res.articles.length; i++){
                    let obj2 = {
                    title : `${res.articles[i].title}`,
                    description : `${res.articles[i].description}`,
                    content : `${res.articles[i].content}`,
                    channelName : `${res.articles[i].source.name}`,
                    author : `${res.articles[i].author}`,
                    time : `${res.articles[i].publishedAt}`,
                    detail : `${res.articles[i].url}`,
                    image : `${res.articles[i].urlToImage}`,
                    };

                    arr2.push(obj2);
                }

arr2.map((item)=>{

    section.innerHTML +=`
     <div class="news-card">
      ${item.image && item.image !== 'null' ? `<div class="news-image">
        <img src="${item.image}" alt="${item.title}" onerror="this.parentElement.style.display='none'">
      </div>` : ''}
      
      <div class="news-content-wrapper">
        <div class="news-header">
          <h2 class="news-title">${item.title}</h2>
          <p class="news-description">
            ${item.description}
          </p>
        </div>

        <div class="news-body">
          <p class="news-content">
            ${item.content}
          </p>
        </div>

        <div class="news-meta">
          <span class="channel">${item.channelName}</span>
          <div class="author">
            <div class="author-info">
              <h4>${item.author || 'Unknown Author'}</h4>
              <small>Published on ${new Date(item.time).toLocaleDateString()}</small>
            </div>
          </div>
        </div>

        <div class="news-footer">
          <a href="${item.detail}" target="_blank" class="read-more">Read Full Article →</a>
        </div>
      </div>
    </div>
    `
})
                return res;
            })
            .catch((err)=>{

                return err;

            })
        }
    })
})
}


function trending(){
    //Trending API
    let arr = []
    let apiTrending = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9aeadfb143464e0ead47b26f81743bf0";

//Fetching API

fetch(apiTrending)
.then((res)=>{
    return res.json();
})
.then((res)=>{
    //Getting Required info in object
    for(let i = 0; i < res.articles.length; i++){
        let obj = {
        title : `${res.articles[i].title}`,
        description : `${res.articles[i].description}`,
        content : `${res.articles[i].content}`,
        channelName : `${res.articles[i].source.name}`,
        author : `${res.articles[i].author}`,
        time : `${res.articles[i].publishedAt}`,
        detail : `${res.articles[i].url}`,
        image : `${res.articles[i].urlToImage}`,
    }
    //Pushing required info object to array
    arr.push(obj)
    }
    //Rendering info
arr.map((item)=>{
    section.innerHTML +=`
     <div class="news-card">
      ${item.image && item.image !== 'null' ? `<div class="news-image">
        <img src="${item.image}" alt="${item.title}" onerror="this.parentElement.style.display='none'">
      </div>` : ''}
      
      <div class="news-content-wrapper">
        <div class="news-header">
          <h2 class="news-title">${item.title}</h2>
          <p class="news-description">
            ${item.description}
          </p>
        </div>

        <div class="news-body">
          <p class="news-content">
            ${item.content}
          </p>
        </div>

        <div class="news-meta">
          <span class="channel">${item.channelName}</span>
          <div class="author">
            <div class="author-info">
              <h4>${item.author || 'Unknown Author'}</h4>
              <small>Published on ${new Date(item.time).toLocaleDateString()}</small>
            </div>
          </div>
        </div>

        <div class="news-footer">
          <a href="${item.detail}" target="_blank" class="read-more">Read Full Article →</a>
        </div>
      </div>
    </div>
    `
}) 
    return res;
})
.catch((err)=>{
    return err
})
}
// Calling  functions
other();
trending();
