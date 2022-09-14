# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - IP address tracker solution](#frontend-mentor---ip-address-tracker-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![ip address tracker desktop light mode](https://user-images.githubusercontent.com/85683069/190143799-f77e5d4c-f957-45a6-894b-9f4813efcb34.png)
![ip address tracker mobile light mode](https://user-images.githubusercontent.com/85683069/190143794-7a3bf014-338b-406e-9c41-2598c051dd7f.png)
![ip address tracker desktop dark mode](https://user-images.githubusercontent.com/85683069/190143797-9e0ff321-a820-4e5c-90f6-a7afb4b295c3.png)
![ip address tracker mobile dark mode](https://user-images.githubusercontent.com/85683069/190143788-0974f77e-0321-4bdb-9d76-2415609e2995.png)

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/ip-address-tracker)
- Live Site URL: [Netlify](https://677dcc-ip-address-tracker.netlify.app/)

## My process

### Built with

- HTML5 markup
- [Styled Components](https://styled-components.com//) - Visual primitives for the component age.
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

### What I learned

Using global styled component file to apply style everywhere as well use dynamic theme

```js
export const GlobalStyle = createGlobalStyle`
      body{
          background-color: ${({ theme }) => theme.colors.secondaryColor};
          padding: 0px;
          margin: 0px;
          font-family: ${({ theme }) => theme.font.fontFamily};
      }
  `;
```

Using styled components css function to change css dynamically

```js
  ${({ theme }) =>
    theme.themeId === DarkTheme.themeId
      ? css`
          background-image: url(${BackgroundHeaderImageDarkMode});
        `
      : css`
          background-image: url(${BackgroundHeaderImage});
        `}
```

Using RTK Query to fetch data from server

```js
  export const IpInfoApi = createApi({
    reducerPath: IP_INFO_API_REDUCER_PATH,
    baseQuery: fetchBaseQuery({
      baseUrl: IP_GEOLOCATION_BASE_URL,
      prepareHeaders: (headers) =>
        prepareReqHeaders(headers, IP_GEOLOCATION_HEADERS),
    }),
    endpoints: (builder) => ({
      getIpInfo: builder.query<IIpInfo, string>({
        query: (ip = "") => {
          return {
            url: `/${ip}`,
          };
        },
      }),
    }),
  });

  export const { useGetIpInfoQuery } = IpInfoApi;


 /*  Using fetch hook inside component, using conditional fetching in case if
  ipFetch is set true fetch data (if user has pressed search button, ipFetch
  is set to true) */
  const { ipFetch, ip } = useAppSelector((state: RootState) => state[IpName]);
  const { data: IpInfoData, isLoading } = useGetIpInfoQuery(ip, {
    skip: !ipFetch,
  });
```

### Continued development

- Future use of RTK Query mutations and GraphQL data fetching

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide) - Great documentation to understand Redux Toolkit
- [Styled Components](https://styled-components.com/docs) - Great documentation to understand better styled components

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
