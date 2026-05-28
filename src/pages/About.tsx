import styled from "styled-components";

/* ---------------- PAGE WRAPPER ---------------- */

const Page = styled.div`
    min-height: 100vh;
    color: var(--surface);
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 64px;
`;

/* ---------------- HERO ---------------- */

const Hero = styled.section`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const Name = styled.h1`
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -0.02em;
`;

const Tagline = styled.p`
    font-size: 18px;
    color: var(--text);
    max-width: 700px;
    line-height: 1.6;
`;

/* ---------------- SECTION ---------------- */

const Section = styled.section`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const SectionTitle = styled.h2`
    font-size: 22px;
    font-weight: 600;
    letter-spacing: -0.01em;
`;

const Divider = styled.div`
    height: 1px;
    width: 100%;
    background: var(--card);
`;

/* ---------------- EXPERIENCE ---------------- */

const ExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
`;

const ExperienceCard = styled.div`
    padding: 18px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Role = styled.div`
    font-weight: 600;
    font-size: 15px;
`;

const Company = styled.div`
    font-size: 13px;
    color: var(--muted);
`;

const Meta = styled.div`
    font-size: 12px;
    color: var(--muted);
`;

const Desc = styled.p`
    font-size: 13px;
    line-height: 1.5;
    color: var(--muted);
`;

/* ---------------- PROJECTS ---------------- */

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
    padding-bottom: 96px;
`;

const ProjectCard = styled.a`
    padding: 16px;
    border-radius: 14px;
    text-decoration: none;
    color: inherit;

    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;
    flex-direction: column;
    gap: 10px;

    transition: transform 180ms ease, border 180ms ease;

    &:hover {
        transform: translateY(-4px);
        border: 1px solid rgba(255, 255, 255, 0.18);
    }
`;

const ProjectTitle = styled.div`
    font-weight: 600;
    font-size: 15px;
`;

/* ---------------- ABOUT TEXT ---------------- */

const AboutText = styled.p`
    font-size: 15px;
    line-height: 1.7;
    color: var(--muted);
    max-width: 800px;
