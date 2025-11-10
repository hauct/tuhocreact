import "./App.css";
import demoPic from "../src/assets/img/img1.png";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

const welCome = [
  "Chào mừng bạn đến với thế giới React!",
  "Rất vui được chào đón bạn đến thế giới React",
  "Chúng ta sẽ được học các kiến thức thú vị về React",
];

function randomTitle() {
  return Math.floor(Math.random() * welCome.length);
}

function Header() {
  const title = welCome[randomTitle()];
  return (
    <>
      <h1>{title}</h1>
      <p>
        Hôm nay là: <strong>{today}</strong>. Thời gian hiện tại{" "}
        <strong>{time}</strong>
      </p>
    </>
  );
}

const name = "Nam";
let isLoggedIn = false;
let person = {
  name: "Lan",
  age: 38,
};

function DynamicValue() {
  return (
    <>
      {/*1. dùng để chèn **biểu thức** JavaScript (expression) */}
      <h2>Chào {name}</h2>
      <p>Kết quả: {1 + 2 * 5}</p>

      {/*2. không chèn **câu lệnh** (statement) */}
      {/* <p>{if(true) {"Đúng rồi"}}</p> */}

      {/* 3. Kết hợp với điều kiện (Toán tử Ternary)
          JSX không hỗ trợ trực tiếp `if-else`, nhưng có thể dùng toán tử ternary bên trong*/}
      <p>{isLoggedIn ? "Bạn đã đăng nhập" : "Bạn chưa đăng nhập"}</p>

      {/*4. Chèn thuộc tính đối tượng */}
      <p>
        Tên: {person.name}, Tuổi: {person.age}
      </p>

      {/*5. Chèn hình ảnh */}
      <img src={demoPic} alt="" />
    </>
  );
}
function App() {
  return (
    <>
      <Header></Header>
      <DynamicValue></DynamicValue>
    </>
  );
}

export default App;
