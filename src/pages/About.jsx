import React from 'react';
import { Box, Typography, Card, CardContent, Link } from '@mui/material';
import { Helmet } from 'react-helmet';
import styles from '../styles/About.module.css';

function About() {
  return (
    <>
      {/* ===== SEO META TAGS ===== */}
      <Helmet>
        <title>About Bishnu Prasad Brahma | Intern – AediaX Tech Private Limited</title>

        <meta
          name="description"
          content="Learn about Amresh B, Founder & CEO of AediaX Tech Private Limited. An Indian full-stack software developer and entrepreneur building AI-driven enterprise and academic management systems."
        />

        <meta
          name="keywords"
          content="Bishnu Prasad Brahma, AediaX Tech, AediaX Founder, Indian Software Developer, AI Startup India, Full Stack Developer, Bhubaneswar Entrepreneur"
        />

        <meta name="author" content="AediaX Tech Private Limited" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Social Sharing) */}
        <meta property="og:title" content="About Amresh Bhuyan | AediaX Tech" />
        <meta
          property="og:description"
          content="Founder & CEO of AediaX Tech Private Limited, building AI-powered software, enterprise platforms, and scalable digital systems."
        />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="AediaX Tech Private Limited" />
        <meta property="og:url" content="https://aediax.com/about" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Amresh Bhuyan | Founder of AediaX Tech" />
        <meta
          name="twitter:description"
          content="Indian full-stack developer and entrepreneur leading AediaX Tech Private Limited."
        />
      </Helmet>

      {/* ===== PAGE CONTENT ===== */}
     <Box id={styles.aboutSection} className={styles.aboutContainer}>

      <Typography id={styles.aboutTitle} variant="h2" className={styles.title}>
        About Bishnu Prasad Brahma
      </Typography>

      <Typography id={styles.aboutSubtitle} variant="h5" className={styles.subtitle}>
        Intern, AediaX Tech Private Limited
      </Typography>

      {/* Biography */}
      <Typography id={styles.bioPara1} className={styles.bio}>
        Bishnu Prasad Brahma (born 8 October 2006) is an Indian full-stack software developer, technology entrepreneur,  and engineer from Bangura, Kamakshyanagar, Dhenkanal, Odisha (759018). He is a student of Information Science & Telecommunication, currently building his professional foundation as a software development intern at AediaX Tech Private Limited.
      </Typography>

      <Typography id={styles.bioPara2} className={styles.bio}>
        His career journey includes a diverse background in creative and technical roles, having previously served as a Graphics Design and Media Production Associate at Finessefleet Foundation and completed a technical internship at Edujunior. These experiences have allowed him to bridge the gap between  design and robust backend architecture, fostering a unique approach to product development.
      </Typography>

      <Typography id={styles.bioPara3} className={styles.bio}>
        Beyond his development work, Bishnu possesses a strong interest in analytical problem-solving , data analysis and system architecture. This perspective informs his approach to building robust, future-ready digital systems. 
      </Typography>

      {/* Cards */}
      <Box id={styles.cardsWrapper} className={styles.cardContainer}>

        {/* Professional Role */}
        <Card id={styles.professionalRoleCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.professionalRoleTitle} variant="h6" className={styles.cardTitle}>
              Professional Role
            </Typography>

            <Typography id={styles.professionalRoleText} className={styles.cardText}>
              Bishnu Prasad Brahma is currently sharpening his professional expertise through a software development internship at AediaX Tech Private Limited. His well-rounded background also includes experience as a Graphics Design and Media Production Associate at the Finessefleet Foundation and a prior internship at Edujunior, experiences that have allowed him to bridge the gap between technical backend development and creative digital production.
            </Typography>

  
          </CardContent>
        </Card>

        {/* Academic Background */}
        <Card id={styles.academicCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.academicTitle} variant="h6" className={styles.cardTitle}>
              Academic Background
            </Typography>

            <Typography id={styles.academicText} className={styles.cardText}>
              Bishnu Prasad is a B.Sc student in Information Science & Telecommunication(2024–2027). His academic journey reflects a balance between theoretical foundations and real-world application, with strong emphasis on software engineering principles, system design, and emerging technologies.
            </Typography>
          </CardContent>
        </Card>

        {/* Family & Values */}
        <Card id={styles.familyCard} className={styles.card}>
          <CardContent>
            <Typography id={styles.familyTitle} variant="h6" className={styles.cardTitle}>
              Family & Values
            </Typography>

            <Typography id={styles.familyText1} className={styles.cardText}>
              Bishnu Prasad  comes from a supportive and highly educated family that has been instrumental in shaping his professional trajectory. His father, Mr. Prasanta Kumar Brahma, provides a strong foundation of leadership and business insight, while his mother, Mrs. Babita Dalabehera, brings a balanced perspective rooted in academic and practical dedication.
            </Typography>

          </CardContent>
        </Card>

      </Box>
    </Box>
       </>
  );
}

export default About;
