/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";
import TextFeature from "components/text-feature";

export default function Banner() {
  return (
    <section sx={styles.banner} id="ourstory">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Our Foot-Care Project
          </Heading>
          <Text as="p" variant="heroSecondary">
            Our Foot-Care Project is a humanitarian organization meant to help
            people who are experiencing painful feet due to overuse walk without
            pain again
          </Text>
        </Box>
        <Box sx={styles.contentBox}>
          <TextFeature
            subTitle={data.subTitle}
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
      </Container>
    </section>
  );
}

const data = {
  subTitle: "Introduction",
  title: "My interest in helping people walk goes back to my childhood.",
  description: (
    <div>
      My interest in helping people with disabilities began at a young age after seeing
      pictures of crippled children in a magazine.
      <br></br>
      <br></br>
      My career started at a vocational school where I learned the shoe repair trade.
While working as a shoe repair person I began studying Orthopedic Shoe
Technology (the study of prescription shoe modifications). Then to the study of
Pedorthics (the design, manufacture, modification and fit of footwear, shoes
and foot orthoses to alleviate problems caused by disease, overuse, congenital
condition or injury). Which led to the study of Orthotics (the design,
manufacture, modification and fit of braces). My titles include: Shoemaker –
OST, Orthopedic Shoe Technician - C.Ped., Certified Pedorthist – Registered
Orthotic Technician – and CO, Certified Orthotist.
      <br></br>
      <br></br>
      After many years designing, fabricating and fitting braces, my career came to an
end. I had been diagnosed with a brain tumor and needed immediate surgery to
remove the Schwannoma pressing on my brain stem. Some of the tumor had to
be radiated because it was too close to my jugular vein for resection. The good
news was that it was benign but I had lost my hearing on one side. The recovery
was long; I had difficulties swallowing, speaking, right arm weakness and balance
problems. I was 59.
      <br></br>
      <br></br>
      One day I was watching my husband doing a remodeling project. I have always
been amazed by his talent achieved through many years of experience as a
carpenter. I missed my career and I needed a project. We often had
conversations about our work and found there were similarities.
      <br></br>
      <br></br>
      Some of my most creative thoughts have occurred while standing in front of a
grinder. Over the years I have spent a lot of time: cutting, shaping, trimming,
beveling, gluing, ungluing, padding and grinding patient’s shoes and orthotics to
relieve discomfort and help them walk. The Arch Wing insert is a result of that
experience and Our Footcare Project is our purpose.
      <br></br>
      <br></br>
      OFP founder: SuzAnn
      <br></br>
      Cofounder: S. Jones
      <br></br>
      <br></br>
    </div>
  ),
};

const styles = {
  banner: {
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "70px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "36%",
      backgroundColor: "#D3D3D3",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "32%",
    },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      ".description": {
        pr: [0, null, 6, 7, 6],
      },
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
