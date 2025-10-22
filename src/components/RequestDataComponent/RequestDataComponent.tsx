import "./RequestDataComponent.css";

interface IRequestDataComponent {
  text: string;
  isError: boolean;
}

const RequestDataComponent = (props: IRequestDataComponent) => {
  return (
    <>
      <div
        style={{
          color: "black",
          backgroundColor: !props.isError ? 'green' : 'red'
        }}
      >
        {props.text}
      </div>
    </>
  );
};

export default RequestDataComponent;
