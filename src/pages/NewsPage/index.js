import React, { useEffect, useState } from 'react'
import { Carousel, Button, Container, Row, Col, Modal } from 'react-bootstrap'
import { Line } from 'react-chartjs-2'
import { toast } from 'react-toastify'
import apiService from '../../apiService'
import "./style.css"
import { Chart, registerables } from 'chart.js';
import { slugify } from '../../utils/slugify'
Chart.register(...registerables);

export const NewsPage = () => {
    const [showEssay, setShowEssay] = useState(false)
    const [showDeck, setShowDeck] = useState(false)
    const [data, setData] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const [modalData, setModalData] = useState(null)

    const handleClose = () => setShowModal(false);
    const handleShow = (card) => {
        setShowModal(true)
        const allowFilter = [
            "shift", "shift_3", "shift_7", "shift_21",
            "shift_30", "shift_90", "shift_180", "shift_365"]
        const data = allowFilter.map(e => card.numbers[0]?.price_data.data.prices[e] * 100)
        const state = {
            labels: [
                " 24 Hours",
                " 3 Days",
                " 7 Days",
                " 21 Days",
                " 30 Days",
                " 90 Days",
                " 180 Days",
                " 365 Days"],
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
            console.log(error)
            toast.warning(error.message)
        }
    }
    const hanndleEssay = () => {
        setShowEssay(!showEssay)
        setShowDeck(false)
    }

    return (
        <section id="news" >
            <Carousel className='mb-5'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/carousel-1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-bg">
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button className='btn-primary' onClick={hanndleEssay}>Read more</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/carousel-1.jpeg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="caption-bg">
                        <h3>What is Lorem Ipsum?</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <Button className='' onClick={handleDeck}>Read more</Button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            {showEssay && (
                <Container>
                    <Row>
                        <h1>What is Lorem Ipsum?</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Row>
                </Container>
            )}
            {showDeck && data &&
                <Container>
                    <Row>
                        {data.map((card, index) => (
                            <Col md={3} className='mb-4 single-card position-relative' key={index}>
                                <div className='single-card position-relative' onClick={() => handleShow(card)}>
                                    <div className='position-relative w-100 h-100'>
                                        <img src={card.imageUrl} alt={card.name} />
                                    </div>
                                    <div className='single-card-shadow'>
                                        <h3>{card.name}</h3>
                                        <p>something  here</p>
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
                        <Line
                            data={modalData?.state}
                        // options={{
                        //     legend: {
                        //         display: true,
                        //         position: 'right'
                        //     }

                        // }}
                        />
                        <small><b>Price shift Line chart (%)</b></small>
                    </div>
                </Modal.Body>
            </Modal>
        </section>
    )
}
