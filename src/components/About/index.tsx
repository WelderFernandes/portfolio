// ABOUT COMPOENENT - RENDER

import { AiFillInstagram, AiFillLinkedin, AiFillPhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
export default function About() {
	return (
		<div className="container px-8 mx-auto my-12 text-center">
			<h1 className="text-3xl mb-4 font-bold">Sobre min</h1>
			<p className="text-base font-light italic">
				Olá, Me chamo <strong>Welder</strong> e sou um desenvolvedor web.
			</p>
			<p className="text-base font-light italic">
				Eu gosto de desenvolver coisas que me ajudam a crescer e me ajudam a
				seguir meus sonhos.
			</p>
			<p className="text-base font-light  italic">
				Sou formado em Analise e Desenvolvimento de Sistemas pela Unisales do
				Espirito Santo.
			</p>
			<p className="text-base font-light italic">
				Trabalho como desenvolvedor web há mais de 5 anos.
			</p>
			<p className="text-base font-light italic dark:text-green-400">
				Meu objetivo é criar coisas que me ajudem a crescer e me ajudam a seguir
				meus sonhos.
			</p>
			<div
				className="flex 
							text-center
							justify-center
							flex-wrap my-8"
			>
				<div className="mx-6 my-4 w-36">
					<a
						href="https://www.instagram.com/weldernfernandes/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex flex-col justify-center content-center align-middle items-center"
					>
						<AiFillInstagram size={48} />
						<p>instagram</p>
					</a>
				</div>

				<div className="mx-6 my-4 w-18">
					<a
						href="mailto:welderx3@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="
						flex flex-col 
						justify-center 
						content-center 
						align-middle
						items-center
						"
					>
						<MdOutlineEmail size={48} />
						<p>Welderx3@gmail.com</p>
					</a>
				</div>

				<div className="mx-6 my-4 w-18">
					<a
						href="https://www.linkedin.com/in/welder-n-fernandes/"
						target="_blank"
						rel="noopener noreferrer"
						className="
						flex flex-col 
						justify-center 
						content-center 
						align-middle
						items-center
						"
					>
						<AiFillLinkedin size={48} />
						<p>Welder n Fernandes</p>
					</a>
				</div>

				<div className="mx-6 my-4 w-18">
					<a
						href="tel:+5527988217570"
						target="_blank"
						rel="noopener noreferrer"
						className="
						flex flex-col 
						justify-center 
						content-center 
						align-middle
						items-center
						"
					>
						<AiFillPhone size={48} />
						<p>+55 (27) 98821-7570</p>
					</a>
				</div>
			</div>
		</div>
	);
}
