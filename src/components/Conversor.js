import React from 'react'
import Formulario from './Formulario';
import {connect} from 'react-redux'

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
                        {JSON.stringify(props.conversor)}
                    </div>
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return {
        conversor: state.conversor
    }
}

export default connect(mapStateToProps)(Conversor)