import React, { Component } from 'react'
import "./HorizontalTabs.css"
import Carousel from "../carousel/Carousel"

export default class HorizontalTabs extends Component {
    render() {
        return (
            <div className="main-view">
                <div className="content-main">
                    <Carousel/>
                </div>
                <div className="tabs-main">
                    <div className="carousel-tab">
                        <p>View Images</p>
                    </div>
                    <div className="map-tab">
                        <p>View Map</p>
                    </div>
                    <div className="details-tab">
                        <p>Details</p>
                    </div>
                </div>
            </div>
        )
    }
}
