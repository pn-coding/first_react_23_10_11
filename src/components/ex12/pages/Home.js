import { Link } from "react-router-dom";
import styled from "styled-components";
import { data } from "../api";

const Banner = styled.section`
  height: 80vh;
  background-color: lightgray;
`;

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 45%;
  height: 600px;
  background: url(${(props) => props.$url}) no-repeat center / cover;
  box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.3);
  transition: 0.3s;
  &:hover {
    transform: translate(20px, 20px);
    box-shadow: none;
  }

  a {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

export const Home = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        <Con $url={data[0].img}>
          <Link to={"/sub01"}></Link>
        </Con>
        <Con $url={data[1].img}>
          <Link to={"/sub02"}></Link>
        </Con>
      </Section>
    </div>
  );
};
