import React from 'react';
import Hero from './hero';
import Experience from './experience';
import Skills from './skills';
import Projects from './projects';


const Main = ({ didScroll, handleToast, heroRef, expRef, skillsRef, projectRef }) => {
	return (
		<>
			<Hero didScroll={didScroll} handleToast={handleToast} heroRef={heroRef} />
			<Experience expRef={expRef} />
			<Skills skillsRef={skillsRef} />
			<Projects projectRef={projectRef} />
		</>
	);
};

export default Main;
