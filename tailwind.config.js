module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				shape: "#212121",
				gray: {
					light: "#535353",
				},
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				dm: ["DM Sans", "sans-serif"],
			},
			fontWeight: {
				light: "300",
				regular: "400",
				medium: "500",
				bold: "700",
			},
		},
	},
	plugins: [],
};
