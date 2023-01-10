import { bindActionCreators } from "@reduxjs/toolkit";
import { ChangeEvent, MouseEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { useAppDispatch } from "../../hooks/Store";
import { IpActions } from "../../store/features/Ip";
import { useLazyGetIpInfoQuery } from "../../store/features/IpInfo";

import {
  IpSearchBtnStyle,
  IpSearchInputStyle,
  IpSearchInputStyleForm,
} from "./IpSearchInput.style";

const IpSearchInput = () => {
  const [ip, setIp] = useState<string>("");
  const [trigger, { isFetching }] = useLazyGetIpInfoQuery({
    refetchOnReconnect: true,
  });
  const dispatch = useAppDispatch();
  const { ipReceived } = bindActionCreators(IpActions, dispatch);

  const onIpInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIp(event.target.value);
  };

  const onIpSearchBtnClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    ipReceived({ ip });
    trigger(ip, true)
      .unwrap()
      .then(() => setIp(""));
  };

  return (
    <IpSearchInputStyleForm>
      <IpSearchInputStyle
        onChange={onIpInputChange}
        placeholder="Search for any IP address for domain"
        value={ip}
      />
      <IpSearchBtnStyle
        disabled={isFetching}
        type="submit"
        aria-label="Search ip"
        onClick={onIpSearchBtnClick}
        title="Search"
      >
        <IoIosArrowForward />
      </IpSearchBtnStyle>
    </IpSearchInputStyleForm>
  );
};

export default IpSearchInput;
