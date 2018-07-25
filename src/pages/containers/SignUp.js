import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import {
    Page,
    Toolbar,
    ToolbarButton
} from 'react-onsenui'

class SignUpC extends Component {
    render(){
        return (
            <Page 
            renderToolbar = {()=>(
                <Toolbar modifier='noshadow'>
                    <div className = "left">
                        <ToolbarButton
                            onClick = { this.props.setCurrentContext.bind( this, 'Login' ) }
                            icon = 'md-arrow-left'
                        />
                    </div>
                    <div className = "center">SignUp</div>
                </Toolbar>
            )}
        >
        </Page>
        )
    }
}

export default SignUpC