import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setScrolled(scrollTop > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${
				styles.paddingX
			} w-full flex items-center py-5 fixed top-0 z-20  ${
				scrolled ? "bg-primary" : "bg-transparent"
			}`}
		>
			<div className="w-full flex justify-between items-center max-2-7x1 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-10 h-10 object-contain" />
					<p className="text-white text-[18px] font-bold cursor-pointer">
						Devin&nbsp;
						<span className="sm:block hidden">| Development Expert</span>
					</p>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === Link.title ? "text-white" : "text-secondary"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
						>
							<a
								href={`#${link.id}`}
								className="text-white text-[18px] font-bold cursor-pointer"
							>
								{link.title}
							</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img
						src={toggle ? close : menu}
						alt="menu"
						className="w-6 h-6 object-contain cursor-pointer"
						onClick={() => setToggle(!toggle)}
					/>
				</div>
				<div
					className={`${
						toggle ? "flex" : "hidden"
					} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-2-[140px] z-10 rounded-xl`}
				>
					<ul className="list-none flex justify-end items-start flex-col gap-4">
						{navLinks.map((link) => (
							<li
								key={link.id}
								className={`${
									active === Link.title ? "text-white" : "text-secondary"
								} font-poppins font-medium cursor-pointer text-[16px]`}
								onClick={() => {
									setToggle(!toggle);
									setActive(link.title);
								}}
							>
								<a
									href={`#${link.id}`}
									className="text-white text-[18px] font-bold cursor-pointer"
								>
									{link.title}
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
