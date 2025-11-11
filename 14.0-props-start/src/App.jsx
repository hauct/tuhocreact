import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import TabButton from "./components/TabButton";

import { myData } from "../data";

function App() {
  function handleSelect(selectedButton) {
    alert(`Nút bấm được click ${selectedButton}`);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Khái niệm chính trong React</h2>
          <ul>
            <MainContent {...myData[0]}></MainContent>
            <MainContent {...myData[1]}></MainContent>
            <MainContent {...myData[2]}></MainContent>
            <MainContent {...myData[3]}></MainContent>
            {/* <MainContent
              image={myData[0].image}
              title={myData[0].title}
              desc={myData[0].desc}
            ></MainContent>
            <MainContent
              image={myData[1].image}
              title={myData[1].title}
              desc={myData[1].desc}
            ></MainContent>
            <MainContent
              image={myData[2].image}
              title={myData[2].title}
              desc={myData[2].desc}
            ></MainContent>
            <MainContent
              image={myData[3].image}
              title={myData[3].title}
              desc={myData[3].desc}
            ></MainContent> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          {/* prettier-ignore */}
          <menu>
            <TabButton
              label="Components"
              onSelect={() => {handleSelect("components")}}
            ></TabButton>
            <TabButton
              label="JSX"
              onSelect={() => {handleSelect("jsx")}}
            ></TabButton>
            <TabButton
              label="Props"
              onSelect={() => {handleSelect("props")}}
            ></TabButton>
            <TabButton
              label="State"
              onSelect={() => {handleSelect("state")}}
            ></TabButton>
          </menu>
        </section>
      </main>
    </>
  );
}

export default App;
