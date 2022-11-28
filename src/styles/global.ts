import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
	    margin: 0;
	    padding: 0;
	    box-sizing: border-box;
        font-family: "Nunito", sans-serif;
	}

	:focus {
	    outline: 2px solid ${(p) => p.theme.brand};
		transition: outline 150ms;
	}

	body {
        background: ${(p) => p.theme["base-900"]};
        color: ${(p) => p.theme.white};
	}

	body, input, textarea, button {
	    font-weight: 400;
	    font-size: 1rem;
	    -webkit-font-smoothing: antialiased;
	}

	input:is([type="text"]) {
		border-radius: 6px;
		padding: 12px 16px;
		background: ${(p) => p.theme["base-1000"]};
		color: ${(p) => p.theme["base-500"]};
		font: ${(p) => p.theme["text-m"]};

		&::placeholder {
			color: ${(p) => p.theme["base-500"]};
			font: ${(p) => p.theme["text-m"]};
		}

		&:focus {
			color: ${(p) => p.theme.white};
			outline-width: 1px;
		}
	}

	a {
		font: ${(p) => p.theme["text-link"]};
		color: ${(p) => p.theme.brand};
		text-decoration: none;
		height: fit-content;

		border-radius: 1px;
		outline-width: 1px;
		outline-offset: 3px;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;
