import "./App.css";
import ShopStore_Info from "./ShopStore_Info/ShopStore_Info";
import NewText_Props from "./NewText_Props/NewText_Props";
import ShopStore_Text from "./ShopStore_Text/ShopStore_Text";

function App() {
  return (
    <div className="parent_parent">
      <NewText_Props infoHello="Welcome to our store dear buyer!!!" />
      <div className="parent_main">
        <ShopStore_Info />
        <ShopStore_Text />
      </div>
    </div>
  );
}

export default App;
