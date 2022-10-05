// Header data
export const myname = "Seth Watson";
export const myphone = "603.674.1040";
export const myemail = "sethwatson1976@gmail.com";

// Code data
export const codeBlock1 = "// Load the Portfolio Page...";
export const codeBlock2 = "import React from 'react';";
export const codeBlock3 = "// Enable Resume Download...";
export const codeBlock4 = "const SethWatson = ( businessChallenges ) => { return <FunctionalComponents />; };";
export const codeBlock5 = "const Portfolio = ( aFewNoteworthyProjects ) => { // Queue up a few noteworthy projects...";
export const codeBlock6 = "}; export default aFewNoteworthyProjects;";

// Resume
export const resumePath = "/portfolio/assets/resume/Seth_Watson_resume.pdf";

// Header data
export const inventory = "react \u2022 svg \u2022 data visualization \u2022 javascript \u2022 redux \u2022 ui/ux \u2022 html \u2022 css \u2022 ecommerce \u2022 php \u2022 mysql \u2022 docker \u2022 git \u2022 agile \u2022 human-centered \u2022 full-stack";

// Portfolio (GridBox) data
export const logoPath = "/portfolio/assets/logos/";
export const imgPath = "/portfolio/assets/img/";
export const gridData = [
  { // Assessment system
    id: "g1",
    logo: logoPath+"tbkLogo.jpg",
    fullImgs: [
      imgPath+"tbk1.jpg",
      imgPath+"tbk2.jpg",
      imgPath+"tbk3.jpg"
    ],
    title: "Assessment system",
    subtitle: "Full-Stack Development, Data Visualization",
    body: "Custom SVG Data Visualizations \u2022 Database Architecture \u2022 UI/UX Design \u2022 User Testing \u2022 API Integrations \u2022 Website Design \u2022 Branding \u2022 Content Creation",
    fullbody: [
      "<h1>Project:</h1>",
      "<p>Assessment system designed for preparing engaged couples for marriage.</p>",
      "<h1>Skills</h1>",
      "<p>Custom SVG Data Visualizations \u2022 Database Architecture \u2022 UI/UX Design \u2022 User Testing \u2022 API Integrations \u2022 Website Design \u2022 Branding \u2022 Content Creation</p>",
      "<h1>Details:</h1>",
      "<p>This project required full-stack development, content creation, branding, UI/UX design as well as a dynamically generated PDF report. The 40 page PDF report has numerous custom designed data visualizations and custom text that auto-generate based on the resulting data from the assessment.</p>",
      "<p>For UI/UX design and development, this project involved leading the design team, wireframing and prototyping, user testing, and design process management.</p>",
      "<p>Front end development involved implementing a fast, responsive design for multiple device targets, and complex assessment form interfaces.</p>",
      "<p>Back end development involved relational database design, server side MVC framework, task and event driven automation, encryption and authentication, API integrations, and data visualizations rendered server-side for PDF.</p>"
    ],
    link: {
      text:"Visit Site to view sample PDF",
      link:"https://tobeknown.com"
    }
  },
  { // Financial calculator suite
    id: "g6",
    logo: logoPath+"finCalcLogo.jpg",
    fullImgs:[
      imgPath+"wi.jpg",
      imgPath+"wi1.jpg",
      imgPath+"wi2.jpg",
      imgPath+"wi3.jpg",
      imgPath+"wi4.jpg"
    ],
    title: "Financial calculator suite",
    subtitle: "Full-Stack Development, Data Visualization",
    body: "Full-Stack Development \u2022 Custom SVG Data Visualization \u2022 Highcharts \u2022 UI/UX Design \u2022 PDF Reports",
    fullbody:[
      "<h1>Project</h1>",
      "<p>Financial calculator suite</p>",
      "<h1>Skills</h1>",
      "<p>Full-Stack Development \u2022 Custom SVG Data Visualization \u2022 Highcharts \u2022 UI/UX Design \u2022 PDF Reports</p>",
      "<h1>Details</h1>",
      "<p>This project involved over 40 financial calculators to illustrate various financial concepts. The challenge here was to create reusable, responsive UI that would work for all the different inputs and resulting data visualizations on all devices.</p>"
    ],
    link: {
      text:"",
      link:""
    }
  },
  { // ExpenseTracker
    id: "g3",
    logo: logoPath+"expLogo.jpg",
    fullImgs:[
      imgPath+"expTracker.jpg"
    ],
    title: "ExpenseTracker",
    subtitle: "A React Class Project",
    body: "React \u2022 Components \u2022 Props \u2022 State \u2022 Lists \u2022 Event Handling \u2022 Lifting Up State",
    fullbody:[
      "<h1>Project:</h1>",
      "<p>A React Class Project</p>",
      "<h1>Skills</h1>",
      "<p>React \u2022 Components \u2022 Props \u2022 State \u2022 Lists \u2022 Event Handling \u2022 Lifting Up State</p>",
      "<h1>Details:</h1>",
      "<p>This fully functional React UI was part of a comprehensive React course. This UI employs most of the main concepts of React. You can add new expenses and filter them by year to see your results.</p>",
      "<h1>Under Development!</h1>",
      "<p>I am currently working on hooking this tracker up to Google Sheets via the <a href='https://www.npmjs.com/package/react-google-sheets'>react-google-sheets</a> package. Stay tuned for the finished product!</p>"
    ],
    link: {
      text:"View on Github",
      link:"https://github.com/designlab87/expense-tracker"
    }
  },
  { // A reusable Dev Portfolio
    id: "g4",
    logo: logoPath+"portfolioLogo.jpg",
    fullImgs:[
      imgPath+"portfolio.jpg"
    ],
    title: "A reusable Dev Portfolio",
    subtitle: "React Development",
    body: "React \u2022 Components \u2022 Props \u2022 State \u2022 Lists \u2022 Event Handling",
    fullbody:[
      "<h1>Project:</h1>",
      "<p>A React Portfolio</p>",
      "<h1>Skills</h1>",
      "<p>React \u2022 Components \u2022 Props \u2022 State \u2022 Lists \u2022 Event Handling</p>",
      "<h1>Details:</h1>",
      "<p>This portfolio website loads all of it's data via JSON from it's <code>/src/Constants/Constants.js</code> file. I implemented this in React using the <a href='https://react-bootstrap.github.io'>react-bootstrap</a> package. It implements clean code, and an easy route to customize your own dev portfolio page.</p>"
    ],
    link: {
      text:"View on Github",
      link:"https://github.com/designlab87/portfolio"
    }
  },
  { // Igniter Strategies
    id: "g5",
    logo: logoPath+"igniterLogo.jpg",
    fullImgs:[
      imgPath+"igniter1.jpg",
      imgPath+"igniter2.jpg",
      imgPath+"igniter3.jpg"
    ],
    title: "Igniter Strategies",
    subtitle: "Full-Stack Development",
    body: "Full-Stack Development \u2022 Database Architecture \u2022 Data Visualization \u2022 UI/UX Design \u2022 API Integrations \u2022 Knowledgebase Documentation \u2022 Educational/Course Development \u2022 Branding \u2022 Content Creation \u2022 Highcharts",
    fullbody:[
      "<h1>Project</h1>",
      "<p>Sales tracking/compensation system</p>",
      "<h1>Skills</h1>",
      "<p>Full-Stack Development \u2022 Database Architecture \u2022 Data Visualization \u2022 UI/UX Design \u2022 API Integrations \u2022 Knowledgebase Documentation \u2022 Educational/Course Development \u2022 Branding \u2022 Content Creation \u2022 Highcharts</p>",
      "<h1>Details</h1>",
      "<p>As the Lead Developer and Creative Director for Igniter Strategies, I developed a suite of applications designed to help small, independent and captive insurance agencies run their businesses and manage their teams.</p>",
      "<p>I worked at Igniter Strategies over 8 years, building and managing their applications and information systems, as well as developing training couse content for Igniter's live training schedule.</p>",
      "<p>Front end development involved implementing a fast, responsive design for multiple device targets, complex interfaces for large data sets, and numerous interactive data visualizations.</p>",
      "<p>Back end development involved relational database design, server side MVC code framework, task and event driven automation, encryption and authentication, and API integrations.</p>"
    ],
    link: {
      text:"Go to Site",
      link:"https://igniterstrategies.com/"
    }
  },
  { // Inventory sync system
    id: "g7",
    logo: logoPath+"wbLogo.jpg",
    fullImgs:[
      imgPath+"wb.png",
    ],
    title: "Inventory sync system",
    subtitle: "API Design",
    body: "API Design \u2022 Full-Stack Development \u2022 WP Plugin",
    fullbody:[
      "<h1>Project</h1>",
      "<p>Inventory sync system</p>",
      "<h1>Skills</h1>",
      "<p>API Design \u2022 Full-Stack Development \u2022 WP Plugin</p>",
      "<h1>Details</h1>",
      "<p>WB Liquors has stores across Texas and needed a way to sync their in-store inventory system to their new Wordpress website. The data sync system involved an automated process that syncs incoming data multiple times per day and posts website sales data back to the in-store inventory system for fulfillment. A WP Plugin was also created to log and administer the sync process.</p>"
    ],
    link: {
      text:"Go to site",
      link:"https://wbliquors.com/"
    }
  },
  { // Trip Planner
    id: "g2",
    logo: logoPath+"SARWLogo.jpg",
    fullImgs:[
      imgPath+"sariver.png",
      imgPath+"sariver2.png",
      imgPath+"sariver3.png",
      imgPath+"sariver4.png"
    ],
    title: "Trip Planner",
    subtitle: "Website Plugin",
    body: "UI/UX Design \u2022 Maps API \u2022 User Testing \u2022 Dynamic PDF Creation",
    fullbody: [
      "<h1>Project:</h1>",
      "<p>Trip Planner plugin for Wordpress</p>",
      "<h1>Skills</h1>",
      "<p>UI/UX Design \u2022 Maps API \u2022 User Testing \u2022 Dynamic PDF Creation</p>",
      "<h1>Details:</h1>",
      "<p>This Wordpress plugin was built for the San Antonio Riverwalk's new website. The plugin allows the an end user to plan their trip to the riverwalk by exploring and learning about member businesses, seeing them and their details on a map of the area, and adding them to an itinerary that they create on the fly and download to PDF.</p>",
      "<p>The settings for the website administrator allow adding in a Google Maps API Key, getting the shortcodes to display the trip planner, and setting the order of the member post category display within the tool.</p>",
      "<p>Development involved Wordpress plugin creation, responsive UI development, and dynamic PDF generation.</p>"
    ],
    link: {
      text:"Go to Site",
      link:"https://www.thesanantonioriverwalk.com/plan-your-trip/"
    }
  },
  { // Real Estate Investment Network
    id: "g8",
    logo: logoPath+"awn.jpg",
    fullImgs:[
      imgPath+"awn1.jpg",
      imgPath+"awn2.jpg",
      imgPath+"awn3.jpg"
    ],
    title: "Real Estate Investment Network",
    subtitle: "Full-Stack Development, Electron Desktop App",
    body: "Full-Stack Development \u2022 Electron Desktop App \u2022 UI/UX Design \u2022 Branding \u2022 Content Creation",
    fullbody:[
      "<h1>Project</h1>",
      "<p>Ascend Wealth Network</p>",
      "<h1>Skills</h1>",
      "<p>Full-Stack Development \u2022 Electron Desktop App \u2022 UI/UX Design \u2022 Branding \u2022 Content Creation</p>",
      "<h1>Details</h1>",
      "<p>This project consisted of numerous complex financial and investment calculators, a user forum where the members can converse and share documents, and some administrative roles. A desktop application was also required for certain often used calculators, built with Electron.</p>",
      "<p>For UI/UX design and development, this project involved leading the design team, wireframing and prototyping, user testing, and design process management.</p>",
      "<p>Front end development involved implementing a fast, responsive design for multiple device targets, complex interfaces, numerous interactive data visualizations, and client-side PDF reports.</p>",
      "<p>Back end development involved relational database design, server side MVC code framework, task and event driven automation, encryption and authentication, and API integrations.</p>"
    ],
    link: {
      text:"View Electron App on Github",
      link:"https://github.com/designlab87/rental-analyzer"
    }
  },
  { // Meal Ordering Application
    id: "g9",
    logo: logoPath+"foodLogo.jpg",
    fullImgs:[
    ],
    title: "COMING SOON: Meal Ordering Application",
    subtitle: "React Development",
    body: "React \u2022 Redux \u2022 Shopping Cart \u2022 Effects \u2022 Reducers \u2022 Optimization \u2022 Async/Await \u2022 Custom Hooks",
    fullbody:[
      "<h1>Project</h1>",
      "<p>Meal Ordering Application</p>",
      "<h1>Skills</h1>",
      "<p>React \u2022 Redux \u2022 Shopping Cart \u2022 Effects \u2022 Reducers \u2022 Optimization \u2022 Async/Await \u2022 Custom Hooks</p>",
      "<h1>Details</h1>",
      "<p>I am in the process of building this application which will be a fully functioning meal ordering app. More to come on this, so stay tuned! I am planning to have the full project completed before the end of 2022!</p>"
    ],
    link: {
      text:"View my Progress on Github",
      link:"https://github.com/designlab87/meal-order-app"
    }
  }
];
