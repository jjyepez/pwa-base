import React, { Component } from 'react'

import '../ui/page-content.css'

class PageContentC extends Component {
    render(){
        return (
            <div className = "PageContent">
                { this.props.renderContent && this.props.renderContent() }
            </div>
        )
    }
}

export default PageContentC