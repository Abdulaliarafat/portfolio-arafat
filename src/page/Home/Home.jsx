import React from 'react';
import Banner from './Banner';
import About from './About';
import WhatIProvide from './WhatIProvide';
import SkillsTechnologies from './SkillsTechnologies';
import EducationExperience from './EducationExperience';
import FeaturedProjects from './FeaturedProjects';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhatIProvide></WhatIProvide>
            <SkillsTechnologies></SkillsTechnologies>
            <EducationExperience></EducationExperience>
            <FeaturedProjects></FeaturedProjects>
        </div>
    );
};

export default Home;