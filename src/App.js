import { data } from "./data";

import Card from "./Components/Card";
export default function App() {
  const dataShow = data.map((item) => (
  <card img={item.img} title={item.title} />
  ));
  return <div>
    {dataShow}
  </div>;
}
