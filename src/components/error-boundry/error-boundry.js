import React, { Component } from "react";
import { connect } from "react-redux";

import { throwError } from "../../actions/actions.js";
import ErrorIndicator from "./error-indicator.js";

class ErrorBoundry extends Component {
     componentDidCatch(err){
          this.props.throwError(err)
     }

     render(){
          let {error} = this.props;

          if(error){
               return <ErrorIndicator />;
          }

          return( this.props.children );
     }
}

const mapStateToProps = ({error}) => {
     return {
          error: error
     };
};


export default connect(mapStateToProps, { throwError })(ErrorBoundry);