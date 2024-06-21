import { useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();

  function handleAddProduct() {
    navigate("/admin/add-product");
  }

  return (
    <div className="container">
      <ul>
        <li onClick={handleAddProduct}>Add-product</li>
        <li>Edit-product</li>
        <li>Check-orders</li>
        <li></li>
      </ul>
    </div>
  );
}

export default Admin;
