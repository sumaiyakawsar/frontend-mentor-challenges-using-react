import React from 'react'

import useFavicon from '../../components/favicons/favicon';
import useDocumentTitle from '../../components/favicons/useTitle'
import './style/project11.scss'

import food from './images/image-omelette.jpeg'


function Project11() {
    useFavicon("icons/project11.png");
    useDocumentTitle("Recipe page | Frontend Mentor");

    return (
        <div className="container project11">
            <div className="card">

                <div className="img__container">
                    <img src={food} alt="" className="my_pic" />
                </div>
                <div className="card__details">
                    <h1 className="card__header"> Simple Omelette Recipe </h1>


                    <p className="description">
                        An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked
                        to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                    </p>

                    <div className="prep_time">
                        <h2> Preparation time</h2>
                        <ul>
                            <li><span>Total:</span> Approximately 10 minutes</li>
                            <li><span>Preparation:</span> 5 minutes</li>
                            <li><span>Cooking:</span> 5 minutes</li>
                        </ul>
                    </div>


                    <div className="ingredients">
                        <h2>Ingredients</h2>
                        <ul>
                            <li>2-3 large eggs</li>
                            <li>Salt, to taste</li>
                            <li>Pepper, to taste</li>
                            <li> 1 tablespoon of butter or oil</li>
                            <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
                        </ul>
                    </div>

                    <hr />

                    <div className="instructions">
                        <h2>Instructions</h2>
                        <ol>
                            <li><span> Beat the eggs: </span>
                                In a bowl, beat the eggs with a pinch of salt and pepper until they are
                                well mixed. You can add a tablespoon of water or milk for a fluffier texture.
                            </li>
                            <li><span>Heat the pan: </span>
                                Place a non-stick frying pan over medium heat and add butter or oil.
                            </li>
                            <li><span>Cook the omelette:</span> Once the butter is melted and bubbling, pour in the eggs. Tilt the pan
                                to ensure the eggs evenly coat the surface.</li>
                            <li><span>Add fillings (optional):</span>

                                When the eggs begin to set at the edges but are still slightly
                                runny in the
                                middle, sprinkle your chosen fillings over one half of the omelette.

                            </li>
                            <li><span>Fold and serve:</span> As the omelette continues to cook, carefully lift one edge and fold it over
                                the fillings. Let it cook for another minute, then slide it onto a plate.
                            </li>
                            <li><span>Enjoy:</span> Serve hot, with additional salt and pepper if needed.
                            </li>
                        </ol>
                    </div>
                    <hr />

                    <div className="nutrition">
                        <h2>Nutrition</h2>

                        <div className="description">
                            The table below shows nutritional values per serving without the additional fillings.
                        </div>

                        <table>
                            <tr>
                                <td className="type">Calories</td>
                                <td className="amount">277kcal</td>
                            </tr>
                            <tr>
                                <td className="type"> Carbs</td>
                                <td className="amount"> 0g</td>
                            </tr>
                            <tr>
                                <td className="type">Protein</td>
                                <td className="amount">20g</td>
                            </tr>
                            <tr>
                                <td className="type">Fat</td>
                                <td className="amount">22g</td>
                            </tr>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project11
