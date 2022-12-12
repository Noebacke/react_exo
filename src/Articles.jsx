import ShowArticle from "./ShowArticle";
import { useState } from "react";

const Articles = ()=>{

    const [isButtonClicked, setIsButtonClicked] = useState();

    const registerClick = (e)=>{
        setIsButtonClicked(true);
    }

    const articles = [
        {
            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
            isPublished: true,
            id: 15,
        },
        {
            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
            isPublished: true,
            id: 12,
        },
        {
            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 3",
            isPublished: true,
            id: 5,
        },
    ];
   
    return (
        <section>
            {isButtonClicked ? (articles.map((article)=>{
                    return(
                        <section>
                            <ShowArticle currentArticle={article}/>
                        </section>
                        
                    )
                })) 
                :(<button onClick={registerClick}>Cliquez ici pour afficher les articles</button>)  
            }
        </section>
        
    );
};

export default Articles;