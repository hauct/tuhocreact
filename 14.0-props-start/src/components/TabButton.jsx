// function TabButton({ children }) {
//   return (
//     <li>
//       <button>{children}</button>
//     </li>
//   );
// }

function TabButton({ label, onSelect }) {
  // js
  // const btn = document.querySelector("button");
  // btn.addEventListener("click", () => {
  //   // Làm việc gì đó
  // });

  return (
    <li>
      <button onClick={onSelect}>{label}</button>
    </li>
  );
}

export default TabButton;
