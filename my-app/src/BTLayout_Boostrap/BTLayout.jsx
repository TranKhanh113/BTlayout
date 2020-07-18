import React, { Component } from 'react'
import Header from './Header'
import BodyLayout from './BodyLayout'
import FooterLayout from './FooterLayout'

export default class BTLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <BodyLayout />
                <FooterLayout />
            </div>
        )
    }
}
