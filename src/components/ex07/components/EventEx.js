import { useState } from "react";

export const EventEx = () => {
  const [num, setNum] = useState(0);
  console.log(num);

  //   const plusHandler = () => setNum(num + 1);
  //   const minusHandler = () => setNum(num - 1);

  //   let num = 0;
  //   const plusHandler = () => {
  //     num++;
  //     console.log(num);
  //   };

  return (
    <div>
      <h3>클릭할때 숫자 증감</h3>
      <h3>{num}</h3>

      {/* <button onClick={plusHandler}>+</button>
      <button>-</button> */}

      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(num - 1)}>-</button>
    </div>
  );
};

// *useState()
// =>react hook 종류중 하나로 변수를 정의하고 값을 변경할때 사용
// =>배열 비구조화 할당을 이용하며 첫번째 값은 변수
// 두번째값은 변수를 변경할수 있는 함수로 정의
// 단, set이라는 이름을 붙여줘야됨
// ex)
// const [변수명, set변수명] = useState(변수값);
