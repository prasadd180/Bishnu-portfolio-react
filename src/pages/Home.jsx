import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import BishnuImage from "../assets/prasad.jpeg";
import styles from '../styles/Home.module.css';

/* Professional Roles */
const roles = [
  'UI/UX designer',
  'Web Developer',
  'Data Analyst',
  'Graphics Designer'
];

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentIndex = loopNum % roles.length;
    const fullText = roles[currentIndex];

    const handleTyping = () => {
      setDisplayText(prev =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <Box id={styles.homeSection} className={styles.homeContainer}>
      <Box id={styles.homeWrapper} className={styles.contentWrapper}>

        {/* LEFT CONTENT */}
        <Box id={styles.homeTextSection} className={styles.textSection}>
          <Typography
            id={styles.greetingText}
            variant="h5"
            className={styles.greeting}
          >
            Hello, I'm
          </Typography>

          <Typography
            id={styles.nameText}
            variant="h2"
            className={styles.name}
          >
            Bishnu Prasad
          </Typography>

          <Typography
            id={styles.roleText}
            variant="h4"
            className={styles.role}
          >
            <span id={styles.highlightText} className={styles.highlight}>
              {displayText}
            </span>
          </Typography>

          <Typography
            id={styles.descriptionText}
            variant="body1"
            className={styles.description}
          >
          I am a dedicated student of Information Science and Telecommunication at 
            <strong> Gangadhar Meher University</strong>.
            Driven by a passion for architecting seamless software systems that bridge the gap between complex technical infrastructure and intuitive, user-centric design. Focused on building robust, scalable applications where functionality meets a refined user experience.
          </Typography>

          <Button
            id={styles.moreButtonId}
            variant="contained"
            href="/about"
            className={styles.moreButton}
          >
            More About Me
          </Button>
        </Box>

        {/* RIGHT CONTENT */}
        <Box id={styles.homeImageSection} className={styles.imageSection}>
          <Paper
            elevation={10}
            id={styles.imagePaper}
            className={styles.imageContainer}
          >
            <img
              id={styles.profileImg}
              src={BishnuImage}
              alt="Bishnu"
              className={styles.profileImage}
            />
          </Paper>
        </Box>

      </Box>
    </Box>
  );
}

export default Home;
