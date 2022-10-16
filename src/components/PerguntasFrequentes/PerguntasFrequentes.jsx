import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../Button/Button';
import "./PerguntasFrequentes.css"

function PerguntasFrequentes() {
  return (
    <div className='perguntasFrequenteSec position-relative py-5'>
        <Container>
        <div className='perguntasFrequenteInner'>
          <div className='perguntasHeading ml-5 mb-4'>
             <h2 className='ml-5 pl-5'>Perguntas frequentes</h2>
          </div>
          <div className='redLineBottom position-relative'></div>
        <Row className='mt-5'>
            <Col md={4}>
              <div className='perguntasFrequentesLeft'>
                  
                  <div className='perguntasImg position-relative'>
                    <img src="Assets/perguntasFreq.jpg" alt="perguntasFreq" />
                    </div>
              </div>
           </Col>
           <Col md={8}>
              <div className='perguntasFrequentesRight pl-5'>
                  <div className='frequentesItem mb-5'>
                      <h5 className='mb-4'>O que é uma dieta cetogênica?</h5>
                      <p>A dieta cetogênica é um plano alimentar que de forma resumida elimina a maioria dos alimentos  ricos em carboidratos, como pão e arroz, e aumenta o consumo de alimentos ricos em gorduras boas, além de ser importante manter uma boa quantidade de proteínas na alimentação. </p>
                  </div>
                  <div className='frequentesItem mb-5'>
                      <h5 className='mb-4'>O que consiste a cetose?</h5>
                      <p>A cetose é um processo natural do organismo que tem como objetivo a produção de energia a partir de gordura. Isso ocorre quando o corpo elimina quase completamente o consumo de carboidrato. </p>
                  </div>
                  <div className='frequentesItem mb-5'>
                      <h5 className='mb-4'>O método é seguro?</h5>
                      <p>Na maioria dos casos sim, mas é muito importante que quem esteja passando por tratamento de diabetes, pressão alta, ou estão amamentando, consulte um médico antes de iniciar com a dieta cetogênica. </p>
                  </div>
                  <div className='frequentesItem mb-5'>
                      <h5 className='mb-4'>Leva quanto tempo até o corpo parar de desejar carboidratos?</h5>
                      <p>Geralmente leva de 1 a 4 semanas antes de reprogramar o seu corpo e liberar o seu organismo do desejo de consumir carboidratos.  </p>
                  </div>
                  <div className='frequentesItem mb-5'>
                      <h5 className='mb-4'>Se eu comer muita gordura, isso não me fará engordar?</h5>
                      <p>Esse mito existe há muito tempo, porque parece fazer sentido. No entanto, cientificamente, comer gordura (boa) não engorda (dentro do recomendado). O açúcar e os carboidratos é que são os grandes vilões.</p>
                  </div>
                 
              </div>
           </Col>
        </Row>
        <div className='text-center'>
                    <Button btnText="QUERO FAZER PARTE DO MÉTODO" />
                    </div>
        </div>
           
       </Container>
    </div>
  )
}

export default PerguntasFrequentes
