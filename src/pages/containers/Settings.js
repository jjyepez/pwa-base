import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import {
    Page,
    Toolbar,
    ToolbarButton
} from 'react-onsenui'

class SettingsC extends Component {
    render(){
        return (
            <Page 
            renderToolbar = {()=>(
                <Toolbar modifier='noshadow'>
                    <div className = "center">Settings</div>
                    <div className = "left">
                        <ToolbarButton
                            onClick = { this.props.setCurrentContext.bind( this, 'Home' ) }
                            icon = 'md-arrow-left'
                        />
                    </div>
                </Toolbar>
            )}
        >
        </Page>
        )
    }
}

export default SettingsC