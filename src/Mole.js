import { useEffect } from 'react'
import mole from './images/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let timeTilShow = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, timeTilShow)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
            src={mole} 
            onClick={props.handleClick} 
            alt="mole image"/>
        </div>
    )
}

export default Mole