import H2Component, { type IH2Props } from "../H2Component/H2Component";
import "./H1Component.css";

export interface IH1Props {
  title: string;
  childs: Array<IH2Props> | undefined;
}

const H1Component = (props: IH1Props) => {
  return (
    <>
      <h1 className="h1-color">{props.title}</h1>
      {props.childs && props.childs.map((ch) => (
        <H2Component title={ch.title} childs={ch.childs} />
      ))}
    </>
  );
};

export default H1Component;
