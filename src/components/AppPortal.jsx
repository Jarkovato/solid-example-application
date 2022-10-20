import { Portal, For, Show, style } from "solid-js/web";

export const AppPortal = (props) => {
  return (
    <Show when={props.title && props.content.length}>
      <Portal>
        <div class={styles.Portal}>
          <img
            class={styles.Icon}
            src="src/assets/close.svg"
            onClick={props.action}
          ></img>
          <h1 class={styles.Title}>{props.title}</h1>
          <ul class={styles.List}>
            <For each={props.content}>
              {(item, i) => (
                <li>
                  <h2>{item.subtitle}</h2>
                  <For each={item.text}>
                    {(text, i) => (
                      <li>
                        <p>{text}</p>
                      </li>
                    )}
                  </For>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Portal>
    </Show>
  );
};

import styles from "./AppPortal.module.css";
