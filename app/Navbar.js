'use client'
import styles from './styles.css'

export default function Navbar(){ //Navbar component
    return (
        <div className="navbar">
            <img src="ggez.png" alt="logo" className="nav-logo"/>
            <h1 className="nav-title">Miraculous Needle</h1>
            <a onClick={() =>{
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                })
            }} className="nav-link">More Info</a>
        </div>
    )
}