import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
	<VerticalTimelineElement
		contentStyle={{ background: "#1d1836", color: "#fff" }}
		contentArrowStyle={{ borderRight: "7px solid  #1d1836" }}
		date={experience.date}
		iconStyle={{ background: experience.iconBg }}
		icon={
			<div className="flex justify-center items-center w-full h-full">
				<img
					src={experience.icon}
					alt={experience.company_name}
					className="w-[100%] h-[100%] object-contain"
				/>
			</div>
		}
	>
  <div className="text-white text-[24px] font-bold">
    <h3>{experience.title}</h3>
    <p className="text-secondary text-[1rem] font-semibold" style={{margin: 0}}>{experience.company_name}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((desc, index) => (
        <li key={`experience.point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{desc}</li>
      ))}
    </ul>
  </div>
	</VerticalTimelineElement>
);
const ExperienceWrapper = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Experience</p>
				<h2 className={styles.sectionHeadText}>Work History</h2>
			</motion.div>
			<div className="mt-20 flex flex-col">
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={`experience-${index}`} experience={experience} />
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

const Experience = SectionWrapper(ExperienceWrapper, "experience");

export default Experience;
