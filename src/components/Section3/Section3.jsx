import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function SectionThree() {
  return (
    <div className='text-center my-[65px]'>
        <Container>
        <Row className='align-items-center'>
                <Col>
                    <div>
                        <h2 className='text-right mb-3'>+ Saúde</h2>
                    </div>
                    <div>
                        <h5>O Método -20kg além de estimular a perda de peso e emagrecimento, ajuda a controlar os níveis triglicerídeos, açúcar no sangue, pressão arterial, aumenta o colesterol bom, reduz os sintomas das síndrome metabólica e ajuda muito em transtornos neurológicos.</h5>
                    </div>
                </Col>
                <Col>
                    <img src="https://storage.builderall.com//franquias/2/7235434/editor-html/10429252.png" alt="section2"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default SectionThree