import { DynamicIcon } from "lucide-react/dynamic";
import Header from "./componets/Header";
import Top from "./componets/Top";
import AddTask from "./componets/AddTask"
import Main from "./componets/Main"

function App() {
  return (
    <>
      <div className="h-screen flex flex-col gap-3.5">
        <Top/>

        <Main/>

        {/*Addion Tasks*/}
      <AddTask/>

        {/*HEADER SECTION */}
        <Header />
      </div>
    </>
  );
}

export default App;
