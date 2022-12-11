import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { slugify } from '../../utils/slugify'
import { slugTranslate } from '../../utils/slugTranslate'
import './style.css'

export const SearchCard = () => {
    const [search, setSearch] = useState("")
    const [card, setCard] = useState(null)
    const [error, setError] = useState("error")
    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }


    const fetchCard = async (search) => {
        try {
            let urlName = `https://yugiohprices.com/api/get_card_prices/${search}`
            let urlTag = `https://yugiohprices.com/api/price_for_print_tag/${search}`
            let data = await (await fetch(urlName)).json()
            if (data.status === "fail") {
                data = await (await fetch(urlTag)).json()
            }
            console.log(data)
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

    // const fetchImage = async (name) => {
    //     try {
    //         let url = `https://yugiohprices.com/api/card_image/${name}`
    //         const data = await fetch(url)
    //         return data.url
    //     } catch (error) {
    //         setError(error.message)
    //     }
    // }
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const data = await fetchCard(search)
            const image = `https://static-7.studiobebop.net/ygo_data/card_images/${slugify(data.name)}.jpg`
            setCard({ ...data, imageUrl: image })
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <section id="search-card" >
            <div className='container px-5'>
                <form onSubmit={handleSubmit} className="mb-5 text-center position-relative">
                    <div class="search-box">
                        <input class="search-txt"
                            type="text" name="" placeholder="Name or Print-Tag"
                            value={search} onChange={handleSearch}
                        />
                        <span class="search-btn">
                            <i class="fas fa-search"></i>
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
                                    <table class="table table-dark table-striped">
                                        <tbody>
                                            {Object.entries(card.price_data.price_data.data.prices)
                                                .map(price => {
                                                    if (price[0] === 'updated_at')
                                                        return;
                                                    return (<tr>
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
            {/* <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-6 '>
                        <div className="card  m-auto position-relative" style={{ height: "500px" }}>
                            <div className='card-bg position-absolute'>
                                <img src="https://static-7.studiobebop.net/ygo_data/card_images/Cyber_Harpie_Lady.jpg" className="card-img-top" alt="..." />
                            </div>
                            <div className="card-body">
                                <p className="card-text">LDS2-EN067</p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div> */}

        </section >
    )
}
