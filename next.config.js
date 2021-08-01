const path = require("path");

const buildPath = (stringDirectory) =>
	path.resolve(__dirname + `/` + stringDirectory);

module.exports = {
	webpack: (config) => {
		config.resolve.alias["sonovate"] = buildPath("src");
		config.resolve.alias["atoms"] = buildPath("src/atoms");
		config.resolve.alias["particles"] = buildPath("src/particles");
		config.resolve.alias["sonovate-types"] = buildPath(
			"src/particles/api/generated/index.d.ts"
		);

		// Support SVG loading https://stackoverflow.com/a/55180310
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				test: /\.(js|ts)x?$/,
			},
			use: ["@svgr/webpack"],
		});

		return config;
	},
};
