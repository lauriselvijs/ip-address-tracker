import styled from "styled-components/macro";

export const IpLocationBaseStyle = styled.div`
  z-index: 1;

  height: 150px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: -120px;

  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.colors.baseColor};

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  transition: height, margin-bottom 0.5s linear;

  background-color: ${({ theme }) => theme.colors.secondaryColor};

  @media (max-width: ${({ theme }) => theme.media.mobile.maxWidth}) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: height, margin-bottom 0.5s linear;

    height: 310px;
    margin-bottom: -340px;
    padding-bottom: 40px;
  }
`;
