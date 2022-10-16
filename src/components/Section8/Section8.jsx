import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "./Section8.css"

function SectionEight() {
  return (
    <div>
        <Container>
        <div className='text-center'>
        <div>
        <h6>COMPRANDO AGORA VOCÊ GARANTE...</h6>
        </div>
        <div>
            <span className='' style={{fontSize:"50px", color:"#d35520"}}>
                <strong>BÔNUS ESPECIAL #1</strong></span>
        </div>
        <Row className='align-items-center'>
          <Col>
          <div>
            <img src='https://storage.builderall.com//franquias/2/7235434/editor-html/10525757.png' alt='section2' width="100%" height="auto"/>
        </div>
        </Col>
        <Col>
        <div>
        <div>
          <h3 className='text-left mb-4 e-book-heading'>E-BOOK ILUSTRADO COM MINDSET PARA QUEM NÃO CONSEGUE EMAGRECER
</h3>
        </div>
        <div className='text-left'>
            <h5>Que custa: <span className='span-1-text'>R$49,90</span></h5>
            <h5>Comprando o método sai por: <span className='span-2-text'>R$00,00</span></h5>
        </div>
        </div>
        </Col>
        </Row>
        </div>

        </Container>
    </div>
  )
}

export default SectionEight