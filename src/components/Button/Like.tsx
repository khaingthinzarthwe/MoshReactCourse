import { useState } from "react";
import { FaHeart } from "react-icons/fa";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle =  () =>  {
    setStatus(!status);
    onClick();
  }

 if(status) return <FaHeart color="#ff6b81"  size={50} onClick={toggle} />
 return <FaHeart size={50} onClick={toggle} />
}

export default Like
