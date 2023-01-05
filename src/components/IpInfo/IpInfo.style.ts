import styled from "styled-components/macro";

export const IpInfoStyle = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 10px;
  box-shadow: 2px 2px 10px 2px ${({ theme }) => theme.color.primary};
  display: flex;
  margin: 0 20px -12vh 20px;
  padding: 10px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: -55vh;
    padding-bottom: 40px;
    min-width: 38vw;
  }
`;

export const IpInfoErrMsg = styled(IpInfoStyle)`
  padding: 20px;
`;

export const IpInfoItem = styled.div`
  padding: 20px 80px 20px 20px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 10px 5vw;
    text-align: center;
  }
`;

export const IpInfoAttributesDivider = styled.div`
  border-left: 2px solid ${({ theme }) => theme.color.primary};
  bottom: 0;
  height: 50%;
  left: -5px;
  margin: auto;
  opacity: 0.3;
  position: absolute;
  top: 0;

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    display: none;
  }
`;

export const IpInfoItemTitle = styled.h2`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${({ theme }) => theme.font.size.small};
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const IpInfoItemContent = styled.h3`
  color: ${({ theme }) => theme.color.primaryDark};
  font-size: ${({ theme }) => theme.font.size.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};

  @media (max-width: ${({ theme }) => theme.media.tablet.maxWidth}) {
    padding: 0;
    margin: 0;
  }
`;
