import { useState } from 'react'
import './App.css'
import {evaluate} from 'mathjs'

function App() {
    const [number,setNumber] = useState(``)


    // fonction pour le bouton egalité
    const handleEgale = () => {
        try {
            // Check if the last character is an operator, if so remove it
            const lastChar = number[number.length - 1];
            if (['+', '-', '*', '/'].includes(lastChar)) {
                setNumber(number.slice(0, -1));  // Remove the trailing operator
            } else {
                setNumber(evaluate(number).toString());
            }
        } catch (err) {
            setNumber("Erreur" + err.toString());  // Handle any evaluation errors
        }
    };

    // fonction pour le bouton negatif/positif

    const handleSigneNegatif = () => {
        if(number){
            setNumber((parseFloat(number) * -1).toString());
        }
    };

    // Fonction pour le pourcentage

    const handlePourcentage = () => {
        if (number) {
            setNumber((parseFloat(number) / 100).toString());
        }
    };


    return (

            <div className="calculatrice">

                <form action="">
                    <div className='display'>
                        <input type="text" value={number} readOnly/>
                    </div>
                    <div>
                        <input type="button" value="AC" className= 'delTout' onClick={()=> { setNumber("")}}/>
                        <input type="button" value="+/-" onClick={handleSigneNegatif}/>
                        <input type="button" value="%" onClick={handlePourcentage}/>
                    </div>
                    <div>
                        <input type="button" value="7" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="8" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="9" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="*" onClick={e => setNumber(number + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="4" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="5" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="6" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="+" onClick={e => setNumber(number + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="3" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="2" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="1" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="-" onClick={e => setNumber(number + e.target.value)}/>
                    </div>
                    <div>
                        <input type="button" value="0" onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="." onClick={e => setNumber(number + e.target.value)}/>
                        <input type="button" value="=" className='egale' onClick={handleEgale}/>
                    </div>
                </form>
            </div>
    )

}

export default App
