import React, { Component } from "react";
import ListaMoedas from "./ListaMoedas";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { converteMoedas } from "./../actions";

class Formulario extends Component {
  constructor(props){
    super(props)

    this.state = {
      converte: {}
    }
  }

  onValueChange(e){
    console.log(e.target.value)
  }

  onValueDeChange(e){
    console.log("DE:", e.target.value)
  }

  onValueParaChange(e){
    console.log("PARA:", e.target.value)
  }

  render() {
    return (
      <form>
        <div className="row justify-content-md-center">
          <div className="input-group input-group-lg">
            <input onChange={(e) => this.onValueChange(e)} type="number" className="form-control" />
          </div>
        </div>
        <div className="row form-group">
          <div className="col-md-6">
            <label htmlFor="formSelectDE">De:</label>
            <ListaMoedas origem='de' onValueChange={this.onValueDeChange}/>
          </div>

          <div className="col-md-6">
            <label htmlFor="formSelectPARA">Para:</label>
            <ListaMoedas origem='para' onValueChange={this.onValueParaChange}/>
          </div>
        </div>
        <div className="row">
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Converter
          </button>
        </div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ converteMoedas }, dispatch);
}

export default connect(
  null,
  mapDispatchToProps
)(Formulario);
