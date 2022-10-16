import React from 'react'
import {Container,Card, Row, Col} from 'react-bootstrap';
import Button from '../Button/Button';
import "./Section7.css"

function SectionSeven() {
  return (
    <div className='h-[663px] min-h-50 my-[150px]'>
        <div className="section-bg-img w-full h-full text-center text-white pt-5">
          <h2>Depoimentos</h2>
          <h4>de quem já fez o plano</h4>
          <Container>
            <div>
            <Row>
              <Col>
              <div className='first-col'></div>
              </Col>
              <Col>
              <div className='second-col'></div>
              </Col>
              <Col>
              <div className='third-col'></div>
              </Col>
            </Row>
            </div>
          </Container>
          <div className='text-center'>
          <Button btnText="QUERO EMAGRECER AGORA" />
          </div>
        </div>
    </div>
  )
}

export default SectionSeven