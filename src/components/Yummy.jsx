import { useNavigate } from "react-router-dom";

export default function Yummy() {
  const navigate = useNavigate();

  function handleClick() {
    localStorage.clear();

    navigate("/login");
  }

  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
