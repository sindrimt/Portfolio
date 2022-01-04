import React, { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";

import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import DayBgAnimation from "../components/BackgrooundAnimation/DayAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Scroll from "../components/Scroll/Scroll";
import ThreeObject from "../components/Threejs/ThreeObject";
import Model from "../components/Threejs/Model";

/**
 * npm run dev
 */

const Home = () => {
  return (
    <Layout>
      <Scroll />
      <Section grid>
        {/* <Model /> */}
        <Hero />
        {/* <BgAnimation /> */}
        {/* <Model /> */}
        <ThreeObject />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
