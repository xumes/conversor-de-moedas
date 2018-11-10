import React from 'react'
import Formulario from './Formulario';

const Conversor = props => {
    return (
        <div className='content'>
            <div className='row justify-content-md-center'>
                <div className='card text-center w-50'>
                    <div className='card-header bg-info'>
                        Xumes Corretora
                    </div>
                    <div className='card-body'>
                        <Formulario />
                    </div>
                    <div className='card-footer text-light bg-dark'>
                        0.00
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Conversor