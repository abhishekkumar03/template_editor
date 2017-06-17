import React, { Component, PropTypes } from 'react';
class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    }

    render() {
        let {content, header, sidebarSetup, params} = this.props;
        let {id} = params;
        
        let contentData = content && React.cloneElement(content, {});

        let sidebarSetupData = sidebarSetup && React.cloneElement(sidebarSetup, {});

        let headerData = header && React.cloneElement(header, {});
        
        return (
            <div className="container-fluid fade in fade-load" id="main-container">                
                {/* begin #main-content */}
                
                <div id="main-content">
                    
                    {/* begin #header */}
                    {headerData}
                    {/* end #header */}
                        
                    {/* begin #content */}
                    <div id="content">
                        {/* begin .row */}
                        <div className="row">
                            {/* begin .col */}
                            <div className="col-md-4">
                                {sidebarSetupData}
                             </div>
                            {/* end .col */}

                            {/* begin .col */}
                            <div className="col-md-8">
                                {contentData}
                            </div>
                            {/* end .col */}

                        </div>
                        {/* end .row */}

                    </div>
                    {/* end #content */}

                    {/* begin #footer */}
                    <div id="footer"></div>
                    {/* end #footer */}

                </div>
                {/* end #main-content */}

            </div>
        );
    }
}

MainLayout.propTypes = {
    params: PropTypes.object,
    content: PropTypes.element,
    header: PropTypes.element,
    sidebarSetup: PropTypes.element,
};

export default MainLayout;
