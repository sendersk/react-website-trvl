import styled from "styled-components";
import background from "../../../assets/images/img-1.jpg";

export const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background-image: url("${background}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff;
  font-size: 100px;
`;
