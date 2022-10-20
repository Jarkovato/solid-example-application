export const AppShow = (props) => {
  /* Show */
  return (
    <Show when={props.count > 3} fallback={() => <p>Count is less than 3</p>}>
      <p>Count is more than 3</p>
    </Show>
  );
};
