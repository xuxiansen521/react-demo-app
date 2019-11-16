import React ,{ Component } from "react"
import "./header.less"

export default class PublicHeader extends Component{
    render(){
        return(
            <header className="header-container">
                <span className="header-icon icon-catalog"></span>
                <span className="header-title">{this.props.title}</span>
                <span className="header-link icon-jilu"></span>
            </header>
        )
    }
}