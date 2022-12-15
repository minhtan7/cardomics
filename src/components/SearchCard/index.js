import React, { useState } from 'react'
import { toast } from 'react-toastify'
import apiService from '../../apiService'
import { slugify } from '../../utils/slugify'
import { slugTranslate } from '../../utils/slugTranslate'
import './style.css'

export const SearchCard = () => {
    const [search, setSearch] = useState("")
    const [card, setCard] = useState(null)
    const [error, setError] = useState("error")

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }


    const fetchCard = async (search) => {
        try {
            let urlName = `/get_card_prices/${search}`
            let urlTag = `/price_for_print_tag/${search}`
            let data = await apiService.get(urlName)
            console.log(data)
            if (data.status === "fail") {
                data = await apiService.get(urlTag)
                console.log(data)
            }
            if (data.status === "fail") {
                toast.warning("No card or print-tag was found")
                return
            }
            if (Array.isArray(data.data)) {
                data.data = data.data.find(card => card.name.toLowerCase() === search.toLowerCase())
                if (data.data) {
                    return data.data[0]
                }
                return
            } else {
                return data.data
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const data = await fetchCard(search)
            if (data) {
                const image = `https://static-7.studiobebop.net/ygo_data/card_images/${slugify(data.name)}.jpg`
                setCard({ ...data, imageUrl: image })
            } else {
                toast.warning("No card or print-tag was found")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    return (
        <section id="search-card" >
            <div className='container px-5'>
                <form onSubmit={handleSubmit} className="mb-5 text-center position-relative">
                    <div className="search-box">
                        <input className="search-txt"
                            type="text" name="" placeholder="Name or Print-Tag"
                            value={search} onChange={handleSearch}
                        />
                        <span className="search-btn">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                </form>
                <div className='row justify-content-center'>
                    {card && (
                        <>
                            <div className='col-3'>
                                <div className=''>
                                    <img src={card.imageUrl ? card.imageUrl : "https://static-7.studiobebop.net/ygo_data/card_images/Crossrose_Dragon.jpg"} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className='col-3 bg-primary-cus'>
                                <div className="card  m-auto position-relative" >

                                    <div className="card-body">
                                        <div >
                                            <h2 className='card-name'>{card.name}</h2>
                                            <p className="card-text">{card.price_data.print_tag}</p>
                                            <p className="card-text">Rarity: {card.price_data.rarity}</p>
                                            <p className="card-text">Family: {card.family}</p>
                                            <p className="card-text">Type: {card.card_type}</p>
                                            <p className="card-text">{card.type}</p>
                                            <p className="card-text">Set Name: {card.price_data.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-3 '>
                                <div className="card-table">
                                    <table className="table table-dark table-striped">
                                        <tbody>
                                            {card.price_data.price_data.status === "fail" ? <h3 className='p-3'>No prices data found</h3> : Object.entries(card.price_data.price_data.data.prices)
                                                .map((price, idx) => {
                                                    if (price[0] === 'updated_at')
                                                        return null;
                                                    return (<tr key={idx}>
                                                        <th>{slugTranslate({ target: "price_tag", slug: price[0] })}</th>
                                                        <td>{price[1].toFixed(2)}</td>
                                                    </tr>
                                                    )
                                                }
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </>
                    )}
                </div>
            </div>

        </section >
    )
}
