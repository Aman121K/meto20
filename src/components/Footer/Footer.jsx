import React from 'react'
import { Container} from 'react-bootstrap'
import "./Footer.css"

function Footer() {
  return (
    <div className='footerMain py-5'>
        <Container>
          
        <div className='footerArea'>
           <div className='footerCopy text-center text-white'>
           <p className='mb-0'>Copyright © Método -20kg 2022</p>
           <p className='mb-0'>Contato: suporte@menos20kg.com.br</p>
           </div>
           <div className='footerTxt text-center text-white my-3'>
           Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
           </div>
           <div className='text-white text-center'>
            <span className='d-block'>O  Método -20kg não substitui o parecer médico.</span>
            <span className='d-block'>Sempre consulte um profissional especializado para tratar de assuntos relativos à saúde.</span>
           </div>
        </div> 
       </Container>
    </div>
  )
}

export default Footer
