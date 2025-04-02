const config = {
  title: "Emmanuel Owouko | Web Developer",
  description: {
    long: "Explore the portfolio of Emmanuel, a Web Developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short: 
      "Discover the portfolio of Emmanuel, a Web Developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Emmanuel",
    "portfolio",
    "web developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Emmanuel Owouko",
  email: "emmanuelowouko@gmail.com",
  site: "https://emmanuelowouko.vercel.app",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/emmanuelowouko/",
    github: "https://github.com/emmanuelish",
  },
};
export { config };
