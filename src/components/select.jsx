import React from 'react';

const Selects = () => {

    const handleReloadPage = () => {
        window.location.reload(); // recarrega a página
    };

    return (
        <div className="selects">
            <button id="select" onClick={handleReloadPage}>Inicio</button>
            <button id="select">Lanches</button>
            <button id="select">Hot Dogs</button>
        </div>
    );
};

export default Selects;
