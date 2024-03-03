import CareScale from './CareScale.js'
import Modal from './Modal.js'
import '../styles/PlantItem.css'
import { useState } from 'react'

// function handleClick(plantName) {
// 	alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }

function PlantItem({ name, category, cover, id, light, water, price }) {
	const [showModal, setShowModal] = useState(false)
	
	return (
        <li key={id} className='lmj-plant-item' onClick={() => setShowModal(!showModal)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
			{showModal && <Modal category={category} price={price} />}
		</li>
    )
}

export default PlantItem