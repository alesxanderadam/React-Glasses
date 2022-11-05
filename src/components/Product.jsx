import React from 'react'

export default function Product(props) {
    const { cl, item } = props
    return (
        <div className="card">
            <img className="card-img-top" src={item.url} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-text">{item.price}</p>
                <button onClick={() => cl(item)} className='btn btn-danger'>Xem thử</button>
            </div>
        </div>
    )
}
