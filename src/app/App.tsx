import { Header } from '../layout/header/Header'
import { Main } from '../layout/sections/main/Main'
import { MySkills } from '../layout/sections/mySkills/MySkills'
import { Footer } from '../layout/footer/Footer'
import { Connection } from '../layout/sections/connection/Сonnection'
import { MyProjects } from '../layout/sections/myProjects/MyProjects'

function App() {
  return (
    <div>
      <Header />
      <Main />
      <MySkills />
      <MyProjects/>
      <Connection />
      <Footer />
    </div>
  )
}

export default App
