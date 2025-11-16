import { useState } from "react";
import "./App.css";

function App() {
  // Khởi tạo state dưới dạng object để quản lý nhiều trường input
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <h2>Cập nhật thông tin cá nhân</h2>
      <label>
        Họ và Tên
        <input
          type="text"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </label>
      <h3>Thông tin đã nhập</h3>
      <p>Họ và tên: {user.fullName}</p>
      <p>Email: {user.email}</p>
    </>
  );
}

export default App;
