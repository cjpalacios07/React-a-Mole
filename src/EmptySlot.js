import { useEffect } from "react"
import moleHill from './images/molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let timeTilShow = Math.ceil(Math.random() * 4000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, timeTilShow)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} 
             src={moleHill}
             alt="molehill image" />
        </div>
    )
}

export default EmptySlot