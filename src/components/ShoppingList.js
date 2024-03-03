import plantList from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'
import { useState } from 'react'
import Categories from './Categories'

function ShoppingList({ cart, updateCart}) {
    const [activeCategory, setActiveCategory] = useState('')
    /*const categories = [];
    plantList.forEach(plant => {
        if (!categories.includes(plant.category)) {
            categories.push(plant.category);
        }
    });*/
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    function addToCart(name, price) {
        const currentPlantAdded = cart.find((plant) => plant.name === name)
        if (currentPlantAdded) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantAdded.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    } 

    return (
        /*<ul>
            {plantList.map((plant, index) => (
                <li key={`${plant}-${index}`}>{plant}</li>
            ))}
        </ul>*/
        <div className='lmj-shopping-list'>
            <Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, category, cover, name, water, light, price }) => (
                    (!activeCategory || activeCategory === category) ? (
                        <div key={id}>
                            <PlantItem 
                                cover={cover} 
                                name={name} 
                                water={water} 
                                light={light} 
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
				))}
            </ul>
        </div>
    )
}

export default ShoppingList