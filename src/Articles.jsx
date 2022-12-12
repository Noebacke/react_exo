const Articles = ()=>{
    const articles = [
        {
            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
            isPublished: true,
        },
        {
            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
            isPublished: true,
        },
        {
            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 3",
            isPublished: true,
        },
    ];
    const returnOfArray = articles.map((article)=>{
        if(article.isPublished)
        return(
            <div>
                <h1>{article.title}</h1>
                <img src={article.image}></img>
                <div>{article.subtitle}</div>
                <div>{article.content}</div>
                <div>{article.date.toString()}</div>
            </div>
            
        )
    });
    return (
        <div>
            {returnOfArray}
        </div>
    );
};

export default Articles;