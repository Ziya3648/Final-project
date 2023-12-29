import React from 'react'
import Footer from '../components/static/Footer/Footer'
import Header from '../components/static/Header/Header'

const Layout = (props) => {
  return (
    <div>
        <Header />
        <main className='container min-vh-100 my-5'>
            {props.children}
        </main>
        <Footer />
    </div>
  )
}

export default Layout