import { Container, ItemLetter } from '../../components';
import type { IntroProps } from './Intro.props';

const Intro = ({onClick} : IntroProps) => {
  return (
    <Container
      title='Cómo jugar'
      textButton='!JUGAR¡'
      onClick={onClick}>
        <>
          <p>Adivina la palabra oculta en cinco intentos.</p>
          <p>Cada intento debe ser una palabra válida de 5 letras.</p>
          <p>Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>
          <h3>Ejemplos:</h3>
          <div className='grid'>
            <ItemLetter status='success' letter='g'/>
            <ItemLetter letter='a'/>
            <ItemLetter letter='t'/>
            <ItemLetter letter='o'/>
            <ItemLetter letter='s'/>
          </div>
          <p>La letra <strong>G</strong> está en la palabra y en la posición correcta.</p>
          <h3>Ejemplos:</h3>
          <div className='grid'>
            <ItemLetter letter='v'/>
            <ItemLetter letter='o'/>
            <ItemLetter status='warning' letter='c'/>
            <ItemLetter letter='a'/>
            <ItemLetter letter='l'/>
          </div>
          <p>La letra <strong>C</strong> está en la palabra pero en la posición incorrecta.</p>
          <h3>Ejemplos:</h3>
          <div className='grid'>
            <ItemLetter letter='c'/>
            <ItemLetter letter='a'/>
            <ItemLetter letter='n'/>
            <ItemLetter letter='t'/>
            <ItemLetter status='fail' letter='o'/>
          </div>
          <p>La letra <strong>O</strong> no está en la palabra.</p>
          <p>Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
          <p className='center'>¡Una palabra nueva cada 5 minutos!</p>
        </>
    </Container>
  );
}

export default Intro;