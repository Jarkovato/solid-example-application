export const AppFor = (props) => {
  /* For */
  return (
    <ul>
      <For each={props.items}>
        {(item, i) => (
          <li>
            <a
              target="_blank"
              href={`https://www.youtube.com/watch?v=${item.id}`}
            >
              {i() + 1}: {item.name}
            </a>
          </li>
        )}
      </For>
    </ul>
  );
};
