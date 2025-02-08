"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center mx-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[15px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[16px]">
          エンジニア／PM業務を5年以上経験しています
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-[22px] text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              最高
            </span>{" "}
            のWebサイト、システム開発経験を提供します
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md text-gray-400 my-5 max-w-[600px] leading-[40px]"
        >
          お客様のヒアリングから要件定義、進捗管理まで幅広く従事。
          現在、Webに関する仕事を全般的に手がけています。
          ブロックチェーン技術, AIに対する深い理解と関心を持っており、NFTの再販に関する豊富な経験を持っています。
          また、アカウントの抽象化をはじめとする最先端のブロックチェーン技術にも深い理解を持っています。
          些細なことでも丁寧に対応させていただきますので、お気軽にご連絡ください！<br /><br />
          ・フロントエンド:React、Vue、Next.js、Nuxt.js、他のJavaScriptフレームワーク<br />
          ・バックエンド:Node.js、ASP.NET、Django、Laravel、Ruby on Rails、FuelPHP、WordPress、Go、C#、Unity、UE5など<br />
          ・ブロックチェーン：Solidity、Solana、Rustなど<br />
          ・AI開発：TensorFlow、PyTorch、Scikit-Learn、LangChain、OpenAIなど<br />
          ・データベース:MongoDB、MySQL、MariaDB、PostgreSQL、SQLiteなど<br />
          ・モバイルアプリ:React Native、Flutterなど<br />
          ・サーバー/インフラ:AWS、EC2、S3、Cloudflareなど<br />
          ・PJMツール:GitHub、Jira、BitBucket、Herokuなど
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          href="#contact"
        >
          お問い合わせ
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
