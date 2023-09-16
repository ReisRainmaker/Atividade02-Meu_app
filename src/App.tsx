import './App.css'
import ButtonFatec from './components/ButtonFatec'
import ImputFatec from './components/InputFatec'

function App() {

  return (
    <>
      <p className='texto'>
        Entre em contato
      </p>
      <p>
      _____________________________________      </p>
      <div className='container'>
      <ImputFatec placeholder='Nome' />
      <ImputFatec placeholder='E-mail' />
      <ImputFatec placeholder='Telefone' />
      </div>
      <p>
      _____________________________________
      </p>
      <ButtonFatec type='button' label='Fatec: Envie sua mensagem' />
    </>
  )
}

export default App
