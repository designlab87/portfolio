
// Header data
export const myname = ""; // Your name
export const myphone = ""; // Your phone 
export const myemail = ""; // Your email

// Code data
export const codeBlock1 = ""; // Optional code to display
export const codeBlock2 = "";
export const codeBlock3 = "";
export const codeBlock4 = "";
export const codeBlock5 = "";
export const codeBlock6 = "";

// Resume
export const resumePath = ""; // The path to the directory with your resume

// Header data
export const inventory = ""; // A list of technologies

// Portfolio (GridBox) data
export const logoPath = ""; // A path to a directory of logos used by gridData
export const imgPath = ""; // A path to a directory of images used by gridData
export const gridData = [ // The gridData contains one object for each item in your portfolio of work
  {
    id: "", // Insert a unique id for this item
    logo: logoPath+"", // Insert the image filename
    fullImgs: [
      imgPath+"" // Insert the image filename, or more images as needed
    ],
    title: "", // The title of the work
    subtitle: "", // An optional subtitle
    body: "", // A list of technologies used
    fullbody: [ // An array of strings
      "<h1></h1>", // Each string should be in html format
      "<p></p>"
    ],
    link: { // A link and the text for the link
      text:"",
      link:""
    }
  }
];
