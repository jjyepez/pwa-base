import React, { Component } from 'react'

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
    Toolbar
} from 'react-onsenui'

class HomeC extends Component {
    state = {
        currentPage: 0
    }
    buttonSelect = i => {
        this.currentPageContent( i )
        this.setState({currentPage:i})
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
                    <div className = "center">App</div>
                </Toolbar>
            )}
        >
            <BottomToolbar
                active = { 0 }
                className = "BottomToolbar"
                activeColor = 'blue'
                rippleColor = 'rgba(255,0,0,.05)'
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
                        icon : 'md-android',
                        label: 'Android',
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

export default HomeC