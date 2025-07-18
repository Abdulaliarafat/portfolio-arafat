import React, { Suspense } from 'react';
import Banner from './Banner';
import About from './About';
import WhatIProvide from './WhatIProvide';
import SkillsTechnologies from './SkillsTechnologies';
import EducationExperience from './EducationExperience';
import FeaturedProjects from './FeaturedProjects';
import Contact from './Contact';
import Loading from '../../SharedPage/Loading';


const Home = () => {
    return (
        <div>
            <Suspense fallback={<Loading></Loading>}>
                <Banner></Banner>
                <About></About>
                <WhatIProvide></WhatIProvide>
                <SkillsTechnologies></SkillsTechnologies>
                <EducationExperience></EducationExperience>
                <FeaturedProjects></FeaturedProjects>
                <Contact></Contact>
            </Suspense>
        </div>
    );
};

export default Home;