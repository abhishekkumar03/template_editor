import React, { Component, PropTypes } from 'react';
class SidebarSetup extends Component {
    constructor(props){
        super(props);
    }
    render() {
        let {id} = this.props.params;
       
        return (
            <ul className="progress-vertical">
                <li className="success">
                    <a href="javascript:void(0)"><span>› </span>Siderbar Tools</a>
                </li>
            </ul>
        );
    }
}

SidebarSetup.propTypes = {
    params: PropTypes.object,
    route: PropTypes.object,
};

export default SidebarSetup;
