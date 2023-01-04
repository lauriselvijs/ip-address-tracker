import { Helmet, HelmetProvider } from "react-helmet-async";
import { fontWeightObjToString } from "../../utils/Font.util";
import { FontProviderProps } from "./FontProvider";

const FontProvider = ({
  fontFamilyName,
  fontWeight,
  children,
}: FontProviderProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${fontFamilyName}:wght@${fontWeightObjToString(
            fontWeight
          )}&display=swap`}
          rel="stylesheet"
        />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default FontProvider;
