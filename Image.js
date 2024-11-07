import React from 'react';  
import produit from './product';  

const Image = () => {  
    return <img src={produit.image} alt={produit.nom} style={{ width: '200px' }} />;  
};  

export default Image;