import { ComEx01, ComEx02 } from "./components/ex02/ComEx01";
import FnComponentEx from "./components/ex02/FnComponentEx";
import PropsEx from "./components/ex03/PropsEx";
import { IntroEx } from "./components/ex04/IntroEx";
import { MapFnEx } from "./components/ex04/MapFnEx";
import { ViewSiteEx } from "./components/ex04/ViewSiteEx";
import { Ex05 } from "./components/ex05/Ex05";
import { Ex06 } from "./components/ex06/Ex06";
import { Ex07 } from "./components/ex07/Ex07";
import { Ex09 } from "./components/ex09/Ex09";
import { Ex10 } from "./components/ex10/Ex10";

const App = () => {
  return (
    <div>
      {/* <div>
        <h3>프리티어 세팅했음~~😚</h3>
      </div>

      <FnComponentEx />

      <ComEx01 />
      <ComEx02 /> */}
      {/* 2일차 */}

      {/* <PropsEx /> */}
      {/* 3일차 */}

      {/* <MapFnEx /> */}
      {/* <IntroEx /> */}
      {/* <ViewSiteEx /> */}
      {/* 4일차 */}

      {/* <Ex05 /> */}
      {/* 5일차 */}

      {/* <Ex06 /> */}
      {/* 6일차 */}

      {/* <Ex07 /> */}
      {/* 7일차 */}

      {/* <Ex09 /> */}
      {/* 9일차 */}

      <Ex10 />
    </div>
  );
};

export default App;

// *jsx문법 규칙
// =>태그가 2개 이상일땐 반드시 부모 태그로 닫아줘야됨

// *컴포넌트
// =>레이아웃과 비슷하게 다자인의 하나의 영역을 뜻함
// =>컴포넌트 제작시 파일명과 함수명은 동일해야되며,
// 첫글자는 대문자로 시작 할 것
// =>컴포넌트 함수를 제작후 내보내기 export를 해줘야됨
// =>태그는 반드시 닫아줄것

// *내보내기 불러오기
// =>import 불러오기
// =>export 내보내기
