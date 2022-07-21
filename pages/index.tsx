import { Button, Htag } from "../components/index";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary">ClickClickClick</Button>
      <Button appearance="ghost">ClickClickClick</Button>
    </>
  );
}
