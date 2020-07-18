import React, { Component } from 'react'
import CarouselLayout from './CarouselLayout'
import ItemLayout from './ItemLayout'

export default class BodyLayout extends Component {
    render() {
        return (
            <div className="row mt-5 mx-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <h1 className="mt-4">Shop Name</h1>
                            <div className="list-group">
                                <a href="#" className="list-group-item">Category 1</a>
                                <a href="#" className="list-group-item">Category 2</a>
                                <a href="#" className="list-group-item">Category 3</a>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <CarouselLayout />
                            <div className="col-lg-4 col-md-6 mb-4 float-left ">
                                <ItemLayout />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 float-left">
                                <ItemLayout />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 float-left">
                                <ItemLayout />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 float-left">
                                <ItemLayout />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 float-left ">
                                <ItemLayout />
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4 float-left ">
                                <ItemLayout />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
