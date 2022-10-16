import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "./Section9.css"


function SectionNine() {
  return (
    <div className='mt-5'>
        <Container>
        <div className='text-center'>   
        <div>
            <span className='' style={{fontSize:"50px", color:"#d35520"}}>
                <strong>BÔNUS ESPECIAL #2</strong></span>
        </div>
        <Row className='align-items-center'>
          <Col>
          <div>
            <img src='https://storage.builderall.com//franquias/2/7235434/editor-html/10457097.png' alt='section2' width="100%" height="auto"/>
        </div>
        </Col>
        <Col>
        <div>
        <div>
          <h3 className='text-left mb-4 e-book-heading'>E-BOOK ILUSTRADO COM 10 RECEITAS CETOGÊNICAS FÁCEIS DE FAZER</h3>
        </div>
        <div className='text-left'>
            <h5>Que custa: <span className='span-1-text'>R$27,90</span></h5>
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

export default SectionNine