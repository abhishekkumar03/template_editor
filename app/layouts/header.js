/*
// Header of campaign creation
// ------------------------------
// @author             Abhishek <abhishek@sendinblue.com>
// @description        Header containing title and navigation buttons
// @version            3.0
// ------------------------------
// @last edit          15/11/2016
// @by                 Laure <laure@sendinblue.com>
*/
import React, { Component, PropTypes } from 'react';
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="header">

                {/* begin .row */}
                <div className="row">

                    {/* begin .col */}
                    <div className="col-md-12 clearfix">
						<div className="">
							<div className="pull-right">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-ghost">Save</button>
                                    <button type="button" className="btn btn-ghost dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="caret"></span><span className="sr-only">Actions</span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><a href="javascript:void(0);">Quit</a></li>
                                        <li><a href="javascript:void(0);">Save & Quit</a></li>
                                    </ul>
                                </div>
                                <a className="btn btn-success m-l-xs" className="btn btn-secondary m-l-xs">Preview</a>
                            </div>
							<h2>
								<span className="sib-logo-symbol logo-primary m-r-xs"></span>
								<b>Template Creation</b> › <small>Build Tool</small>
							</h2>
						</div>
                    </div>
                    {/* end .col */}

                </div>
                {/* end .row */}

            </div>
        );
    }
    
}

Header.propTypes = {
    params: PropTypes.object,
    route: PropTypes.object,
    translate: PropTypes.func,
};

export default Header;
