import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import "./Section10.css"

function SectionTen() {
  return (
    <div className='mt-5'>
        <Container>
        <div className='text-center'>   
        <div>
            <span className='' style={{fontSize:"50px", color:"#d35520"}}>
                <strong>BÔNUS ESPECIAL #3</strong></span>
        </div>
        <Row className='align-items-center'>
        <Col>
        <div>
        <div>
          <h3 className='text-right mb-4 e-book-heading'>CALENDÁRIO SAUDÁVEL PARA VOCÊ MAPEAR A SUA ROTINA FITNESS</h3>
        </div>
        <div className='text-right'>
            <h5>Que custa: <span className='span-1-text'> R$19,90</span></h5>
            <h5>Comprando o método sai por: <span className='span-2-text'>R$00,00</span></h5>
        </div>
        </div>
        </Col>
        <Col>
          <div>
            <img src='https://storage.builderall.com//franquias/2/7235434/editor-html/10457056.png' alt='section2' width="100%" height="auto"/>
        </div>
        </Col>
        </Row>
        </div>

        </Container>
    </div>
  )
}

export default SectionTen