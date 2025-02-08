import { BsMailbox } from "react-icons/bs";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "SASS",
    image: "sass.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "WordPress",
    image: "wordpress.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Wix",
    image: "wix.png",
    width: 70,
    height: 70,
  },
] as const;

export const SOCIALS = [
  {
    name: "Contact",
    icon: BsMailbox,
    link: "#contact",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Django",
    image: "django.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Nuxt",
    image: "nuxt.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "AI",
    image: "machine-learning.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Blockchain",
    image: "blockchain.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 30,
    height: 30,
  },
  {
    skill_name: "XD",
    image: "xd.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Ps",
    image: "ps.png",
    width: 50,
    height: 50,
  },
  {
    skill_name: "Ai",
    image: "ai.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "地域の美容院",
    description:
      '女性らしいデザイン',
    image: "/projects/salon.png",
    link: "https://bans-bd.jp/",
  },
  {
    title: "大手会社",
    description:
      '大手らしい新しいデザイン',
    image: "/projects/recruit.png",
    link: "https://recruit.sas-com.com/",
  },
  {
    title: "配送業者",
    description:
      '力強く男らしいイメージ',
    image: "/projects/butsuryu.png",
    link: "https://www.sanyu-butsuryu.com/",
  },
  {
    title: "保育園",
    description:
      'イラスト多様しグラフィカルなイメージ',
    image: "/projects/midorigaoka.png",
    link: "https://www.midorigaoka-hoiku.com/",
  },
  {
    title: "スポーツジム",
    description:
      '躍動感あるイメージ',
    image: "/projects/arrowz.png",
    link: "https://www.sports-science.co.jp/arrowz-gym/",
  },
  {
    title: "地域のカフェ",
    description:
      'ポップな地域カフェのイメージ',
    image: "/projects/caferob.png",
    link: "https://caferob.com/",
  },  
  {
    title: "地域の病院",
    description:
      '信頼感のある地域感',
    image: "/projects/takedc.png",
    link: "https://www.takedc.com/",
  },
  {
    title: "職人系",
    description:
      '堅さ、信頼さ',
    image: "/projects/marutoku.png",
    link: "https://www.marutoku-tk.co.jp/",
  },
  {
    title: "楽商",
    description:
      'アプリ・ソフトウェア',
    image: "/projects/rakusyo.png",
    link: "https://www.rakusyo.jp/",
  },
  {
    title: "Act（アクトチェア）",
    description:
      'インテリア・雑貨',
    image: "/projects/itoki.png",
    link: "https://www.itoki.jp/",
  },
  {
    title: "みんなの発酵BLEND",
    description:
      'キッチン・料理・レシピ',
    image: "/projects/hakko.png",
    link: "https://www.hakko-blend.com/",
  },
  {
    title: "Y-YACHT STORE &(COOK)",
    description:
      'キッチン・料理・レシピ',
    image: "/projects/yacht.png",
    link: "https://store.y-yacht.co.jp/",
  },
  {
    title: "地味弁",
    description:
      'キッチン・料理・レシピ',
    image: "/projects/jimiben.png",
    link: "https://jimiben.com/",
  },
  {
    title: "wofa | 里山農業を、心うごく世界に",
    description:
      'コーポレートサイト・事務所',
    image: "/projects/wofa.png",
    link: "https://wofa.jp/",
  },
  {
    title: "grav bicycle",
    description:
      'レジャー・アウトドア',
    image: "/projects/gravbicycle.png",
    link: "https://gravbicycle.com/",
  },
  {
    title: "Ork「いなか、なかなか」",
    description:
      'レジャー・アウトドア',
    image: "/projects/hirugano.png",
    link: "https://ork-hirugano.co.jp/",
  },
  {
    title: "ナカジマ薬局",
    description:
      '病院・医療・薬品',
    image: "/projects/nakajima.png",
    link: "https://www.nakajima-phar.co.jp/",
  },
  {
    title: "帯広居酒屋「串焼き・創作料理　よにき」",
    description:
      '飲食・レストラン・カフェ',
    image: "/projects/yoniki.png",
    link: "https://yoniki.jp/",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "CSS",
    image: "/projects/CSS.png",
  },
  {
    title: "Javascript",
    image: "/projects/Javasript.png",
  },
  {
    title: "SQL(Basic)",
    image: "/projects/SQL(Basic).png",
  },
  {
    title: "React",
    image: "/projects/React.png",
  },
  {
    title: "RestAPI",
    image: "/projects/RestApi.png",
  },
  {
    title: "Python",
    image: "/projects/Python.png",
  },
  {
    title: "Java",
    image: "/projects/Java.png",
  },
  {
    title: "Golang",
    image: "/projects/Golang.png",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "email",
        icon: GiMailbox,
        link: "#contact",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "中村邦彦",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "自己紹介",
    link: "#about-me",
  },
  {
    title: "スキル",
    link: "#skills",
  },
  {
    title: "製作事例",
    link: "#projects",
  },
  // {
  //   title: "認証",
  //   link: "#certification",
  // },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};