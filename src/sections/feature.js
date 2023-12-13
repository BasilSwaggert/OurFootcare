/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/flip-forward-energy-svgrepo-com.svg';
import Partnership from 'assets/feature/arch-svgrepo-com.svg';
import Subscription from 'assets/feature/set-square-measure-svgrepo-com.svg';
import Support from 'assets/feature/email-mail-svgrepo-com.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Features of Our Arch Pad',
    title: 'Reversible',
    text:
      "It's reversible - it can be used in either right or left shoe. IMPORTANT: Letters R/L faces upwards",
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Get in Contact to Try It Out',
    title: 'Reduce Arch Collapse',
    text:
      'Our Arch Wing has a high instep flange for more keystone support, to reduce arch collapse.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Learn about our Story',
    title: 'Greater Comfort',
    text:
      'The heel extension reaches the full length of the arch, thus allowing greater comfort through the day.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'What People are Saying',
    title: 'Contact Us',
    text:
      'Let us know your story at OurFootcareProject@gmail.com',
  },
];

export default function Feature() {
  return (
   <section sx={{ variant: 'section.feature'}} id='pricing'>
     <Container>
       <SectionHeader
        slogan="Innovative Inserts"
        title="Unique Features of Our Arch Wing Insert:"
       />
       <Grid sx={styles.grid}>
         {data.map((item) => (
           <FeatureCard
            key={item.id}
            src={item.imgSrc}
            alt={item.altText}
            title={item.title}
            text={renderTextWithBold(item.text)}
           />
         ))}
       </Grid>
     </Container>
   </section>
  );
}

const renderTextWithBold = (text) => {
  return (
    <p>
      {text.split('IMPORTANT:').map((part, index) => (
        <React.Fragment key={index}>
          {index === 0 ? (
            part
          ) : (
            <strong key={index}>{part}</strong>
          )}
        </React.Fragment>
      ))}
    </p>
  );
};

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