`;

/* ---------------- COMPONENT ---------------- */

export default function About() {
    return (
        <Page>
            <Container>
                {/* HERO */}
                <Hero>
                    <Name>Anthony DiGrigoli</Name>
                    <Tagline>
                        Full Stack Software Developer with a focus on Frontend, designing clean, accessible interfaces and building robust applications from front to back.
                    </Tagline>
                </Hero>

                <Divider />

                <Section>
                    <SectionTitle>About Me</SectionTitle>

                    <AboutText>
                        I’m a full stack developer focused on building clean, responsive, and user centered applications with a strong interest in turning ideas into real usable products. I enjoy working across the stack to solve problems end to end from designing interfaces to implementing backend logic and I’ve been especially focused on developing my own app projects to sharpen both my technical skills and product thinking. Outside of engineering I’m usually watching hockey and following the Rangers, hitting the gym, staying active through things like kayaking, and keeping fitness part of my routine. I also like winding down with movies and I bring a lot of that curiosity for storytelling, design, and experience into how I think about building software.
                    </AboutText>
                </Section>

                {/* EXPERIENCE */}
                <Section>
                    <SectionTitle>Experience</SectionTitle>

                    <ExperienceGrid>
                        <ExperienceCard>
                            <Role>Senior Associate - Software Engineering</Role>
                            <Company>Manhattan Strategies</Company>
                            <Meta>Aug 2024 - Present</Meta>
                            <Desc>
                                <ul style={{paddingLeft: 20}}>
                                    <li>Engineered award-winning, high-performance websites with React, JavaScript, Webflow, and GSAP, optimizing SEO and AEO strategies to increase visibility, engagement, and overall user experience.</li>
                                    <li>Directed internal and client-facing projects as team lead, managing timelines, scope, and deliverables, guiding team members through execution, and ensuring seamless delivery from kickoff through launch.</li>
                                    <li>Established standardized development workflows to improve cross-team consistency while leading the team within a Scrum-based Agile environment.</li>
                                    <li>Orchestrated full-stack application builds for worldwide real estate logistics organizations, Fortune 100 companies, and enterprise clients, integrating React, Next.js, JavaScript, and API-driven services.</li>
                                    <li>Automated lead management workflows by integrating frontend frameworks with Salesforce, HubSpot, and other platforms through Zapier, improving customer engagement and accelerating sales pipeline movement.</li>
                                </ul>
                            </Desc>
                        </ExperienceCard>

                        <ExperienceCard>
                            <Role>Lead Full Stack Developer</Role>
                            <Company>Azark</Company>
                            <Meta>Jul 2023 – Aug 2024</Meta>
                            <Desc>
                                <ul style={{paddingLeft: 20}}>
                                    <li>Led and managed the development process using React.js, NYC API, historical image databases, map APIs, and external application integrations to streamline the process to provide users a dashboard of property information pertaining to NYC buildings to assist in resolving their violations.</li>
                                    <li>Integrated custom full stack blog application to enable non-technical employees to create and publish blog posts across various internal websites with custom API endpoints created with Node.js, Express, and MongoDB.</li>
                                    <li>Developed data visualization application using NYC’s Geolocation API, NYC Open Data, TypeScript, and data object to word document processing tools to create a CPR (Comprehensive Property Report) in DOCX and PDF for specified buildings.</li>
                                    <li>Designed and deployed corporate sites and landing pages utilizing Figma, React, CSS, JavaScript, and Node.js in order to enhance client experience, brand visibility, and search engine optimization.</li>
                                </ul>
                            </Desc>
                        </ExperienceCard>

                        <ExperienceCard>
                            <Role>Full Sack Developer</Role>
                            <Company>Lifeline Media</Company>
                            <Meta>Oct 2022 - June 2023</Meta>
                            <Desc>
                                <ul style={{paddingLeft: 20}}>
                                    <li>Created websites for restaurants utilizing React, Node.js, CSS, and REST APIs to expand online presence and implement online ordering capabilities, leading to a 23% increase in overall business online activity and an average of over 50% increase in online orders.</li>
                                    <li>Crafted and implemented corporate websites and landing pages employing Figma, React, CSS, JavaScript, and Node.js to elevate client satisfaction, amplify brand presence, and optimize search engine performance.</li>
                                    <li>Oversaw the development process utilizing React.js, CSV to SQL technologies, NYC image databases, map API integrations, and Excel export features to streamline operations and provide users with a portfolio of properties within their work scope.</li>
                                </ul>
                            </Desc>
                        </ExperienceCard>

                        <ExperienceCard>
                            <Role>Freelance Developer</Role>
                            <Company>Independent</Company>
                            <Meta>2020 – Present</Meta>
                            <Desc>
                                <ul style={{paddingLeft: 20}}>
                                    <li><strong>Picturehouse441 | New York, NY</strong> Utilized Java, Web Servlets, and JSPs to create a custom full stack shop application, including a custom credit card processor built from the ground up.</li>
                                    <li>Initialized a native video chatting tool enabling online events to be viewed directly in the browser, along with a password protected ticket system to track user access to events.</li>
                                    <li><strong>Polr App – Helping college communities keep track of relevant events within social circles.</strong> Constructed a real time social media experience featuring live voting and dynamic photo posting using React Native, Firebase, MongoDB, Node.js, and CSS, designed to support personalized user interactions within a defined community.</li>
                                    <li><strong>Lifeline Chat – Getting users in touch with others at the click of a button.</strong> Constructed a live voting and dynamic photo posting system using React Native, Firebase, and CSS to create an ever changing social media feed that can be accessed and shared within a specific community.</li>
                                </ul>
                            </Desc>
                        </ExperienceCard>
                    </ExperienceGrid>
                </Section>

                {/* PROJECTS */}
                <Section>
                    <SectionTitle>Projects</SectionTitle>

                    <ProjectGrid>
                        {/* PROLOGIS */}
                        <ProjectCard href="https://groundbreakers.prologis.com" target="_blank">
                            <ProjectTitle>Groundbreakers</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://fedcapgroup.org/" target="_blank">
                            <ProjectTitle>The Fedcap Group</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://ipc.prologis.com" target="_blank">
                            <ProjectTitle>IPC</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.spotlightonpoverty.org/" target="_blank">
                            <ProjectTitle>Spotlight on Poverty</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://bts.prologis.com" target="_blank">
                            <ProjectTitle>BTS</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://groundbreakers.prologis.com/magazine" target="_blank">
                            <ProjectTitle>Groundbreakers Magazine</ProjectTitle>
                        </ProjectCard>

                        {/* MHTN */}
                        <ProjectCard href="https://manhattanstrategies.com" target="_blank">
                            <ProjectTitle>MHTN Site</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://bxcdigital.com" target="_blank">
                            <ProjectTitle>Boxcar Digital Site</ProjectTitle>
                        </ProjectCard>

                        {/* FEDCAP */}
                        <ProjectCard href="https://www.cwsnewengland.org/" target="_blank">
                            <ProjectTitle>Community Work Services</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://nytech.org" target="_blank">
                            <ProjectTitle>NYTA</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://civichall.org" target="_blank">
                            <ProjectTitle>Civic Hall</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://fedcapcanada.org" target="_blank">
                            <ProjectTitle>Fedcap Canada</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.eslonestar.org/" target="_blank">
                            <ProjectTitle>Easterseals Lone Star</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.singlestop.org/" target="_blank">
                            <ProjectTitle>Single Stop</ProjectTitle>
                        </ProjectCard>

                        {/* SHAPER */}
                        <ProjectCard href="https://shapercap.com" target="_blank">
                            <ProjectTitle>Shaper Capital</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://summit.shapercap.com" target="_blank">
                            <ProjectTitle>Shaper AI Summit</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://adelphi.ai" target="_blank">
                            <ProjectTitle>Adelphi AI</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://fractional.ai" target="_blank">
                            <ProjectTitle>Fractional AI</ProjectTitle>
                        </ProjectCard>

                        {/* OTHER */}
                        <ProjectCard href="https://www.prudentiasciences.com/" target="_blank">
                            <ProjectTitle>Prudentia Sciences Dashboard</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.bambergervlasto.com/" target="_blank">
                            <ProjectTitle>Bamberg & Vlasto</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://qnovo.com" target="_blank">
                            <ProjectTitle>Qnovo</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://joinact.org" target="_blank">
                            <ProjectTitle>ACT</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.fintechcouncil.org/" target="_blank">
                            <ProjectTitle>American Fintech Council</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://summit.fintechcouncil.org/" target="_blank">
                            <ProjectTitle>Fintech Summit</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.drbrownssoda.com/" target="_blank">
                            <ProjectTitle>Dr. Brown’s Soda</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://ai.americansecurityproject.org/" target="_blank">
                            <ProjectTitle>AI Imperative 2030</ProjectTitle>
                        </ProjectCard>

                        {/* PLACEHOLDERS */}

                        <ProjectCard href="https://www.hp.com/us-en/newsroom.html" target="_blank">
                            <ProjectTitle>HP News Room</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard>
                            <ProjectTitle>HP Newsletters</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://apexschool.com/" target="_blank">
                            <ProjectTitle>Apex Technical Schools</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.twp-nyc.org/" target="_blank">
                            <ProjectTitle>The Women’s Project</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://granitepathwaysnh.org/" target="_blank">
                            <ProjectTitle>Manchester and Seacoast Pathways</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.buildwithtact.org/" target="_blank">
                            <ProjectTitle>TACT</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.runwayofdreams.org/" target="_blank">
                            <ProjectTitle>Runway of Dreams</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.hongrp.com/" target="_blank">
                            <ProjectTitle>Honickman</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.havenstrategies.com/" target="_blank">
                            <ProjectTitle>Haven Strategies</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.fiuturx.com/" target="_blank">
                            <ProjectTitle>Fiutur</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.joesullivansecurity.com/" target="_blank">
                            <ProjectTitle>Joe Sullivan Security</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.ostroffassociates.com/" target="_blank">
                            <ProjectTitle>Ostroff Associates</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.prsa-sv.org/" target="_blank">
                            <ProjectTitle>PRSA Silicon Valley</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.cedarinnovation.org/" target="_blank">
                            <ProjectTitle>Cedar Innovation</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://www.plot2x.com/" target="_blank">
                            <ProjectTitle>Plot2x</ProjectTitle>
                        </ProjectCard>

                        <ProjectCard href="https://cipi.fedcapgroup.org/" target="_blank">
                            <ProjectTitle>CIPI</ProjectTitle>
                        </ProjectCard>

                    </ProjectGrid>
                </Section>
            </Container>
        </Page>
    );
}