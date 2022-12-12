    
function ShowArticle(props){
    const article = props.currentArticle;
    return (
      <article key={article.id}>
        <h1>{article.title}</h1>
        <h2>{article.subtitle}</h2>
        <img src={article.image}></img>
        <div>{article.content}</div>
        <div>{article.date.toString()}</div>
      </article>
    );
}

export default ShowArticle;
    