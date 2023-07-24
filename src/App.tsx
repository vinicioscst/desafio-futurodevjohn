import { Contact } from './components/Contact'
import { Container } from './components/Container'
import { Differentials } from './components/Differentials'
import { Header } from './components/Header'
import { HeaderBanner } from './components/HeaderBanner'
import { OurFamily } from './components/OurFamily'
import { Plans } from './components/Plans'
import { TextSlider } from './components/TextSlider'
import { ToastContainer } from 'react-toastify';
import '../node_modules/react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <div className='w-full h-max bg-cover bg-right-top bg-no-repeat md:bg-[url("/header-bg.svg")]'>
        <div>
          <Container>
            <Header/>
          </Container>
        </div>

        <Container>
          <HeaderBanner />
        </Container>
      </div>

      <section className='overflow-x-hidden'>
        <TextSlider />
      </section>

      <main>
        <section>
          <Container>
            <Differentials />
          </Container>
        </section>

        <section className='bg-eerie-gray'>
          <Container>
            <Plans />
          </Container>
        </section>

        <section className='w-full h-max bg-cover bg-left-top bg-no-repeat md:bg-[url("/bg-gym.svg")]'>
          <Container>
            <OurFamily />
          </Container>
        </section>

        <section id='contact' className='bg-[#1E1E1E]'>
          <Container>
            <Contact />
          </Container>
        </section>
      </main>
      <ToastContainer theme='dark'/>
    </>
  )
}

export default App
