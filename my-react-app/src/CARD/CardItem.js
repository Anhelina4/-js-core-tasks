import React from 'react'

const CardItem = (props) => {
    const { text } = props
    const show = () => console.log(text)
    return (
        <div className="card card-space">
            <div className="card-body">
                <div className="card-text">
                    { text }
                </div>
                <button onClick={show} className="btn btn-primary">Go somewhere</button>
            </div>
        </div>
    )
}

export default CardItem