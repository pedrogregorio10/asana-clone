import { DynamicIcon } from "lucide-react/dynamic";

function AddTask(){
    return(
        <>
              <div className="inline-flex justify-center">
          <div className="bg-neutral-700 p-2 flex gap-1 rounded-2xl">

            <button className="bg-blue-600 pl-2 pr-2 rounded-2xl">
              <DynamicIcon name="settings-2" color="blue" />
            </button>

            <button className="inline-flex bg-neutral-800 pt-2 pb-2 pl-7 pr-7 rounded-2xl gap-1 border-2 border-neutral-600">
              <span className="text-amber-50">List </span>  <DynamicIcon size="15" name="chevrons-up-down" className="text-neutral-300"/>
            </button>

            <button className="bg-red-500 pl-2 pr-2 rounded-2xl">
              <DynamicIcon name="plus" className="text-amber-50"/>
            </button>
          </div>
        </div>
        </>
    )
}

export default AddTask;