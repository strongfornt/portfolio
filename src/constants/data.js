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