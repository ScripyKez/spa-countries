import styled from "styled-components";

import Select from "react-select";

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: base => ({
      ...base,
      backgroundColor: "var(--colors-ui-base)",
      borderRadius: "var(--radii)",
      color: "var(--colors-text)",
      padding: "0.25rem",
      border: "none",
      boxShadow: "var(--shadow)",
      height: "50px",
    }),
    option: (base, state) => ({
      ...base,
      cursor: "pointer",
      color: "var(--colors-text)",
      backgroundColor: state.isSelected
        ? "var(--colors-bg)"
        : "var(--colors-ui-base)",
    }),
  },
})`
  width: 200px;
  border-radius: var(--radii);
  font-family: var(--family);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding: 0.25rem;
  }

  & * {
    color: var(--colors-text) !important;
  }

  & > div[id] {
    background-color: var(--colors-ui-base) !important;
  }
`;
