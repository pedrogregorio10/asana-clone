import { DynamicIcon } from 'lucide-react/dynamic';

import Header from './componets/Header';
function App() {

  return (
    <>
      <div className="h-screen flex flex-col gap-3.5">
         <div className="bg-neutral-700 text-neutral-300">
            <h1>Minhas tarefas</h1>
           
         </div>
           

         <main className="flex-1 overflow-y-auto bg-neutral-800 text-neutral-300 px-4 py-6 justify-center flex">
              <p>As tarefas aparecem aqui todas</p>
         </main>

         {/*Addion Tasks*/}
          <div className='inline-flex justify-center'>
             <div className='bg-neutral-700 p-2'>
               <button>
                  <DynamicIcon name='settings-2'/>
               </button>
               <button>
                  <DynamicIcon name='chevrons-up-down'/>
               </button>
               <button>
                 <DynamicIcon name='plus'/>
               </button>
             </div>
          </div>

        {/*HEADER SECTION */}
        <Header />

      </div>
    </>
  )
}

export default App
