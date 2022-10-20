import { Dynamic } from "solid-js/web";

const RedThing = () => <p style="color: red">Red Thing</p>;
const GreenThing = () => <p style="color: green">Green Thing</p>;
const BlueThing = () => <p style="color: blue">Blue Thing</p>;

const options = {
  red: RedThing,
  green: GreenThing,
  blue: BlueThing,
};

export const AppDymanic = (props) => {
  return <Dynamic component={options[props.color]} />;
};
