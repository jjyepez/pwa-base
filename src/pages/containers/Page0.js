import React, { Component } from 'react'

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
                    { this.state.data.map( ( el,i ) => {
                        return (
                            <Card key = {i}>
                                { this.state.patronData.map( field => {
                                    return (
                                        <div>
                                            { el[ field ] }
                                        </div>
                                    )
                                }) }
                            </Card>
                        )
                    })}
                </div>
            )
        )
    }
}

export default PageC