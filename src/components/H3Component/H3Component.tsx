import "./H3Component.css";

export interface IH3Props {
  title: string;
  text: string;
}

const H3Component = (props: IH3Props) => {
  return (
    <>
      <h1 className="h3-title-color">{props.title}</h1>
      <div className="h3-text-color">{props.text}</div>
    </>
  );
};

export default H3Component;
