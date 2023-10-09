/* eslint-disable-next-line */
export interface SplashProps {}

export function Splash(props: SplashProps) {
  return (
    <div className={"styles['container']"}>
      <h1 className="text-3xl font-bold underline italic">
        Hello world! - Test TailwindCSS
      </h1>
      <h1>Welcome to Splash!</h1>
    </div>
  );
}

export default Splash;
