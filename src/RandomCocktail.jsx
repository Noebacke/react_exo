import { useEffect,useState } from "react";

const RandomCocktail = ()=>{

    const [cocktailRandomData, setCocktailRandomdata] = useState(null);

    

    const handleClick = async () => {
        const cocktailResponses = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
        const cocktailRandomData = await cocktailResponses.json()
        setCocktailRandomdata(cocktailRandomData);
    }
    
    return(
        <div>
            <button onClick={handleClick}>Cliquez sur moi pour retourner les boissons</button>
            {cocktailRandomData ? (
                <div>
                    <h1>{cocktailRandomData.drinks[0].strDrink }</h1>
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