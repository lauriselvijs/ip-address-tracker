import { ChangeEvent, MouseEvent, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import { IP_INPUT_PLACEHOLDER } from "../../constants/IpInput.const";
import { useLazyGetIpInfoQuery } from "../../store/features/IpInfo/IpInfo.slice";

import {
  IpSearchBtnStyle,
  IpSearchInputStyle,
  IpSearchInputStyleForm,
} from "./IpSearchInput.style";

const IpSearchInput = () => {
  const [ip, setIp] = useState<string>("");

  const [trigger] = useLazyGetIpInfoQuery();

  const onIpInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setIp(event.target.value);
  };

  const onIpSearchBtnClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();

    trigger(ip, true);
  };

  return (
    <IpSearchInputStyleForm>
      <IpSearchInputStyle
        onChange={onIpInputChange}
        placeholder={IP_INPUT_PLACEHOLDER}
        value={ip}
      />
      <IpSearchBtnStyle
        type="submit"
        aria-label="Search ip"
        onClick={onIpSearchBtnClick}
      >
        <IoIosArrowForward />
      </IpSearchBtnStyle>
    </IpSearchInputStyleForm>
  );
};

export default IpSearchInput;
