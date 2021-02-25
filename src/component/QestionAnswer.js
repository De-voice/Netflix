import React, { useState } from "react";
import SubQestionAnswer from "./SubQestionAnswer";

function QestionAnswer() {
	return (
		<section className="accordion">
			<h1>Frequently Asked Questions</h1>
			<SubQestionAnswer qestion="What is Netflix?">
				<span className="child_h1">
					Netflix is a streaming service that offers a wide variety of
					award-winning TV shows, movies, anime, documentaries, and more on
					thousands of internet-connected devices. You can watch as much as you
					want, whenever you want without a single commercial – all for one low
					monthly price. There's always something new to discover and new TV
					shows and movies are added every week!
				</span>
			</SubQestionAnswer>

			<SubQestionAnswer qestion="How much does Netflix cost?">
				<span className="child_h1">
					Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
					streaming device, all for one fixed monthly fee. Plans range from
					₦2,900 to ₦4,400 a month. No extra costs, no contracts.
				</span>
			</SubQestionAnswer>

			<SubQestionAnswer qestion="Where can I watch?">
				<span className="child_h1">
					Watch anywhere, anytime, on an unlimited number of devices. Sign in
					with your Netflix account to watch instantly on the web at netflix.com
					from your personal computer or on any internet-connected device that
					offers the Netflix app, including smart TVs, smartphones, tablets,{" "}
					streaming media players and game consoles. You can also download your
					favorite shows with the iOS, Android, or Windows 10 app. Use downloads
					to watch while you're on the go and without an internet connection.
					Take Netflix with you anywhere.
				</span>
			</SubQestionAnswer>

			<SubQestionAnswer qestion="How do I cancel?">
				<span className="child_h1">
					Netflix is flexible. There are no pesky contracts and no commitments.
					You can easily cancel your account online in two clicks. There are no
					cancellation fees – start or stop your account anytime.
				</span>
			</SubQestionAnswer>

			<SubQestionAnswer qestion="What can I wtach on Netflix?">
				<span className="child_h1">
					Netflix has an extensive library of feature films, documentaries, TV
					shows, anime, award-winning Netflix originals, and more. Watch as much
					as you want, anytime you want.
				</span>
			</SubQestionAnswer>
		</section>
	);
}

export default QestionAnswer;
