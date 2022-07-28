import { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "../components/index";
import { withLayout } from "../layout/Layout";

export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(4)

  return (
    <>
      <Htag tag="h1">Text</Htag>
      <Button appearance="primary" arrow="down">ClickClickClick</Button> 
      <Button appearance="ghost" arrow="right">ClickClickClick</Button>
      <P size="l">Big TEXT</P> 
      <P> TEXT</P>
      <P size="s">Small TEXT</P>
      <Tag size="s">Small</Tag>
      <Tag size="m" color="red">Small</Tag>
      <Tag size="s" color="green">Small</Tag>
      <Tag size="m" color="grey">Small</Tag>
      <Rating rating={rating} isEditable setRating={setRating}/>
    </>
  );
}

export default withLayout(Home);
