import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import BottomToolbar from '../../widgets/containers/BottomToolbar'
import PageContent from '../../widgets/containers/PageContent'

import Page0 from './Page0'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import {
    Page,
    Toolbar,
    ToolbarButton
} from 'react-onsenui'

class HomeC extends Component {
    state = {
        currentPage: 0
    }
    buttonSelect = i => {
        this.currentPageContent( i )
        this.setState({ currentPage: i })
    }
    currentPageContent = i => {
        switch( i ) {
            case 0:
                return <Page0 />
            case 1:
                return <Page1 />
            case 2:
                return <Page2 />
            case 3:
                return <Page3 />
            default:
                return 9999
        }
    }
    render(){
        return (
        <Page 
            renderToolbar = {()=>(
                <Toolbar modifier='noshadow'>
                    <div
                        style = {{
                            minWidth: '56px'
                        }}
                        className = "left"
                    >
                        <ToolbarButton
                            onClick = { this.props.setCurrentContext.bind( this, 'Login' ) }
                            icon = 'md-account'
                        />
                    </div>
                    <div
                        style = {{
                            lineHeight: '50px'
                        }}
                        className = "center"
                    >
                        <input 
                            style = {{
                                border: 0,
                                outline: 'none',
                                borderRadius: '1rem',
                                backgroundColor: '#eceff1',
                                padding: '10px 15px',
                                width: '100%'
                            }}
                            placeholder="Buscar"
                            type="search"
                        />
                    </div>
                    <div
                        style = {{
                            minWidth: '56px'
                        }}
                        className = "right"
                    >
                        <ToolbarButton
                            onClick = { this.props.setCurrentContext.bind( this, 'Settings' ) }
                            icon = 'md-settings'
                        />
                    </div>
                </Toolbar>
            )}
        >
            <BottomToolbar
                active = { 0 }
                className = "BottomToolbar"
                activeColor = '#1e88e5'
                rippleColor = 'rgba(0,0,0,.025)'
                buttonOnSelect = { this.buttonSelect }
                renderButtons = {() => [
                    {
                        icon : 'md-home',
                        label: 'Inicio',
                    },
                    {
                        icon : 'md-fire',
                        label: 'Inicio',
                    },
                    {
                        icon : 'md-favorite',
                        label: 'Android',
                    },
                    {
                        icon : 'md-timer',
                        label: 'Android',
                    }
                ]}
            />
            <PageContent
                initialRoute = {{
                    title: 'Mi Title'
                }}
                renderContent = { () => this.currentPageContent( this.state.currentPage ) }
            />
        </Page>
        )
    }
}

function mapStateToProps( state ){
    return state
}

export default connect( mapStateToProps )( HomeC )