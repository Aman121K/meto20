import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Button/Button'
import "./Section6.css"

function SectionSix() {
  return (
    <div>
        <Container>
            <h1 className='text-center my-[65px]'>
            Além disso, o método também pode ser utilizado para...
            </h1>
            <div>
            <Row>
          <Col>
          <div>
            <img src='https://storage.builderall.com//franquias/2/7235434/editor-html/10443282.jpg' alt='section2' width="100%" height="auto"/>
        </div>
        </Col>
        <Col>
        <div>
          <h5 className='d-flex  align-items-start mb-5'><img className='m-1' src="Assets/success.png" alt="success" /> Tratamento de condições Neurológicas </h5>
          <h5 className='d-flex  align-items-start mb-5'><img className='m-1' src="Assets/success.png" alt="success" />Tratamento para síndrome dos ovários policísticos (SOP)</h5>
          <h5 className='d-flex align-items-start'><img className='m-1'  src="Assets/success.png" alt="success" /> Tratamento da síndrome do supercrescimento bacteriano (SIBO) e do refluxo (GERD)</h5>
        </div>
        </Col>
        </Row>
            </div>
            <div className='text-center'>
        <Button btnText="QUERO EMAGRECER AGORA" />
        </div>
            </Container>
    </div>
  )
}

export default SectionSix