import { useEffect,useState } from "react";

const RandomCocktail = ()=>{

    const [cocktailRandomData, setCocktailRandomdata] = useState(null);

    

    const handleClick = async () => {
        const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailRandomData = await cocktailResponses.json()
        const returnCocktail = cocktailRandomData.drinks[0];
        setCocktailRandomdata(returnCocktail);
        
    }


    return(
        <div>
            <button onClick={handleClick}>Cliquez sur moi pour retourner les noms de boissons</button>
            {cocktailRandomData ? (
                <div>
                    <h1>{cocktailRandomData.strDrink }</h1>
                    <img src={cocktailRandomData.strDrinkThumb}></img>
                    <div>{cocktailRandomData.strCategory}</div>
                    <div>{cocktailRandomData.strInstructions}</div>
                </div>   
            ) : (
                <div>
                    <h1>Chargement de la recette...</h1>
                </div>
            )}
        </div>
    )
};

export default RandomCocktail;