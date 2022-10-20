export const AppSwitch = (props) => {
  return (
    <Switch fallback={<p>{props.count} is between 5 and 10</p>}>
      <Match when={props.count > 10}>
        <p>{props.count} is greater than 10</p>
      </Match>
      <Match when={5 > props.count}>
        <p>{props.count} is less than 5</p>
      </Match>
    </Switch>
  );
};

