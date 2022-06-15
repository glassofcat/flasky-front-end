import "./App.css";
import { DogList } from "./components/DogList.js";

const dogData = [
  {
    nameData: "Mr. Bimgles",
    foodData: "pizza",
  },
  {
    nameData: "PuppyCat",
    foodData: "rug lint",
  },
  {
    nameData: "Sharon",
    foodData: "rice?",
  },
];
function App() {
  return (
    <main>
      <h1>My Dog's Favorite Foods</h1>
      <DogList dogs={dogData}></DogList>
    </main>
  );
}

export default App;
