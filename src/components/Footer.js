import { useState, useEffect } from 'react'
import '../styles/Footer.css'

function Footer() {
	const [inputValue, setInputValue] = useState('')

    useEffect(() => {
        return () => {
            console.log("Test alter")
        }
    }, [inputValue])
    
    function handleInputChange(e) {
		setInputValue(e.target.value)
	}

    function handleInputBlur() {
        if (!inputValue.includes('@')) {
            alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse mail valide 😥')
        }
    }

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
                type="text" 
                name = "email" 
                placeholder='Entrez votre mail' 
                value={inputValue} 
                onChange={handleInputChange}
                onBlur={handleInputBlur}
            />
		</footer>
	)
}

export default Footer