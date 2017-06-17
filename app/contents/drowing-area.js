import React, { Component } from 'react';
import PropTypes from 'prop-types';
class DrowingArea extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //let {id} = this.props.params;
       
        return (
            <div>
                Drowing Area
            </div>
        );
    }
}

DrowingArea.propTypes = {
    params: PropTypes.object,
    route: PropTypes.object,
};

export default DrowingArea;
