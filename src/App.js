
import {Header,MainContainer,CreateContainer} from './components';
import {Routes,Route} from 'react-router-dom';
import {AnimatePresence} from 'framer-motion'
function App() {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-screen flex  items-center justify-center bg-primary relative overflow-hidden">
        <div className='absolute inset-0 flex items-center justify-between flex-col w-full'>
          <Header/>
          <section className="h-[90vh] md:h-[85vh] w-[90vw] md:w-[80vw] mb-4  scrollbar-none">
            <Routes>
              <Route path="/*" element={<MainContainer/>}/>
              <Route path="/createItem" element={<CreateContainer/>}/>
            </Routes>
          </section>

        </div>
      </div>
    </AnimatePresence>

  );
}

export default App;
