function getArticleGenerator(articles) {
    return (function(){
        const content = document.getElementById('content');
        const article = document.createElement('article');
        const line = articles.shift();
        if(line != undefined){
            article.textContent = line;
            content.appendChild(article)
        }
    })
}