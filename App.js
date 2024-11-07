import React from 'react';  
import Name from './Name';  
import Price from './Price';  
import Description from './Description';  
import Image from './Image';  
import { Card } from 'react-bootstrap';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const App = () => {  
    const prenom = "Mamadou"; // Remplacez par votre prénom ou laissez vide  

    return (  
        <div className="App">  
            <Card style={{ width: '25rem' }}>  
                <Card.Body>  
                    <Name />  
                    <Price />  
                    <Description />  
                    <Image />  
                </Card.Body>  
            </Card>  
            <div>  
                <h3>{prenom ? `Bonjour, ${prenom}` : "Bonjour !"}</h3>  
                {prenom && <Image />} {/* Affiche l'image si le prénom est fourni */}  
            </div>  
        </div>  
    );  
};  

export default App;