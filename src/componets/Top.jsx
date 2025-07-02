import { DynamicIcon } from "lucide-react/dynamic";

function Top(){
    return(
        <>
            <div className="bg-neutral-700 text-neutral-300 flex justify-between items-center px-4 py-2">
                <h1 className="text-3xl p-2">Minhas tarefas</h1>
                <DynamicIcon name="ellipsis" className=""/>
            </div>
        </>
    )
}

export default Top;
