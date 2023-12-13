/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Features of Our Arch Pad',
    title: 'Features of Our Arch Pad',
    text:
      'What does it do?',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Get in Contact to Try It Out',
    title: 'Get in Contact to Try It Out',
    text:
      'Reach out for samples to give it a try!',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Learn about our Story',
    title: 'Our Story',
    text:
      'Learn where the idea came from and how we got here.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'What People are Saying',
    title: 'Donations',
    text:
      'Make a donation:',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}} id='pricing'>
     <Container>
       <SectionHeader
        slogan="Innovative Orthotics"
        title="Approachable Custom Orthotics"
       />
       <Grid sx={styles.grid}>
         {data.map((item) => (
           <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={item.text}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
