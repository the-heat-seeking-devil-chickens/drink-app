const Card = (cardInfo) => {
    const [name, directions, ingredients, liquor, garnish ] = cardInfo;

    const ingredientList = [];
    const directionsList = [];
    const liquorList = [];

    ingredients.forEach((ingredient, i)=>{
        ingredientList.push(<li key={i} className="ingredient">{ingredient}</li>)
    });

    directionsList.forEach((step, i) => {
        directionsList.push(<li key={i} className="directions">{step}</li>)
    })

    liquorList.forEach((liquor, i) => {
        liquorList.push(<span key={i} className="liquor">{liquor}</span>)
    });


    return(
        <div className="card">
            <img src={`../assets/${name}.jpg`} />
            <div className="card-info">
                <h2>{name}</h2>
                <h3>{liquorList}</h3>
                <ul className="ingredient-list">
                  { ingredientList }
                </ul>
                <span>{garnish}</span>
                <ul className="directions-list">
                  { directionsList }
                </ul>
            </div>  
        </div>
    )
}

export default Card;

/*
<div className="card">
  <img src="" />
  <div className="card-info">
    <h2> {name} </h2>
    <ul className="ingredient-list">
      <li> </li>
    </ul>
    <ul className="directions">
      <li></li>
    </ul>
</div>