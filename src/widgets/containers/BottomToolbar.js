import React, { Component } from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import '../ui/bottom-toolbar.css'

import {
    Icon,
    Ripple
} from 'react-onsenui'

class BottomToolbarC extends Component {
    componentDidMount = () => {
        this.selectButton( this.props.active || 0 )
    }
    selectButton = i => {
        const $active = document.querySelector('.BottomToolbar > div.active')
              if( $active ){
                    $active.classList.remove('active')
                    $active.style.color = '#000'
              }
        const $nextActive = document.querySelectorAll('.BottomToolbar > div')[i]
              $nextActive.classList.add('active')
              $nextActive.style.color = this.props.activeColor ? this.props.activeColor : '#000'
    }
    render(){
        const rippleColor = this.props.rippleColor || "rgba(0,0,0,.025)"
        return (
            <div className = "BottomToolbar">
                { ( this.props.renderButtons() ).map( ( el, i ) => (
                    <div
                        className = { i === this.props.active ? 'active' : '' }
                        key = { i }
                        onClick = { () => {
                            this.selectButton( i )
                            this.props.buttonOnSelect( i )
                        }}
                    >
                        <Ripple color = { rippleColor } />
                        <Icon icon = { el.icon } />
                        <label>{ el.label }</label>
                    </div>
                ))}
            </div>
        )
    }
}

export default BottomToolbarC