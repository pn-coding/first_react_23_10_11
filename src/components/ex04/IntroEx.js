const users = [
  {
    id: 0,
    name: "이정환",
    age: 12,
  },
  {
    id: 1,
    name: "안정환",
    age: 15,
  },
  {
    id: 2,
    name: "신정환",
    age: 14,
  },
  {
    id: 3,
    name: "이광수",
    age: 14,
  },
];

export const IntroEx = () => {
  return (
    <div>
      {users.map((man) => (
        <div key={man.id}>
          <h2>자기소개</h2>
          <h3>이름: {man.name}</h3>
          <h3>나이: {man.age}</h3>
          <hr />
        </div>
      ))}
    </div>
  );
};
