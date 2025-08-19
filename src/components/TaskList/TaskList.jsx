import React from "react";

export default function TaskList() {
	return (
		<div
			id="tasklist"
			className="overflow-x-auto mt-10 h-[55%] py-5 w-full  flex items-center justify-start gap-5 flex-nowrap"
		>
			<div className="flex-shrink-0 h-full w-[300px] rounded-xl bg-red-400 p-5">
				<div className="flex justify-between items-center">
					<h3 className="bg-red-600 px-3 py-1 rounded text-sm">High</h3>
					<h4 className="text-sm">20 feb 2025</h4>
				</div>
				<h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
				<p className="text-sm mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga omnis
					earum libero molestiae ducimus temporibus!
				</p>
			</div>
		</div>
	);
}
