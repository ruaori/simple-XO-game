import { useState } from 'react';
import '../../App.css';

const Square = ({ value, handleSquareClick }) => {

    return (
        <>
            <button className='square' onClick={handleSquareClick}>{value}</button>
        </>
    );
}

export default Square;