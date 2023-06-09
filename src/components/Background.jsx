import React from "react";

export default function Background(props) {
	return (
		//top background
		<div
			className="art-top-bg"
			style={{
				backgroundImage: "url(" + props.background.current + ")"
			}}
		>
			{/* overlay */}
			<div className="art-top-bg-overlay"></div>
		</div>
	);
}
