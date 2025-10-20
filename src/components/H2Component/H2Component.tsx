import H3Component, { type IH3Props } from "../H3Component/H3Component";
import "./H2Component.css"

export interface IH2Props {
  title: string;
  childs: Array<IH3Props> | undefined;
}

const H2Component = (props: IH2Props) => {
  return (
    <>
      <h2 className="h2-color">{props.title}</h2>
      {props.childs && props.childs.map((ch) => (
        <H3Component text={ch.text} title={ch.title} />
      ))}
    </>
  );
};

export default H2Component;
