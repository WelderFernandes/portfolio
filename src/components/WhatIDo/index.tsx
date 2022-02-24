import Image from "next/image";

export function WhatIDo() {
	return (
		<div className="flex flex-wrap md:justify-between text-gray-light font-bold justify-center">
			<div className="dark:bg-shape flex-col p-4 w-80 rounded-lg h-44 my-3">
				<Image
					src="/images/software.png"
					alt="Picture of the author"
					width={48}
					height={48}
				/>
				<p className="text-2xl my-3">Desenvolvimento de software</p>
			</div>

			<div className="dark:bg-shape flex-col p-4 w-80 rounded-lg h-44 my-3">
				<Image
					src="/images/software.png"
					alt="Picture of the author"
					width={48}
					height={48}
				/>
				<p className="text-2xl  my-3">Desenvolvimento de Sites</p>
			</div>

			<div className="dark:bg-shape flex-col p-4 w-80 rounded-lg h-44 my-3">
				<Image
					src="/images/software.png"
					alt="Picture of the author"
					width={48}
					height={48}
				/>
				<p className="text-2xl my-3">Web Designer</p>
			</div>
		</div>
	);
}
