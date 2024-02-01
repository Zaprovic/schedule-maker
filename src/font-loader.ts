import local from "next/font/local";

export const CircularStd = local({
	src: [
		{
			path: "../public/fonts/CircularStd-Light.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/CircularStd-Book.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/CircularStd-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/CircularStd-Bold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/CircularStd-Black.woff2",
			weight: "900",
			style: "normal",
		},
	],
	display: "swap",
	preload: true,
	variable: "--CircularStd-font",
});
