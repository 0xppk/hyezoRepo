import { jsx, jsxs } from 'react/jsx-runtime';

function i(){return jsx("div",{className:"flipcard",children:jsxs("div",{className:"flipcard_content",children:[jsxs("div",{className:"flipcard_front",children:[jsx("h3",{className:"flipcard_title",children:"Front"}),jsx("p",{className:"flipcard_subtitle",children:"TIme for some"})]}),jsx("div",{className:"flipcard_back",children:jsx("p",{className:"flipcard_body",children:"Back"})})]})})}

export { i as a };
