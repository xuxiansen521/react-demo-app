import React,{ Component } from "react";

import PublicHeader from "../../components/header"

class Home extends Component{
    render(){
        return (
            <main className="home-container">
                <PublicHeader title="首页"></PublicHeader>
            </main>
        )
    }
}

export default Home