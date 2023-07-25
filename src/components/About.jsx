import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 45, scale: 1, speed: 450 }}
					className="bg-tertiary rounded-[20px py-5 px-12 min-h-[280px] flex flex-col items-center justify-center"
				>
					<img src={icon} alt={title} className="w-[100px] h-[100px]" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const AboutWrapper = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview</h2>
			</motion.div>
			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-2-3xl leading-[30px]"
			>
				I am a full-stack software engineer with a passion for building
				beautiful, functional, and accessible web applications. I have
				experience working with a variety of technologies and frameworks,
				including React, Redux, Node.js, Express, PostgreSQL, and Sequelize. I
				am a quick learner and am always looking to expand my skill set.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

const About = SectionWrapper(AboutWrapper, "about");

export default About;