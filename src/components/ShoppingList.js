import plantList from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'

function ShoppingList() {
    /*const categories = [];
    plantList.forEach(plant => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });*/

    const categories = plantList.reduce((acc, plant) => 
        acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )
    
    return (
        /*<ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>*/
        <div>
            <ul>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
            </ul>
        </div>
    )
}

export default ShoppingList