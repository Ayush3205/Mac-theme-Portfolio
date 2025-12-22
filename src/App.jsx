import { Dock, Home, Navbar, Welcome } from "#components";
import { Resume, Safari, Terminal, Resume1, Finder, Text, Image, Contact, Photos } from "#windows";
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
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App;
