export const FoodMenu = ({menus}) => {
  console.log(menus);
  return (
    <>
      <div>
        <h2>{menus[0].week} 메뉴</h2>
        <h3>아침: {menus[0].breakfast}</h3>
        <h3>점심: {menus[0].lunch}</h3>
        <h3>저녁: {menus[0].dinner}</h3>
      </div>

      <div>
        <h2>{menus[1].week} 메뉴</h2>
        <h3>아침: {menus[1].breakfast}</h3>
        <h3>점심: {menus[1].lunch}</h3>
        <h3>저녁: {menus[1].dinner}</h3>
      </div>

      <div>
        <h2>{menus[2].week} 메뉴</h2>
        <h3>아침: {menus[2].breakfast}</h3>
        <h3>점심: {menus[2].lunch}</h3>
        <h3>저녁: {menus[2].dinner}</h3>
      </div>
    </>
  );
};

// 월요일 메뉴
// 아침: 시리얼
// 점심: 제육덮밥
// 저녁: 김치찌개

// 화요일 메뉴
// 아침: 쉐이크
// 점심: 샤브샤브
// 저녁: 보쌈

// 수요일 메뉴
// 아침: 토스트
// 점심: 중국집
// 저녁: 스시
