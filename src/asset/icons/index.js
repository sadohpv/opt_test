const OTPicon = ({ width = "28px", height = "28px" }) => {
	return (
		<svg
			width={width}
			height={height}
			xmlns="http://www.w3.org/2000/svg"
			fillRule="evenodd"
			strokeLinejoin="round"
			strokeMiterlimit="2"
			clipRule="evenodd"
			viewBox="0 0 32 32"
			fill="#65676b"
		>
			<path d="M10,2c-3.311,0 -6,2.689 -6,6c0,3.311 2.689,6 6,6c2.219,0 4.157,-1.207 5.195,-3l1.805,0c0.155,0 0.308,-0.035 0.447,-0.105l1.553,-0.778l1.553,0.778c0.139,0.07 0.292,0.105 0.447,0.105l4,0c0.265,0 0.52,-0.105 0.707,-0.293l2,-2c0.391,-0.39 0.391,-1.024 0,-1.414l-2,-2c-0.187,-0.188 -0.442,-0.293 -0.707,-0.293l-9.805,-0c-1.037,-1.793 -2.976,-3 -5.195,-3Zm0,3c1.656,-0 3,1.344 3,3c0,1.656 -1.344,3 -3,3c-1.656,0 -3,-1.344 -3,-3c0,-1.656 1.344,-3 3,-3Zm0,2c-0.552,0 -1,0.448 -1,1c0,0.552 0.448,1 1,1c0.552,0 1,-0.448 1,-1c0,-0.552 -0.448,-1 -1,-1Zm-4,9c-2.208,0 -4,1.792 -4,4l0,6c0,2.208 1.792,4 4,4l20,0c2.208,0 4,-1.792 4,-4l0,-6c0,-2.208 -1.792,-4 -4,-4l-20,0Zm1,4.586c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Zm7.586,-0c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Zm7.586,-0c0.256,-0 0.512,0.098 0.707,0.293l0.707,0.707l0.707,-0.707c0.39,-0.39 1.024,-0.39 1.414,-0c0.39,0.39 0.39,1.024 0,1.414l-0.707,0.707l0.707,0.707c0.39,0.39 0.39,1.024 0,1.414c-0.39,0.39 -1.024,0.39 -1.414,0l-0.707,-0.707l-0.707,0.707c-0.39,0.39 -1.024,0.39 -1.414,0c-0.39,-0.39 -0.39,-1.024 -0,-1.414l0.707,-0.707l-0.707,-0.707c-0.39,-0.39 -0.39,-1.024 -0,-1.414c0.195,-0.195 0.451,-0.293 0.707,-0.293Z"></path>
		</svg>
	);
};

const HomeIcon = ({ width = "28px", height = "28px" }) => {
	return (
		<svg
		width={width}
		height={height}
		xmlns="http://www.w3.org/2000/svg" 
		fill="#65676b"
		 viewBox="0 0 576 512">
			<path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
		</svg>
	);
};

export { OTPicon, HomeIcon };