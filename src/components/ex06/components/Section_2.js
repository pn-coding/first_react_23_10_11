import styled from "styled-components";
import { baseLayoutSize, fontSize } from "../../../GlobalStyled";

const Section = styled.section`
  padding: ${baseLayoutSize.padding};
  h3 {
    font-size: ${fontSize.title};
  }
`;

const ConWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background: url(${(props) => props.$bgImg}) no-repeat center / cover;
  transition: 0.5s;
  &:hover {
    opacity: 0.5;
  }
`;

export const Section_2 = () => {
  return (
    <Section>
      <h3>두번째 섹션</h3>
      <ConWrap>
        <Con
          $bgImg={
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1016-c-08_1-ksh6mza3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=f584d8501c27c5f649bc2cfce50705c0"
          }
        ></Con>
        <Con
          $bgImg={
            "https://cdn.pixabay.com/photo/2016/06/02/02/38/mesh-1430108_640.png"
          }
        ></Con>
        <Con
          $bgImg={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvb4LcwgXA9WktoKKVE-m-uGpzsVi7SfVO4-unH9Tzy57Et2X2CKHS16PAUk6BtnRpQU&usqp=CAU"
          }
        ></Con>
      </ConWrap>
    </Section>
  );
};
