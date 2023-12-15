import React from "react";
import styled from "styled-components";
import {Github } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";
import { motion } from "framer-motion";
import "react-ionicons";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;

const IconLink = ({ href, delay, children, theme }) => (
  <motion.div
    initial={{ scale: 0 }}
    animate={{ scale: [0, 1, 1.5, 1] }}
    transition={{ type: "spring", duration: 1, delay }}
  >
    <a
      style={{ color: "inherit" }}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      {children(theme)}
    </a>
  </motion.div>
);

const SocialIcons = (props) => {
  return (
    <Icons>
      {/* GitHub Icon */}
      <IconLink 
        href="https://github.com/MundlapatiSivaSai"
        delay={1}
        theme={props.theme}
        children={(theme) => (
          <Github
            width={25}
            height={25}
            fill={theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        )}
      />

      {/* LinkedIn Icon */}
      <IconLink 
        href="https://www.linkedin.com/in/sivasai-mundlapati-727b77158"
        delay={1.2}
        theme={props.theme}
        children={() => (
          <span className="icon">
            <ion-icon name="logo-linkedin" style={{ fontSize: '25px', color: props.theme === "dark" ? DarkTheme.text : DarkTheme.body }}></ion-icon>
          </span>
        )}
      />

      {/* Generic Link Icon */}
      <IconLink 
        href="https://drive.google.com/file/d/1WmDSpYtlHr4Hrk8GXcAbT7wyTXLIkNXm/view?usp=sharing"
        delay={1.4}
        theme={props.theme}
        children={() => (
          <span className="icon">
            <ion-icon name="link-sharp" style={{ fontSize: '25px', color: props.theme === "dark" ? DarkTheme.text : DarkTheme.body }}></ion-icon>
          </span>
        )}
      />

      <Line
        color={props.theme}
        initial={{ height: 0 }}
        animate={{ height: "8rem" }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;