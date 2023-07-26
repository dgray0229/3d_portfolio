import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const ContactWrapper = () => {
	const formRef = useRef(null);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
	const handleSubmit = (e) => {
    e.preventDefault();
        setLoading(true);
        emailjs
					.sendForm(
						"service_61vbyjt",
						"template_oaudhr3",
						form,
						"OeNhn9gENAwReKGGP"
					)
					.then(
						(result) => {
							console.log(result.text);
							setLoading(false);
							setForm({
								name: "",
								email: "",
								message: "",
							});
						},
						(error) => {
							console.log(error.text);
							setLoading(false);
						}
					);
  };
	return (
		<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={`${styles.sectionSubText}`}>Get in touch</p>
				<h3 className={`${styles.sectionHeadText}`}>Contact</h3>
				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8"
				>
					<label for="name" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
              placeholder="What's your name?"
							value={form.name}
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label for="email" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="email"
							name="email"
              placeholder="What's your email?"
							value={form.email}
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
					<label for="message" className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<textarea
            rows="7"
							name="message"
              placeholder="What do you want to say?"
							value={form.message}
							onChange={handleChange}
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
						/>
					</label>
          <button type="submit" className="bg-tertiary py-4 px-6 outline-none w-fit rounded-lg text-white font-bold shadow-md shadow-primary">{loading ? 'Sending...' : 'Send'}</button>
				</form>
			</motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
		</div>
	);
};

const Contact = SectionWrapper(ContactWrapper, "contact");
export default Contact;
