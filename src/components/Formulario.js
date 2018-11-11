import React from 'react'
import ListaMoedas from './ListaMoedas';

const Formulario = props => {
    return (
        <form>
            <div className='row justify-content-md-center'>
                <div className='input-group input-group-lg'>
                    <input type='number' className='form-control' />
                </div>
            </div>
            <div className='row form-group'>
                <div className='col-md-6'>
                    <label htmlFor='formSelectDE'>De:</label>
                    <ListaMoedas origem='de' />
                </div>

                <div className='col-md-6'>
                    <label htmlFor='formSelectPARA'>Para:</label>
                    <ListaMoedas origem='para' />
                </div>
            </div>
            <div className='row'>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Converter</button>
            </div>
        </form>
    )
}

export default Formulario