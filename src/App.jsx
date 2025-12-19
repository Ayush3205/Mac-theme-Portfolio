import { Dock, Navbar, Welcome } from "#components";
import { Resume, Safari, Terminal, Resume1, Finder } from "#windows";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Resume1 />
      <Finder />
    </main>
  )
}

export default App;
