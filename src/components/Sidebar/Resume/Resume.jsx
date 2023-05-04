import React from "react";

export default function Resume(props) {
	return (
		<div className="art-links-frame p-15-15">
			<a href={props.resume.url} className="art-link art-color-link" download>
				{props.resume.text} <i className="fas fa-download"></i>
			</a>
		</div>
	);
}
