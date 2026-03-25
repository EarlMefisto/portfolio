import { Header } from '../layout/header/Header'
import { Main } from '../layout/sections/main/Main'
// import { MySkills } from '../layout/sections/mySkills/MySkills'
import { Footer } from '../layout/footer/Footer'
import { Connection } from '../layout/sections/connection/Connection'
import { MyProjects } from '../layout/sections/myProjects/MyProjects'
import { lazy, Suspense } from 'react'
import { GoTopBtn } from '../shared/components/goTopBtn/GoTopBtn'

const Particle = lazy(() =>
  import('../shared/components/particle/Particle').then(module => ({
    default: module.Particle,
  }))
)

function App() {
  return (
    <div>
      <Suspense fallback={null}>
        <Particle />
      </Suspense>
      <Header />
      <Main />
      {/* <MySkills /> */}
      <MyProjects />
      <Connection />
      <Footer />
      <GoTopBtn />
    </div>
  )
}

export default App
