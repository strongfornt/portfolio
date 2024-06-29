import { FaWindowClose, FaFacebookSquare, FaHome, FaUser, FaEnvelope } from "react-icons/fa";

import {
  AiFillHome,
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
} from "react-icons/ai";
import {
  SiSimilarweb,
  SiWebmoney,
  SiPhotobucket,
  SiFacebook,
} from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import { MdNoteAlt } from "react-icons/md";
import { BiSolidShoppingBagAlt } from "react-icons/bi";

export const Contact = [
  {
    icon: IoLocationSharp,
    title: "Kazirhat, Mehendiganj, Barisal",
    
  },
  {
    icon: IoMdCall,
    title: "+8801729327401",
    path: "tel:+8801729327401",
  },
  {
    icon: GrMail,
    title: "ahsanullah.mail2@gmail.com",
    path: "mailto:ahsanullah.mail2@gmail.com",
  },
  {
    icon: FaFacebookSquare,
    title: "Ahsan Ullah",
    path: "https://www.facebook.com/profile.php?id=100049665156482&mibextid=JRoKGi",
  },
];

export const navigation = [
    { title: "About ", href: "/aboutme" },
    { title: "Resume", href: "/services" },
  
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/contact" },
  ];
  
  export const sidebar = [
    {title:"Home", href: "/" ,icon:FaHome,},
    { title: "About me ", href: "/aboutme" ,icon:FaUser, },
    { title: "Resume", href: "/resume",icon:MdNoteAlt, },
  
    { title: "Portfolio", href: "/portfolio" , icon:BiSolidShoppingBagAlt, },
    { title: "Contact", href: "/contact",icon:FaEnvelope, },
  ];

export const portfolio = [
  {
    title:"DineEase (Hostel Management Website)",
    bg:"https://images.pexels.com/photos/4577715/pexels-photo-4577715.jpeg?auto=compress&cs=tinysrgb&w=600",
    LiveTitle:"Live Site" ,
    LiveLink:"https://hostel-management-30afb.web.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/hostel-management-client",
    ServerRepoTitle:"Server Site Repo",
    ServerRepoLink:"https://github.com/strongfornt/hostel-management-server"
  },
  {
    title:"TaskBud (Online Study Website)",
    bg:"https://images.pexels.com/photos/159618/still-life-school-retro-ink-159618.jpeg?auto=compress&cs=tinysrgb&w=600",
   
    LiveTitle:"Live Site" ,
    LiveLink:"https://onlinestudy-908ec.web.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/Task-Bud",
    ServerRepoTitle:"Server Site Repo",
    ServerRepoLink:"https://github.com/strongfornt/Task-bud-server"
  },
  {
    title:"TipTrove (Tourism Website)",
    bg:"https://images.pexels.com/photos/163185/old-retro-antique-vintage-163185.jpeg?auto=compress&cs=tinysrgb&w=600",
    LiveTitle:"Live Site" ,
    LiveLink:"https://tourism-spot-eeb38.web.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/TipTrove",
    ServerRepoTitle:"Server Site Repo",
    ServerRepoLink:"https://github.com/strongfornt/TipTrove-server"
  },
  {
    title:"RecipeFy (Recipe Sharing Website)",
    bg:"https://images.pexels.com/photos/4198378/pexels-photo-4198378.jpeg?auto=compress&cs=tinysrgb&w=600",
    LiveTitle:"Live Site" ,
    LiveLink:"https://recipe-sharing-50552.web.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/Recipes-client",
     ServerRepoTitle:"Server Site Repo",
    ServerRepoLink:"https://github.com/strongfornt/Recipes-server"
   
  },
  {
    title:"AzureAcres (Real Estate Website)",
    bg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZPeGlvQalc579qATbGpDsXHmz_TRUWIAkxg&s=600",
    LiveTitle:"Live Site" ,
    LiveLink:"https://assignmentnine-ecc54.web.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/AzureAcres",
   
  },
  {
    title:"BookHaven (Book Related Website)",
    bg:"https://images.pexels.com/photos/2846814/pexels-photo-2846814.jpeg?auto=compress&cs=tinysrgb&w=600",
    LiveTitle:"Live Site" ,
    LiveLink:"https://books-haven.netlify.app/",
    ClientRepoTitle:"Client Site Repo",
    ClientRepoLink:"https://github.com/strongfornt/BookHaven",
   
  },
  

]