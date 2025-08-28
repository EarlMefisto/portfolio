import { Header } from "../layout/header/Header";
import { Main } from "../layout/sections/main/Main";
import { MySkills } from "../layout/sections/mySkills/MySkills";
import { MyWorks } from "../layout/sections/myWorks/MyWorks";
import { Footer } from "../layout/footer/Footer";
import { Connection } from "../layout/sections/connection/Сonnection";


function App() {
  return (
    <div>
        <Header />
        <Main />
        <MySkills />
        <MyWorks />
        <Connection />
        <Footer />
    </div>
  );
}

export default App;
