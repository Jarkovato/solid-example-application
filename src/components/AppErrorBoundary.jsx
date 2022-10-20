import { ErrorBoundary } from "solid-js";

const Broken = (props) => {
  throw new Error("Oh No");
  return <>Never Getting Here</>;
};

export const AppErrorBoundary = () => {
  return (
    <>
      <div>Before</div>
      <ErrorBoundary fallback={(err) => err}>
        <Broken />
      </ErrorBoundary>
      <div>After</div>
    </>
  );
};
