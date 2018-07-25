import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import {
    Page,
    Toolbar,
    ToolbarButton,
    Button
} from 'react-onsenui'

class LoginC extends Component {
    render(){
        return (
            <Page 
            renderToolbar = {()=>(
                <Toolbar modifier='noshadow'>
                    <div className = "center">Login</div>
                    <div className = "right">
                        <ToolbarButton
                            onClick = { this.props.setCurrentContext.bind( this, 'SignUp' ) }
                            icon = 'md-account'
                        />
                    </div>
                </Toolbar>
            )}
        >
            <Button
                onClick = { this.props.setCurrentContext.bind( this, 'Home' ) }
            >Home</Button>
        </Page>
        )
    }
}

export default LoginC