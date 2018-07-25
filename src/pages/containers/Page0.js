import React, { Component } from 'react'
import { connect } from 'react-redux'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import {
    Card,
    ProgressCircular
} from 'react-onsenui'

class PageC extends Component {
    state = {
        n: ~~( Math.random()*100 ),
        data: [],
        loading: true,
        patronData: ['nombre','apellido','avatar','email','estatus']
    }
    async componentWillMount(){
        const fields = this.state.patronData.join(',')
        const url  = `https://noesishosting.com/sw/loremdata/?a=rs&p=${fields}:${this.state.n}`
        const rsp  = await fetch( url )
        const data = await rsp.json()
        this.setState({
            data: data.rs,
            loading: false
        })
        this.props.dispatch({ // las props traen el dispatch al importar connect!
            type: 'SET_RECORDS_FROM_API',
            payload: {
               data: {
                   records: data.rs
               }
            }
        })
    }
    componentDidMount = () => {
        //this.setState({ n: ~~( Math.random()*100 ) })
    }
    render(){
        return (
            this.state.loading ? (
                <ProgressCircular indeterminate />
            ) : (
                <div>
                    { this.state.data.map( ( el, i ) => {
                        return (
                            <Card key = {i} style={{ display: 'flex' }}>
                                <img
                                    alt = "avatar"
                                    style={{
                                        marginRight: '1.5rem',
                                        width: '3rem',
                                        height: '3rem',
                                        borderRadius: '100%'
                                    }}
                                    float="right"
                                    src={el.avatar}
                                />
                                <div>
                                    <small>{ el.nombre }<br/></small>
                                    <small>{ el.apellido }<br/></small>
                                    <small>{ el.email }<br/></small>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            )
        )
    }
}

function mapStateToProps( state ){
    return state
}

export default connect( mapStateToProps )( PageC )