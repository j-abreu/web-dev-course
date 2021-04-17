import React from 'react'
import './Main.css'
import Header from './Header'

export default props => {
    return (
        <React.Fragment>
            <Header/>
            <main className="content">
                Content
            </main>
        </React.Fragment>
    )
}