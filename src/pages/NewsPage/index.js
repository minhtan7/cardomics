import React, { useEffect, useState } from 'react'
import { Carousel, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import { toast } from 'react-toastify'
import apiService from '../../apiService'
import "./style.css"
import { Chart, registerables } from 'chart.js';
import { slugify } from '../../utils/slugify'
import { useLocation } from 'react-router-dom'
Chart.register(...registerables);

export const NewsPage = () => {
    const [showEssay, setShowEssay] = useState(false)
    const [showDeck, setShowDeck] = useState(false)
    const [data, setData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    //take the hash from the url using useLocation from react-router-dom
    const { hash } = useLocation();

    useEffect(() => {
        //get element with id hash
        const el = document.getElementById(hash);
        if (el) {
            //scroll to the element whose id is hash
            el.scrollIntoView();
        }
        // if hash change in the next render, run this useEffect
    }, [hash]);

    //set showModal to false => not showing the modal
    const handleClose = () => setShowModal(false);

    //show Modal, transform data from that single card to 
    //the provided structure for chart rendering purpose
    const handleShow = (card) => {
        setShowModal(true)
        const allowFilter = [
            "shift_365",
            "shift_180",
            "shift_90",
            "shift_30",
            "shift_21",
            "shift_7",
            "shift_3",
            "shift",
        ]
        //loop through allowFilter array to get the return array called data
        //that contain percentage match with shifting period in allowFilter array in order.
        const data = allowFilter.map(e => card.numbers[0]?.price_data.data.prices[e] * 100)
        const state = {
            labels: [
                "365 Days",
                "180 Days",
                "90 Days",
                "30 Days",
                "21 Days",
                "7 Days",
                "3 Days",
                "24 Hours",
            ],
            datasets: [
                {
                    id: 1,
                    label: "Price shift",
                    data,
                }
            ],
        }

        setModalData({ ...card, state })
    };

    //show deck:
    //- fetch data of potential card set
    //- show deck session, close essay session when run the function
    //- click twice to close deck
    const handleDeck = async () => {
        try {
            const data = await apiService.get("/set_data/LEGENDARY%20DUELISTS:%20DUELS%20FROM%20THE%20DEEP")
            const cards = data.data.cards.map((card) => {
                return { ...card, imageUrl: `https://static-7.studiobebop.net/ygo_data/card_images/${slugify(card.name)}.jpg` }
            })
            setData(cards)

            setShowDeck(!showDeck)
            setShowEssay(false)
        } catch (error) {
            toast.warning(error.message)
        }
    }
    //show essay session, close deck session when click
    //click twice to close essay
    const handleEssay = () => {
        setShowEssay(!showEssay)
        setShowDeck(false)
    }

    return (
        <section id="news" >
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block vh-100 vw-100"
                        src="https://get.pxhere.com/photo/landscape-tree-nature-forest-grass-mountain-cloud-sky-field-meadow-prairie-sunlight-hill-flower-valley-mountain-range-green-pasture-agriculture-plain-grassland-plantation-plateau-habitat-ecosystem-rural-area-natural-environment-geographical-feature-grass-family-woody-plant-mountainous-landforms-5953.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-bg">
                        <h3>How sustainable are Trading Card Games?</h3>
                        <p>Konami has estimated that there have been 35 billion YuGiOh cards sold worldwide. If we take the estimate of one tree equating to 25,000 cards; Konami has felled 1.5 million trees in its endeavours. That’s a lot of trees, conceptually. However, consider the fact that there are 700 million trees in Ireland alone. There are 3 trillion trees worldwide, approximately 420 trees per person. But this number is rapidly falling due to deforestation...</p>
                        <a href='#essay'>
                            <Button className='btn-primary' onClick={handleEssay}>Read more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 vh-100"
                        src="/images/carousel-1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-bg">
                        <h3>Prediction of cards that might increase in price</h3>
                        <p>If you wanna know which cards are trending now in the other servers, here’s a list of them. They could combo with the new cards that are coming out in the future and make powerful decks. It will be a good idea to buy these cards now while they are cheap and wait for the price to go up!</p>
                        <a href='#deck'>
                            <Button className='' onClick={handleDeck}>Read more</Button>
                        </a>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            {showEssay && (
                <Container id="essay">
                    <Row>
                        <h1>How sustainable are Trading Card Games?</h1>
                        <p>Konami has estimated that there have been 35 billion YuGiOh cards sold worldwide. If we take the estimate of one tree equating to 25,000 cards; Konami has felled 1.5 million trees in its endeavours. That’s a lot of trees, conceptually. However, consider the fact that there are 700 million trees in Ireland alone. There are 3 trillion trees worldwide, approximately 420 trees per person. But this number is rapidly falling due to deforestation. Is it morally okay to partake in trading card games? The key factor in answering this question is waste. What happens to the cards when they are sold? As a whole the cards are generally constantly reused. Cards such as “Stygian Dirge” were seen as a useless card just 12 months ago, they sat in a pile in the back of dark closets, 12 months ago you would have said the card is worthless. Then a change in format led to the sudden explosion of the card, it was back in the mainframe. Its value spiked by a factor of 30, literally. There was a clamour to look through the back closest cards, the forgotten souls waiting to be remembered. The card had a new lease of life. Old cards don’t get thrown away, they sit silently waiting to be picked again and sometimes they are, simple as that. The trees that were used to make those cards are still being used to this day essentially. Trading card games have an inherent reusability, even if you have no interest in the game you are unlikely to throw your collection away, at the very least you give it to a cousin or a brother, who can bring new life to the cards. Yet there is still a glaring problem in the YuGiOh marketplace.</p>
                        <p>As a child growing up everyone of a certain age has memories of being given trading cards by one’s parent, in order to keep you quiet for a few hours. For different people and countries the game was different. In Ireland the game that dominated the playground was of course YuGiOh. It wasn’t just a card game, and you probably have some fond memories of your first-time trading for the card that you really wanted. Fond memories if you were on the right side of history, there will always be that deep seeded regret at the back of your mind as you let a card you liked go in order to get your hands on a one card Exodia that had 1 billion attack points. It didn’t matter if this card was the wrong colour and also written in broken English, on the playground it gave you a competitive edge; of course, that card is worthless now and the first edition “Tri-Horned Dragon” that you traded for it is now worth 200 USD, but you don’t let that affect you. You still buy and sell cards in good faith. In person trading still happens, and it’s still a big part of the game, it’s a trading game after all. But the online marketplace is the main go to way that people acquire cards. It’s safer to buy with currency, less likely to be ripped off or trade something you should have kept onto if you just buy cards and never sell as a consumer. But what does all of this mean for the environment? Well, if you are in Ireland and you buy a card from Spain, the card has to travel a long distance. Then if you decide to sell this card in the USA because of the advantages of arbitrage, then you would be sending it to the USA, where from the USA it will be driven potentially across the continent sized country to its final destination. That’s a lot of travel for one card. However if you are buying from Spain to make profit you will most likely buy multiple cards at once, if you send them to the USA you would be sending 100s of cards at once and then sending them out to individual buyers. As trading cards are under 2 grams each they don’t necessarily cause that much CO2 emissions. It is difficult to calculate the overall affect that the market has on CO2 emissions, as they are sent using standard size envelopes. They end up going out with the regular postage, so the exact same airplane travel would occur regardless if the market existed or not, and the added weight of the less than two gram cards adds essentially nothing to the weight of the plane (which affects the amount of jet fuel needed to operate the plane and therefore affects CO2 emissions). The fact of the matter trading card game markets are a splash in the water compared to behemoth consumer good market places such as amazon. Regardless you should always give back to the ecology of the Earth, take responsibility for your actions. Below you can calculate the yearly CO2 emissions caused by your business operations, and it will give you a suggested amount of trees to plant in order to keep things balanced.</p>
                        <p>Does this mean that Trading Card Games are currently neutral for the environment as it currently stands? The answer to that is sadly not. However, there is a solution to the problem that will actually save you, the seller, money and it improves the environmental damage massively. So, what is the major environmental issue with selling cards on the secondary market? The packaging of the cards often involves using a “toploader,” which is essentially a piece of hard plastic that you put the cards into. Traditional toploaders can only fit up to 3 cards in it at any one time. They are awful for the environment. They aren’t very reusable. Once a consumer gets a toploader they probably won’t be selling the card again online, so they will not need the toploader. If they just throw it out and it goes to a landfill, it isn’t going to biodegrade for thousands of years. The solution is of course to use the product “Shipping Shields”. At just 8 cent a Shipping Shield it provides protection for your cards in the post, for 1/4th of the price of toploader. It’s sturdier and offers better protection than semi rigid toploaders, it can hold up to 10 cards. It is made from 100% recyclable material, and it is 100% recyclable. Because it offers great protection for your cards and is significantly cheaper and better for the environment it is the clear solution to truly make Trading Card Games 100% sustainable in the long run.</p>
                    </Row>
                </Container>
            )}
            {showDeck && data &&
                <Container id="deck">
                    <Row>
                        {data.map((card, index) => (
                            <Col md={3} className='mb-4 single-card position-relative' key={index}>
                                <div className='single-card position-relative' onClick={() => handleShow(card)}>
                                    <div className='position-relative w-100 h-100'>
                                        <img src={card.imageUrl} alt={card.name} />
                                    </div>
                                    <div className='single-card-shadow'>
                                        <h3>{card.name}</h3>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            }
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Body>

                    <div className='text-center'>
                        <h3>{modalData?.name}</h3>
                        {/* use Line component from react chart js to draw chart */}
                        <Line
                            data={modalData?.state}
                        />
                        <small><b>Price shift Line chart (%)</b></small>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    )
}
