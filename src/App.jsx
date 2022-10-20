import styles from "./App.module.css";
import {
  createSignal,
  createEffect,
  createMemo,
  onMount,
  onCleanup,
} from "solid-js";
// components
import { AppButton } from "./components/AppButton";
// componetns with control flow
import { AppFor } from "./components/AppFor";
import { AppShow } from "./components/AppShow";
import { AppSwitch } from "./components/AppSwitch";
import { AppDymanic } from "./components/AppDynamic";
import { AppErrorBoundary } from "./components/AppErrorBoundary";
import { AppPortal } from "./components/AppPortal";

//helpers
import { portalDictionary } from "./helpers/portal";

// signal (get(), set())
const [count, setCount] = createSignal(0);
const increment = () => {
  setCount(count() + 1);
};

// effect
createEffect(() => console.log("Last count value", count()));

// memo
const toSquare = (val) => val * val;
const square = createMemo(() => {
  return toSquare(count());
});

const [cats, setCats] = createSignal([
  { id: "J---aiyznGQ", name: "Keyboard Cat" },
  { id: "z_AbfPXTKms", name: "Maru" },
  { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
]);

// Dymanic
const [color, setColor] = createSignal("red");
const colors = ["red", "green", "blue"];
const changeDynamic = () => {
  const index = Math.floor(Math.random() * 3);
  setColor(colors[index]);
};

const addLink = () => {
  setCats(cats().concat({ id: "z_AbfPXTKms", name: "New cat" }));
};

// Events
const actionHandler = (data) => {
  alert(`A data is: ${data}`);
};

function App() {
  // hooks
  onMount(() => {
    console.log("MOUNTED");
  });

  onCleanup(() => {
    console.log("CLEAN UP");
  });

  //Portal
  const [portalTitle, setPortalTitle] = createSignal("");
  const [portalContent, setPortalContent] = createSignal([]);

  const showPortal = (title) => {
    setPortalTitle(title.toUpperCase());
    setPortalContent(portalDictionary[title]);
  };
  const closePortal = () => {
    setPortalTitle("");
    setPortalContent([]);
  };

  //Styles
  const [num, setNum] = createSignal(100);

  return (
    <div class={styles.App}>
      <main class={styles.Main}>
        <h1>Solid exapmle application</h1>
        <img
          class={styles.Icon}
          src="src/assets/info.svg"
          onClick={() => showPortal("general")}
        ></img>

        <div class={styles.Grid}>
          <div class={styles.Block}>
            <h2>Signal, Effect, Memo</h2>
            <p>Count: {count()}</p>
            <p>Square(memo func) is: {square()}</p>
            <AppButton text="Increment" action={increment}></AppButton>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("reactivity")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Show, Switch</h2>
            <AppShow count={count()} />
            <AppSwitch count={count()} />
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("show & switch")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>For</h2>
            <AppFor items={cats()} />
            <AppButton text="Add link" action={addLink}></AppButton>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("for & index")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Dynamic</h2>
            <AppDymanic color={color()} />
            <AppButton text="Change dynamic" action={changeDynamic}></AppButton>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("dynamic")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Error Boundary</h2>
            <AppErrorBoundary />
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("error boundary")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Portal</h2>
            <p>For modal window</p>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("portal")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Actions</h2>
            <pre>{"<div onMouseMove={handleMouseMove}>"}</pre>
            <pre>{"<button on:DOMContentLoaded={() => {}} />"}</pre>
            <pre>{"<button onClick={[handler, data]}/>"}</pre>
            <button onClick={[actionHandler, "SOLID"]}>showData</button>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("actions")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Styles</h2>
            <pre>{"style={ '--my-custom-color': themeColor()"}</pre>
            <pre>{"class={styles.Block}"}</pre>
            <pre>{`width: ${num()}`}</pre>
            <pre>{"classList={{selected: current() === 'foo'}}"}</pre>

            <div
              style={{
                backgroundColor: "red",
                width: num(),
              }}
            ></div>

            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("styles")}
            ></img>
          </div>
        </div>

        <AppPortal
          title={portalTitle()}
          content={portalContent()}
          action={closePortal}
        />
      </main>
    </div>
  );
}

export default App;
