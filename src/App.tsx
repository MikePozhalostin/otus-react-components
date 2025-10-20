import "./App.css";
import H1Component from "./components/H1Component/H1Component";

function App() {
  const contents = [
    {
      title: "React",
      childs: [
        {
          title: "Components",
          childs: [
            {
              title: "Props",
              text: "Отображение данных, полученных из родительского компонета",
              childs: [],
            },
            {
              title: "State",
              text: "Управление состоянием компонента",
              childs: [],
            },
          ],
        },
        {
          title: "Router",
          childs: [
            {
              title: "Router",
              text: "Управление маршрутизацией и навигацией",
              childs: [],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {contents.map((content) => (
        <>
          <H1Component title={content.title} childs={content.childs}/>
        </>
      ))}
    </>
  );
}

export default App;
