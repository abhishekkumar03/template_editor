import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Preview extends Component {
    constructor(props){
        super(props);
    }
    render() {
        //let {id} = this.props.params;
       
        return (
            <div>
                Preview Area
            </div>
        );
    }
}

Preview.propTypes = {
    params: PropTypes.object,
    route: PropTypes.object,
};

export default Preview;
