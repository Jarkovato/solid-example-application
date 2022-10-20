export const AppIndex = (props) => {
  /* For */
  return (
    <Index each={props.cats}>
      {(cat, i) => (
        <li>
          <a
            target="_blank"
            href={`https://www.youtube.com/watch?v=${cat().id}`}
          >
            {i + 1}: {cat().name}
          </a>
        </li>
      )}
    </Index>
  );
};
