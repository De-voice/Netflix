import React from "react";
import img from "../assets/netflix1.png";
import img2 from "../assets/netflix3.jpg";
import img3 from "../assets/netflix4.png";
import SubMain from "./SubMain";
import gif from "../assets/icon.gif"
import img4 from "../assets/boxshot.png"
import "../custom.css";
import QestionAnswer from "./QestionAnswer";

const Main = () => {
	return (
		<>
			<SubMain
				title="Enjoy on your TV. "
				description=" Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
						players, and more."
				src2={img}
				src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
				type="video/mp4"
			/>

			<SubMain
				title=" Download your shows to watch offline."
				description="Save your favorites easily and always have something to watch.  "
				src2={img2}
				imageMiddle
				// src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
				type="video/mp4">
				<div id="gif" className="children">
					<img src={img4} alt="" />
					<div>
						<h1>Stranger Things</h1>
						<h2>Downloading...</h2>
					</div>
					<img src={gif} alt="" />
				</div>
			</SubMain>

			<SubMain
				title="Watch everywhere."
				description="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more."
				src2={img3}
				src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
				type="video/mp4"
				imageLast
			/>
			<QestionAnswer/>
		</>
	);
};

export default Main;
