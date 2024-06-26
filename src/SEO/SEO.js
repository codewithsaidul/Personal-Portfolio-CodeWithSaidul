import Head from 'next/head'
import React from 'react'

const SEO = ({pagename}) => {
  return (
    <Head>
    <title>CodeWithSaidul || {pagename}</title>
    {/* <!-- Meta Tags for SEO --> */}
    <meta name="description" content="Explore the portfolio of CodeWithSaidul, a Junior MERN Developer showcasing his first Next.js project. With basic knowledge of Node.js, Express.js, MongoDB, Next.js, and Framer Motion, and strong expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js, Saidul demonstrates his skills in full-stack web development. Explore his projects, blog posts, and contact information for potential collaborations." />
    <meta
      name="keywords"
      content="Next.js, Node.js, Express.js, MongoDB, Framer Motion, HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, Junior MERN Developer, Full-Stack Web Development, Portfolio, Saidul, Saidul Islam Rana, codewithsaidul, islam, rana, front end developer"
    />
    <meta name="author" content="CodeWithSaidul || Saidul Islam Rana" />
    <meta name="robots" content="index, follow" />

    {/* <!-- Open Graph Tags for Social Media --> */}
    <meta
      property="og:title"
      content="This is My Portfolio"
    />
    <meta
      property="og:description"
      content="Explore Saidul's first Next.js project, showcasing his skills in full-stack web development with Node.js, Express.js, MongoDB, and more."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.codewithsaidul.vercel.app" />
    <meta
      property="og:image"
      content="https://i.ibb.co/QPtbrVF/Code-With-Saidul-Home-Light.png"
    />

    {/* <!-- LinkedIn Tags for Social Media --> */}
    <meta property="linkedin:card" content="summary_large_image" />
    <meta
      property="linkedin:title"
      content="That is My Awesome Portfolio"
    />
    <meta
      property="linkedin:description"
      content="Discover Saidul's f project and explore his journey in web development."
    />
    <meta
      property="linkedin:image"
      content="https://i.ibb.co/QPtbrVF/Code-With-Saidul-Home-Light.png"
    />
    <meta
      property="linkedin:site"
      content="https://www.linkedin.com/in/codewithsaidul"
    />
  </Head>
  )
}

export default SEO