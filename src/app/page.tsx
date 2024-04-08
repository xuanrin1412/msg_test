import Head from "next/head";
import Image from "next/image";
import jij from "../../public/favicon.ico"
import BannerIntro from "@/components/bannerIntro/BannerIntro";
import Intro from "@/components/intro/Intro";
export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">

    //   <Head>
    //     <title>Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>
    //   <p className="roboto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis culpa numquam deleniti fuga, alias recusandae corporis dolore maiores nemo necessitatibus architecto, cum sint. Tempore asperiores et voluptates mollitia odit dolorum!</p>
    //   <p className="agbalumo">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat ad deleniti qui corporis tempora nihil necessitatibus, ipsam porro aliquid! Eum mollitia enim iure! Aliquid impedit aut cum ipsam adipisci ipsa!</p>
    // </main>
    <div className="">
      <BannerIntro />
      <Intro />
    </div>
  );
}
