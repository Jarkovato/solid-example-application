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
createEffect(() => {
  console.log(count());
  if (count() === 6) {
    alert("count", count());
  }
});

// memo
const toSquare = (val) => val * val;

const square = createMemo(() => {
  return toSquare(count());
});

// for
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
            <h2>Events</h2>
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
            <pre>{"style={'--my-custom-color': themeColor()}"}</pre>
            <pre>{"class={styles.Block}"}</pre>
            <pre>{`width: ${num()}`}</pre>
            <pre>{"classList={{selected: current() === 'foo'}}"}</pre>

            <div
              style={{
                "background-color": "red",
                width: `${num()}px`,
                height: "20px",
              }}
            ></div>

            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("styles")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Refs</h2>
            <pre>{"<div ref={myDiv}>My Element</div>"}</pre>
            <pre>{"ref={el => /* Сделать что-либо с el... */}"}</pre>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("refs")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>Spread props</h2>
            <pre>{"<Info {...props} />"}</pre>
            <img
              class={styles.Icon}
              src="src/assets/info.svg"
              onClick={() => showPortal("spread")}
            ></img>
          </div>

          <div class={styles.Block}>
            <h2>In the next part, we will see</h2>
            <p>Directives</p>
            <p>Default props</p>
            <p>Splitting props</p>
            <p>Children</p>
            <p>Nested reactivity</p>
            <p>Stores</p>
            <p>Stores mutation</p>
            <p>Stores context</p>
            <p>Immutable stores</p>
            <p>Batching updates</p>
            <p>Untrack signal change</p>
            <p>On signal change</p>
            <p>Lazy components</p>
            <p>Resourses</p>
            <p>Suspense</p>
            <p>Transitions</p>
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
