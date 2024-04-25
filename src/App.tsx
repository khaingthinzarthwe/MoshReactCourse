import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi optio
        quis rerum. Eligendi veniam perferendis ab, ad est repellat. Ipsum
        repudiandae debitis dolore rem nulla a amet saepe id, neque atque
        corporis. Perferendis aut eos ducimus odio, ut asperiores consectetur
        magni quo error temporibus, ipsa nihil quibusdam corrupti ab iste
        recusandae natus, inventore iure cupiditate hic eum obcaecati commodi
        culpa. Quos mollitia laboriosam sequi ipsum placeat sunt possimus fugiat
        minus, labore assumenda, est, veritatis facere animi? Asperiores cum
        officiis at magnam reiciendis, exercitationem, excepturi provident quod
        veritatis porro eveniet? Deserunt beatae nobis ducimus maiores sed
        repellat illum saepe aliquam quod.f
      </ExpandableText>
    </div>
  );
}

export default App;
