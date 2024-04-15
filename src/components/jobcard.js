import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const JobCard = ({ id, company, logo, position, role, level, postedAt, contract, location, languages, tools }) => {
    return (_jsxs("article", { className: "card", id: id, children: [_jsx("p", { className: "card-date font-thin", children: postedAt }), _jsxs("div", { className: "card-top", children: [_jsx("img", { src: `./assets/${logo}`, alt: "company logo", className: "logo-img" }), _jsxs("div", { className: "card-top-info", children: [_jsx("h2", { className: "card-position font-medium", children: position }), _jsx("h3", { className: "card-company font-thin", children: company }), _jsx("p", { className: "card-contract font-thin", children: contract })] })] }), _jsxs("div", { className: "card-mid", children: [_jsxs("div", { className: "info", children: [_jsx("p", { className: "font-regular", children: level }), _jsx("p", { className: "font-regular", children: role }), _jsx("p", { className: "font-regular", children: location })] }), _jsxs("div", { className: "skills", children: [_jsx("div", { className: "languages", children: languages.map((language, index) => (_jsx("p", { className: "font-regular", children: language }, index))) }), _jsx("div", { className: "tools", children: tools.map((tool, index) => (_jsx("p", { className: "font-regular", children: tool }, index))) })] })] }), _jsx("div", { className: "card-bottom", children: _jsx("button", { type: "button", className: "apply-btn font-bold", children: "APPLY NOW" }) })] }));
};
export default JobCard;