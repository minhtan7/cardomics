import React from 'react'
import './style.css'

export const SearchCard = () => {
    return (
        <section id="search-card" className='py-5 my-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col '>
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="./images/blue-eyes-white-dragon.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></div>
                    <div className='col'>
                        <div className="card m-auto" style={{ width: "18rem" }}>
                            <img src="./images/blue-eyes-white-dragon.jpeg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div></div>
                </div>
            </div>
        </section>
    )
}
