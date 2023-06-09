import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ashes from "../public/Ashes.webp";
import gorkem from "../public/Gorkem.png";
import { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LinkIcon from "@mui/icons-material/Link";
import emailjs from "@emailjs/browser";
import React from "react";

export default function Home() {
  const [pageIsLoad, SetpageIsLoad] = useState<string>("menu");
  const [ActivePage, SetActivePage] = useState<string | void>();
  const [isFormSubmit, SetIsFormSubmit] = useState({
    activeMessage: false,
    Message: "",
  });

  const form = React.useRef(null);
  const Email = React.useRef<HTMLInputElement>(null);
  const Name = React.useRef<HTMLInputElement>(null);
  const MessageContent = React.useRef<any>(null);

  const Projects = [
    {
      id: 1,
      Name: "Splend-Shop",
      Link: "https://main--graceful-flan-8ed3f8.netlify.app/homepage",
      Details:
        "SplendShop is a basic e-commercial site that is designed and coded by me. I can tell that journey of becoming a React developer started by coding this web app, so the code may not be that clean but SplendShop is working and it improved me realy good to me.",
      CodeDetails:
        "I used ContextAPI, Firebase for authentication, MUI for some components and styles, some libraries for carousel and pagination, I used Local Storage to manage purchase and favorite Items",
    },
    {
      id: 2,
      Name: "To Do List",
      Link: "https://enchanting-tapioca-2145c3.netlify.app",
      Details:
        "This project was first case of a practicum (Patika - PopUpSmart) that user can Add/Delete/Edit to do list items, mark them as complated and list according to different situations ",
      CodeDetails:
        "I used a mockAPI to keep to do list data only, I know that the authentication system was not reliable and accurate because it kept the user data locally, but it was asked to do so in the study.",
    },
    {
      id: 3,
      Name: "Expense List",
      Link: "https://jade-baklava-7a2e68.netlify.app",
      Details:
        "Expense list is a basic project that user can Add new expenses with a title, amount and date. Then user can check his/her expenses listed and also a Bar Graph of them monthly.",
      CodeDetails:
        "React-Expense-List was developed using the React.js library.",
    },
    {
      id: 4,
      Name: "Popup Generator",
      Link: "https://storied-cobbler-6dd078.netlify.app",
      Details:
        "This project was final case of a practicum (Patika - PopUpSmart). the logic is providing a enviroment that any user can select a template and customize a popup screen and get the script code of the popup he/she customized",
      CodeDetails:
        "This project was built using TypeScript, Next.js, React, HTML, CSS, JavaScript, Tailwind, SASS.",
    },
    {
      id: 5,
      Name: "Rekt",
      Link: "https://jovial-cucurucho-0769b4.netlify.app/",
      Details:
        "REKT is a website developed for a company that provides information about the company's services and employees. The website provides a functional user interface, although the code structure may not be perfect.",
      CodeDetails:
        "Please note that the code structure of the website may not be optimal. As an amateur developer at the time of coding, I did my best to provide a functional user interface, but the code may not be structured in the most efficient manner. That being said, the website is easy to understand and modify, and I am committed to improving my skills and code quality in the future.",
    },
    {
      id: 6,
      Name: "Splend-Game",
      Link: "https://main--lambent-narwhal-f3b63d.netlify.app",
      Details: `The game consists of 16x16 (256 boxes) map. The values in the boxes you open add up and this is you score. The aim is to reach the target values in each round, you can see the target values on the counter. You can close 10 boxes that you open in each round. You can also reset the round if you feel unlucky, but beware, you cannot reset the game after you have used 5 of your closes. once your close rights run out, the point will add up to your total win counter (+1 for first target, +2 for second target, +3 for third target). you can also retreat once you reach first target. if you couldn't reach even first target, you will have a +1 point to your losses counter`,
      CodeDetails: "You can visit my GitHub profile to check it's code",
    },
    {
      id: 7,
      Name: "⭐ EightEleven",
      Link: "https://theighteleven.com/",
      Details: "The Eight&Eleven Web Page is also done by me",
      CodeDetails:
        "The web page I designed for EightEleven is currently in a static structure, providing an attractive platform that reflects the client's brand identity. The product data used on the website is currently hard-coded and included in the project. However, in the future stages of the project, backend integration will be performed, an admin panel will be added, and the site will be gradually enhanced with various features. For example, it will evolve into a dynamic site with functionalities like user registration and ordering. This web page has been developed using modern technologies. Context has been used for state management, and i18Next has been preferred for language localization. During the coding process, Next.js framework with TypeScript was used to ensure a more secure and robust code structure. This project showcases a carefully designed website example aimed at strengthening EightEleven's online presence and reflecting its brand value. Our future plans include adding dynamic features to increase user interaction on the website. This project in my portfolio serves as an example of what I can achieve with my web design and development skills in future projects.",
    },
    {
      id: 8,
      Name: "⭐ Vistras (Ongoing Project)",
      Link: "https://vistras.vercel.app/",
      Details:
        "Vistras is also a page that i am recently working on to improve my skills and use the features i learn",
      CodeDetails:
        "I have used Next.js, Typescript on this project. I am aiming to use firebase for authentication, save items datas (JSON and images for items). also i will use next api to create my endpoints and connect them to firebase endpoints.",
    },
  ];

  const sendEmailHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      MessageContent.current?.value !== "" &&
      Name.current?.value !== "" &&
      Email.current?.value !== "" &&
      form.current
    ) {
      emailjs
        .sendForm(
          "service_gktrxa2",
          "template_x9bpnrx",
          form.current,
          "Fj3Nx-NZLXGUPhan3"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Got your mail 😊",
      });
      if (Name.current && Email.current && MessageContent.current) {
        Name.current.value = "";
        Email.current.value = "";
        MessageContent.current.value = "";
      }
    } else if (Name.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Please Enter Your Name or Company Name",
      });
    } else if (Email.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Please Enter Valid E-mail",
      });
    } else if (MessageContent.current?.value === "") {
      SetIsFormSubmit({
        activeMessage: true,
        Message: "Mail Must Be At Least 10 Character",
      });
    }
  };

  const [ProjectDisplayed, SetProjectDisplayed] = useState<any>({});

  const ProjectDetailsHandler = (project: any) => {
    SetProjectDisplayed(project);
    console.log(ProjectDisplayed.Name === "⭐ EightEleven");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Gorkem Derin Alpaslan</title>
        <meta
          name="description"
          content="Gorkem Derin Alpaslan Portfolio Page"
        />
        <link rel="icon" href="/Ashes.webp" />
      </Head>
      <div className={styles.body_container}>
        <div className={styles.MainTitle}>PORTFOLIO</div>
        <div
          className={styles.SideLine}
          onClick={() => {
            SetActivePage("whyash");
            SetpageIsLoad("selected");
          }}
        >
          why website concept is ash?
        </div>
        <div className={styles.RefsWrapper}>
          <a href="https://www.instagram.com/gorkemddrn/">
            <InstagramIcon className={styles.RefImg} />
          </a>
          <a href="https://www.linkedin.com/in/gorkemderinalpaslan/">
            <LinkedInIcon className={styles.RefImg} />
          </a>
          <a href="https://github.com/gorkemAlpaslan">
            <GitHubIcon className={styles.RefImg} />
          </a>
        </div>
        <div className={styles.ashesWrapper}>
          <div id={styles.stars}></div>
          <div id={styles.stars2}></div>
          <div id={styles.stars3}></div>
        </div>

        <div className={styles.test}>
          <Image alt="Name" src={gorkem} className={styles.NameAsImg}></Image>
        </div>
        <div className={styles.titles}>
          <h2
            className={
              pageIsLoad === "menu"
                ? styles.Projectstitle
                : styles.ProjectstitleHidden
            }
            onClick={() => {
              SetActivePage("project");
              SetpageIsLoad("selected");
            }}
          >
            Projects
          </h2>
          <h2
            className={
              pageIsLoad === "menu"
                ? styles.Contacttitle
                : styles.ContacttitleHidden
            }
            onClick={() => {
              SetActivePage("contact");
              SetpageIsLoad("selected");
            }}
          >
            Contact
          </h2>
          <h2
            className={
              pageIsLoad === "menu"
                ? styles.Abouttitle
                : styles.AbouttitleHidden
            }
            onClick={() => {
              SetActivePage("about");
              SetpageIsLoad("selected");
            }}
          >
            About
          </h2>
        </div>
        <div className={styles.titlesMobile}>
          {pageIsLoad === "selected" && (
            <KeyboardArrowLeftIcon
              className={styles.arrowBack}
              onClick={() => {
                SetpageIsLoad("menu");
                SetProjectDisplayed({});
              }}
            />
          )}
          <h2
            className={
              ActivePage === "about" && pageIsLoad === "selected"
                ? styles.AbouttitleMobileActive
                : pageIsLoad === "menu"
                ? styles.AbouttitleMobileInActive
                : styles.titlesMobileHidden
            }
            onClick={() => {
              SetActivePage("about");
              SetpageIsLoad("selected");
            }}
          >
            About
          </h2>
          <h2
            className={
              ActivePage === "project" && pageIsLoad === "selected"
                ? styles.ProjectstitleMobileActive
                : pageIsLoad === "menu"
                ? styles.ProjectstitleMobileInActive
                : styles.titlesMobileHidden
            }
            onClick={() => {
              SetActivePage("project");
              SetpageIsLoad("selected");
            }}
          >
            Projects
          </h2>
          <h2
            className={
              ActivePage === "contact" && pageIsLoad === "selected"
                ? styles.ContacttitleMobileActive
                : pageIsLoad === "menu"
                ? styles.ContacttitleMobileInActive
                : styles.titlesMobileHidden
            }
            onClick={() => {
              SetActivePage("contact");
              SetpageIsLoad("selected");
            }}
          >
            Contact
          </h2>
        </div>
        {ActivePage === "about" && pageIsLoad === "selected" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <KeyboardArrowLeftIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></KeyboardArrowLeftIcon>
              <div>About</div>
            </div>
            <div className={styles.AboutContent}>
              I have studied Civil engineering (Bachelor degree) and Web Design
              & coding (associate degree) at college but since January 2022, i
              have been improving myself in the field of front end development
              (HTML, CSS, JavaScript, React JS and more). I have completed 10+
              projects so far by myself including this portfolio page and all of
              them shared publicly on my gitHub profile. Also my hosted projects
              can be visited at Projects page <br />
              <br />I am currently working freelance but looking for a full time
              job. If you are interested, you can send me an E-mail easily at
              Contact page or you can reach me via Instagram, LinkedIn (links
              below)
            </div>
          </div>
        )}
        {ActivePage === "whyash" && pageIsLoad === "selected" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <KeyboardArrowLeftIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></KeyboardArrowLeftIcon>
              <div>Why website concept is ash?</div>
            </div>
            <div className={styles.AboutContent}>
              Volcanic Ash scattered around as a result of the eruption of
              volcanoes and many minerals come to the surface from the depths of
              the ground. Thus, beneficial minerals and nutrients become
              available to living species. Although it may seem harmful at
              first, these ashes are very valuable for soil and plants. In the
              long run, these ashes provide the creation of perhaps the most
              productive agricultural areas on earth.
            </div>
          </div>
        )}
        {ActivePage === "project" && pageIsLoad === "selected" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <KeyboardArrowLeftIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                  SetProjectDisplayed({});
                }}
              ></KeyboardArrowLeftIcon>
              <div>Projects</div>
            </div>
            <div className={styles.ProjectList}>
              {Projects.map((project) => {
                return (
                  <div key={project.id}>
                    <div
                      className={
                        ProjectDisplayed.Name
                          ? styles.Hidden
                          : styles.ProjectListItem
                      }
                      onClick={() => {
                        ProjectDetailsHandler(project);
                      }}
                    >
                      <div>{project.Name}</div>
                    </div>
                  </div>
                );
              })}

              <div
                className={
                  ProjectDisplayed.Name
                    ? styles.projectDisplayIsActive
                    : styles.Hidden
                }
              >
                <div className={styles.ProjectTitle}>
                  <KeyboardArrowUpIcon
                    className={styles.BackIcon}
                    onClick={() => {
                      SetProjectDisplayed({});
                    }}
                  ></KeyboardArrowUpIcon>
                  <div className={styles.ProjectLink}>
                    {ProjectDisplayed?.Name}
                  </div>
                  <br />
                  <br />
                </div>
                <div
                  className={`${styles.ProjectDetails} ${
                    ProjectDisplayed.Name === "⭐ EightEleven" &&
                    styles.detailsSmall
                  }`}
                >
                  {ProjectDisplayed?.Details} <br />
                  <br />
                  {ProjectDisplayed?.CodeDetails}
                  <br />
                  <br />
                  <div className={styles.ProjectLinks}>
                    <LinkIcon className={styles.ProjectLinkIcon} />
                    {
                      <a href={ProjectDisplayed?.Link}>
                        Visit The Project Page
                      </a>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {ActivePage === "contact" && pageIsLoad === "selected" && (
          <div className={styles.PageIsLoad}>
            <div className={styles.PageTitle}>
              <KeyboardArrowLeftIcon
                className={styles.BackIcon}
                onClick={() => {
                  SetActivePage();
                  SetpageIsLoad("menu");
                }}
              ></KeyboardArrowLeftIcon>
              <div>Contact</div>
            </div>
            <form
              className={styles.ContactContent}
              ref={form}
              onSubmit={sendEmailHandler}
            >
              <div className={styles.UnderContactTitle}>
                You can reach me easily
              </div>
              {isFormSubmit.activeMessage === true && (
                <div>{isFormSubmit.Message}</div>
              )}
              <div>
                <div className={styles.PersonalInfoInput}>
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    ref={Name}
                  ></input>
                  <input
                    placeholder="E-mail"
                    type="email"
                    name="user_email"
                    ref={Email}
                  ></input>
                </div>
                <textarea
                  name="message"
                  placeholder="Enter your Message..."
                  className={styles.MessageInput}
                  ref={MessageContent}
                ></textarea>
              </div>
              <button type="submit" value="Send">
                Send
              </button>
              <div className={styles.ContactAlso}>
                Also you can check my accounts below :)
              </div>
            </form>
          </div>
        )}
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
}
