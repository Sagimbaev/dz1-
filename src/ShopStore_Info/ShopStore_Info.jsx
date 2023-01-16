import "./ShopStore_Info.css";
import Logo from "./ShopStore_Info_img/Bag_1.jpg";

function ShopStore_Info() {
  return (
    <div className="ShopStore_Info_main">
      <div className="childs">
        <div className="child_left">
          <img
            // src="https://mrsumkin.com.ua/_mod_files/ce_images/eshop/generated/vc8421bordo__1__250x250_sm.jpg"
            src={Logo}
            alt=""
          />
        </div>
        <div className="child_right">
          <h3>Sample headline</h3>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text
          </p>
          <span>$200</span>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////// */}
      <div className="childs">
        <div className="child_left">
          <img
            src="https://avatars.mds.yandex.net/get-mpic/5277894/img_id1427694126630495389.jpeg/orig"
            alt=""
          />
        </div>
        <div className="child_right">
          <h3>Sample headline</h3>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text
          </p>
          <span>$400</span>
        </div>
      </div>
      {/* //////////////////////////////////////////////////////// */}

      <div className="childs">
        <div className="child_left">
          <img
            src="https://mrsumkin.com.ua/_mod_files/ce_images/eshop/generated/vc02811_lblack__1__250x250_sm.jpg"
            alt=""
          />
        </div>
        <div className="child_right">
          <h3>Sample headline</h3>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text
          </p>
          <span>$300</span>
        </div>
      </div>
    </div>
  );
}

export default ShopStore_Info;
