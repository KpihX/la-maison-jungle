import plantList from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem.js'
import { useState } from 'react'
import Categories from './Categories'

function ShoppingList({ cart, updateCart}) {
    const [selectedCategories, setSelectedCategories] = useState([])
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
        const currentPlantRemoved = cart.find((plant) => plant.name === name)
        if (currentPlantRemoved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantRemoved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    } 
    function removeFromCart(name) {
        const currentPlantRemoved = cart.find((plant) => plant.name === name)
        if (currentPlantRemoved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            if (currentPlantRemoved.amount === 1) {
                updateCart(cartFilteredCurrentPlant)
            } else {
                updateCart([
                    ...cartFilteredCurrentPlant,
                    { name, price: currentPlantRemoved.price, amount: currentPlantRemoved.amount - 1 }
                ])
            }
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
				setSelectedCategories={setSelectedCategories}
				selectedCategories={selectedCategories}
			/>
            <ul className='lmj-plant-list'>
                {plantList.map(({ id, category, cover, name, water, light, price }) => (
                    (selectedCategories.length === 0 || selectedCategories.includes(category)) ? (
                        <div key={id}>
                            <PlantItem 
                                cover={cover} 
                                category={category}
                                name={name} 
                                water={water} 
                                light={light} 
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                            <button onClick={() => removeFromCart(name)}>Retirer</button>
                        </div>
                    ) : null
				))}
            </ul>
        </div>
    )
}

export default ShoppingList