import React from 'react'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import data from '../data'
import Work from './Work'

const Landing = () => {
  return (
    <div className="App">
        <div className="fullpage">
            <Header/>
            <Home/>
        </div>
        <div>
          <Work projects={data.projects}/>
          <Contact/>
        </div>
    </div>
  )
}

export default Landing