import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-0 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Row className="pt-3 px-1">
          <SkillsTab skills={softSkills} isScrolled={isScrolled} />
        </Row>
        <Row className="pt-5 px-1">
          <p align="center">
            {hardSkills.map((skill, index) => (
              <SkillsImage
                url={skill.url}
                alt={skill.alt}
              />
            ))}
          </p>
        </Row>
      </Container>
    </Jumbotron>
  );
}

function SkillsImage({ url, alt }) {
  return (
      <img src={url} alt={alt} width="75" height="75" class="px-1"/> 
  );
}

export default Skills;
