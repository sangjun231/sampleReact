import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({ name: "홍길동", age: 25 });
  const [items, setItems] = useState(["사과", "바나나", "오렌지"]);

  const { name, age } = user;
  const [newItem, setNewItem] = useState("");
  const addNewItem = (event) => {
    event.preventDefault();
    if (items.includes(newItem)) {
      alert("중복입니다");
      setNewItem("");
      return;
    }
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleRemoveItem = (item) => {
    alert(item + "삭제되었습니다.");
    setItems(
      items.filter((element) => {
        return element !== item;
      })
    );
  };

  const logItems = () => {
    // forEach는 중간에 멈출 수 없이 모든 배열을 순회해야함
    items.forEach((item) => console.log(item));
  };

  return (
    <div>
      <h1>사용자 정보</h1>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
      <h2>사용자의 아이템 목록</h2>
      <form onSubmit={addNewItem}>
        <label htmlFor="newItem">새 아이템 추가:</label>
        <input
          id="newItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
      <ul>
        {items.map((item) => (
          <li key={item}>
            {item}
            <button
              onClick={() => {
                handleRemoveItem(item);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <button onClick={logItems}>아이템 목록 콘솔에 출력</button>
    </div>
  );
}

export default App;
