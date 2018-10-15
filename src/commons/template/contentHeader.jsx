import React from 'react'

const ContentHeader= ({title, small, children}) =>{
    return (
        <section className='content-header'>
            <h1> {title} <small> {small} </small> </h1>
            {children}        
        </section>)
}
export default ContentHeader