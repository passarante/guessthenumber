"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

import Link from "next/link";
import Image from "next/image";
import React from "react";

const WelcomePage = () => {
  return (
    <div className="h-[calc(100vh_-_160px)]  w-full relative">
      <div className="md:w-1/2 absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 inset-4  overflow-y-auto">
        <CardContainer className="inter-var bg-black md:w-[800px] md:h-[600px] rounded-xl w-[400px]">
          <CardBody className="bg-white/10 text-white relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto min-w-[400px] md:min-w-[700px] sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white "
            >
              <Image
                src={"/assets/images/logo.png"}
                width={300}
                height={80}
                alt="logo"
                className=""
              />
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Sayı tahmin Oyunu
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <div>
                <h4 className="text-xl font-bold">Nasıl Oynanır:</h4>
                <ul className="text-sm">
                  <li>
                    * Rakamları birbirinden farklı 4 haneli bir sayıyı tahmin
                    etmelisiniz.
                  </li>
                  <li>
                    * Yaptığınız tahminler solda görünecektir. Doğru sayıyı
                    bulabilmeniz için size tahmininizle ilgili bilgi veriyoruz.
                  </li>
                  <li>
                    * Tahmininizdeki yeri doğru olan rakamları yeşil kutuda
                    gösteriyoruz.
                  </li>
                  <li>
                    * Tahmininizdeki <b>doğru olan ancak yeri doğru olmayan</b>{" "}
                    rakamları kırmızı kutuda gösteriyoruz.
                  </li>
                  <li>
                    * Tahminlerinizi ve skorlarınızı kaydetmek için üye
                    olmalısınız.
                  </li>
                  <li>
                    * Üye olduğunuzda çoklu oyun açarak rakiplerinize karşı
                    oynayabilirsiniz.
                  </li>
                </ul>
              </div>
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <Link href="/game/single">Hemen oyna</Link>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default WelcomePage;
