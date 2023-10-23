import { FoodMenu } from "./FoodMenu";
import { Intro } from "./Intro";

const foodMenus = [
  {
    week: "월요일",
    breakfast: "시리얼",
    lunch: "제육덮밥",
    dinner: "김치찌개",
  },
  {
    week: "화요일",
    breakfast: "쉐이크",
    lunch: "샤브샤브",
    dinner: "보쌈",
  },
  {
    week: "수요일",
    breakfast: "토스트",
    lunch: "중국집",
    dinner: "스시",
  },
];

const PropsEx = () => {
  return (
    <div>
      <Intro name={"이정환"} age={12} job={"개발자"} />
      <Intro name={"안정환"} age={14} job={"예능인"} />
      <br />
      <br />

      {/* <FoodMenu
        week={foodMenus[0].week}
        breakfast={foodMenus[0].breakfast}
        lunch={foodMenus[0].lunch}
        dinner={foodMenus[0].dinner}
      /> */}

      <FoodMenu menus={foodMenus} />
    </div>
  );
};

export default PropsEx;
