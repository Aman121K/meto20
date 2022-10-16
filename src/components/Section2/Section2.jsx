import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'

function SectionTwo() {
  return (
    <div className='text-center my-[65px]'>
      <h3 className='text-[30px] my-[75px] text-[#df0707] font-extrabold'>Benefícios do programa</h3>
      <Container>
        <div>
          
        </div>
        <Row className='align-items-center'>
          <Col>
          <div>
            <img src='https://storage.builderall.com//franquias/2/7235434/editor-html/10428258.png' alt='section2' width="100%" height="auto"/>
        </div>
        </Col>
        <Col>
        <div>
          <h3 className='text-left mb-5'>Emagrecimento</h3>
        </div>
        <div>
          <h5>Com o Método -20kg você irá emagrecer de maneira rápida e eficiente. Ao cortar o carboidrato e aumentar o consumo de gordura, o seu organismo entrará em cetose. Condição natural, onde o corpo irá queimar gordura para obter energia. </h5>
        </div>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SectionTwo