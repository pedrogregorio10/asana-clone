import { DynamicIcon } from 'lucide-react/dynamic';

function Header(){
    return(
       <>
            <header className="bg-neutral-700 flex w-full items-center text-neutral-400 p-2">

                <button className="basis-1/5 flex flex-col justify-center items-center cursor-pointer">
                    <DynamicIcon name='house'/>
                    <p>Pagina Inicial</p>
                </button>
                
                <button className="basis-1/5 flex justify-center flex-col items-center cursor-pointer">
                    <DynamicIcon name='circle-check'/>
                    <p>Minhas tarefas</p>
                </button>

                <button className="basis-1/5 flex flex-col justify-center items-center cursor-pointer">
                    <DynamicIcon name='bell-ring'/>
                    <p>Caixa de entrada</p>
                </button>

                <button className="basis-1/5 flex justify-center flex-col items-center cursor-pointer">
                    <DynamicIcon name='search'/>
                    <p>Buscar</p>
                </button>

                <button className="basis-1/5 flex justify-center flex-col items-center cursor-pointer">
                    <DynamicIcon name='user'/>
                    <p>Conta</p>
                </button>
                
            </header>
      </>
    ) 
}

export default Header