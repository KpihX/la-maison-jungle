import { useState } from "react"

function QuestionForm () {
    const [inputValue, setInputValue] = useState('Posez votre question ici')
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={e => checkValue(e.target.value)}
                
            />
            <button onClick={() => alert(inputValue)}>Alertez moi 🚨</button>
        </div>
    )

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
}

//Formulaire non controlé
/*function QuestionForm () {
    function handleSubmit(e) {
        e.preventDefault()
        alert(e.target['my_input'].value)
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
        </form>
    )
}*/

export default QuestionForm