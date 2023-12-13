/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid, Box, Image } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import BannerImg from 'assets/OurFootCareLogo.jpg';


const data = [
  {
    id: 1,
    altText: 'Features of Our Arch Pad',
    title: 'Are you experiencing foot pain such as arch pain, heel pain, or aching tired feet?',
    text:
      'Our Arch Wing DIY inserts may help.',
  },
  {
    id: 2,
    altText: 'Get in Contact to try it out',
    title: 'Not sure what to do first?',
    text:
      "Because there are so many products on the market that are too expensive to try, especially if they don't work.",
  },
  {
    id: 3,
    altText: 'Learn about our Story',
    title: "Don't have health insurance and would like to see a doctor, but can't afford it?",
    text:
      'Try Our Arch Wing DIY kit first to see if it may help.',
  },
  {
    id: 4,
    altText: 'See what people have to say',
    title: 'How do I Try Our Arch Wing Inserts',
    text:
      'Email us at OurFootcareProject@gmail.com with your story.',
  },
];

export default function KeyFeature() {
  return (
   <section sx={{ variant: 'section.KeyFeature'}} id="feature">
     <Container>
       <SectionHeader
        slogan="What's the buzz about Our Arch Pad?"
        title="Our Footcare Project"
       />

       <Grid sx={styles.grid}>
         {data.map((item) => 
          <FeatureCardColumn
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
          />
         )}

       </Grid>
     </Container>
          <Box sx={styles.banner.imageBox}>
          <Image src={BannerImg} alt='banner'/>
          
          

        </Box>

   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
    
  },
  banner: {
  imageBox: {
      justifyContent: 'center',
      textAlign: 'center',
      display: 'inline',
      mb: [0, null, -6, null, null, '-40px', null, 1],
      img: {
        position: 'center',
        height: [300, 'auto'],
        width: [300, 'auto'],
        aspectRatio: 1,
      },
    },
  }
};
