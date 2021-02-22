import React from "react";
import img from "../assets/netflix1.png";
import img2 from "../assets/netflix3.jpg";
import img3 from "../assets/netflix4.png";
import SubMain from "./SubMain";

const Main = () => {
	return (
		<>
			<main>
				<SubMain
					title="Enjoy on your TV."
					description="Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more."
					src2={img}
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
					type="video/mp4"
				/>

				<SubMain
					title="Download your shows to watch offline."
					description="Save your favorites easily and always have something to watch."
					src2={img2}
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
					type="video/mp4"
					rtl
				/>

				<SubMain
					title="Watch everywhere."
					description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
					src2={img3}
					src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
					type="video/mp4"
				/>
			</main>
		</>
	);
};

export default Main;
