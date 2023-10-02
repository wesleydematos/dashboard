import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {     
  margin:0;
  padding: 0;
  outline: none;
  box-sizing: border-box;  
  border: none;
  font-family: 'Poppins', sans-serif;
}

img {
  max-width: 100%;
}

button {
  cursor: pointer;
}

ul, ol, li {
  list-style: none;
}

:root{    
  --primary-color: #5d5fef;
  --pink-1: #fa5a7d;
  --pink-2: #ffe2e5;
  --orange-1: #ff947a;
  --orange-2: #fff4de;
  --green-0: #4ab58e;
  --green-1: #3cd856;
  --green-2: #dcfce7;
  --blue-1: #1b59f8;
  --blue-2: #4e7ef9;
  --purple-1: #a87eff;
  --purple-2: #cfb7ff;
  --yellow-0: #ffcf00;
  --gray-0: #e5e5e5;
  --gray-bg: #fafbfc;
  --white-bg: #ffffff;
}
`;