import React, { Component } from 'react'
import "./roomSection.css"
export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTabFilter: 0 };
      }
    
    onTabFilterClick =(e, id) => {
        this.setState({activeTabFilter: id})
    }
    render() {
        const tablist = [
            {   id:0,
                name: "Room Only",
                description: "two rooms available from $20"
            },
            {   id:1,
                name: "Bed & Breakfast",
                description: "two rooms available from $1120"
            },
            {
                id:2,
                name: "Half Board",
                description: "two rooms available from $990"
            }
        ]
        console.log("data", this.state.activeTabFilter)
        return (
            <div className="main-layout">
                <div className="tab-section">
                    {tablist.map(itm=>
                        <div className={this.state.activeTabFilter === itm.id ? "tab-card-selected tab-card" : "tab-card"} key={itm.id} onClick={(e) => this.onTabFilterClick(e,itm.id)}>
                            <div className="tab-card-container">
                                <span><b>{itm.name}</b></span> 
                                <span className="tab-description-data">{itm.description}</span> 
                            </div>
                        </div>
                    )}
                </div>                    
                <div className="cards-section">
                    <div className="card">
                        <div className="container">
                            <h4><b>John Doe</b></h4> 
                            <p>Architect & Engineer</p> 
                        </div>
                    </div>
                    <div className="card">
                        <div className="container">
                            <h4><b>John Doe</b></h4> 
                            <p>Architect & Engineer</p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
