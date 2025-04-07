"use client"; // เข้าถึง document
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { animate } from "motion";
import AOS from "aos";
import "aos/dist/aos.css";
import DataCryto from "../../data/DataCryto";

export default function Pagecrypto() {
  useEffect(() => {
    AOS.init();

    const BTC = document.getElementById("BTC");
    if (BTC) {
      animate(0, 2918000, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          BTC.innerHTML = formattedNumber;
        },
      });
    }

    const ETH = document.getElementById("ETH");
    if (ETH) {
      animate(0, 67710, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          ETH.innerHTML = formattedNumber;
        },
      });
    }

    const KUB = document.getElementById("KUB");
    if (KUB) {
      animate(0, 56, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          KUB.innerHTML = formattedNumber;
        },
      });
    }

    const SOL = document.getElementById("SOL");
    if (SOL) {
      animate(0, 4625, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          SOL.innerHTML = formattedNumber;
        },
      });
    }

    const XRP = document.getElementById("XRP");
    if (XRP) {
      animate(0, 78, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          XRP.innerHTML = formattedNumber;
        },
      });
    }
  }, []);
  return (
    <div className="p-4  overflow-hidden">
      <div className="lg:mx-auto lg:container sm:text-center  lg:mt-2  lg:w-300 w-full ">
        <div className="lg:flex ">
          <div className=" mx-auto sm:w-90">
            <Image
              className="w-96 h-96  border-green-500 rounded-full shadow-2xl shadow-gray-500/80 hover:scale-98 ease-in duration-300 mt-5"
              data-aos="zoom-in"
              src={
                "/imageCryrto/bitcoin-refresh-animated-icon-download-in-lottie-json-gif-static-svg-file-formats--logo-cryptocurrency-currency-pack-science-technology-icons-8836171.webp"
              }
              width={50}
              height={350}
              alt="loopBTS"
            />
          </div>

          <div className="lg:w-200 lg:mx-10 mb-5 sm:text-left  lg:text-left">
            <p className="text-4xl md:text-5xl font-bold my-5 text-transparent bg-linear-65 from-green-500 to-blue-500 bg-clip-text">
              คริปโต (Crypto)
            </p>

            <p className="text-2xl">
              Cryptocurrency สกุลเงินดิจิทัล ที่จะมาเปลี่ยนชีวิตคุณ
            </p>
            <p className="text-lg my-5 text-gray-500">
              เหรียญคริปโตถูกซื้อขายบน Exchange ในตลาดระดับโลก
              โดยสกุลเงินดิจิทัลต่าง ๆ มีการทำงานผ่านเครือข่ายบล็อกเชน
              ซื้อขายแลกเปลี่ยนกันได้อย่างอิสระ
              ไม่ว่าใครก็สามารถเข้ามาเล่นได้จากทุกที่ทุกเวลา
            </p>
            <div className="flex">
              <div className="border border-green-500 rounded-xl bg-green-50 p-5 me-5 w-75">
                <p className="text-lg my-2">การเติบโต</p>
                <>
                  คลิปโตมีการเติบโตอย่างรวดเร็วในช่วงหลายปีที่ผ่านมา
                  เป็นทางเลือกใหม่ในการลงทุน
                </>
              </div>
              <div className="border border-gray-500 rounded-xl bg-gray-50 p-5 me-5 w-75">
                <p className="text-lg my-2">การวิเคราะห์</p>
                <p>ดูกราฟในการลงทุน เเต่ละช่วงเวลาเเบบ real time</p>
                <p>เพิ่มเติม</p>
              </div>
            </div>
            <div className="mt-5 space-x-3 ">
              <Link href="/component/Calcuateshare">
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg duration-300 hover:bg-green-400 cursor-pointer">
                  คํานวนการลงทุน
                </button>
              </Link>
              <Link href="/">
                <button className="border border-green-500 text-green-500 px-6 py-3 rounded-lg duration-300 hover:bg-green-500 cursor-pointer hover:text-white">
                  ทําเเบบทดสอบ
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-400 mx-auto border border-gray-300 mb-2 "></div>
      <div className="container lg:w-420 mx-auto">
        <div className="">
          <p className="text-center text-4xl font-bold mb-5 text-green-500">
            สกุลเงินคลิปโตยอดนิยม
          </p>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-5 ">
            {DataCryto.map((event, index) => (
              <Link
                href={`/component/crypto/${event.id}`}
                key={index}
                className="group"
              >
                <div
                  data-aos="zoom-in"
                  data-aos-duration="2000"
                  className="px-10 p-1 shadow-md shadow-gray-500/50 rounded-xl mx-auto duration-900 
        group-hover:scale-102 group-hover:shadow-lg group-hover:shadow-green-400/50"
                >
                  <Image
                    className="rounded-lg sm:ms-11 lg:ms-0  mt-2 "
                    src={event.image}
                    width={200}
                    height={200}
                    alt={event.id}
                  />
                  <div className="text-center my-5">
                    <p className="text-xl font-bold transition-colors duration-300 group-hover:text-green-500">
                      {event.id}
                    </p>
                    <pre
                      className="text-xl transition-colors duration-30"
                      id={event.id}
                    >
                      บาท
                    </pre>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="bg-green-500 text-white py-2 mt-5 shadow-xl">
          <div className="container mx-auto text-center text-2xl font-semibold">
            Cryptocurrency คืออะไร?
          </div>
        </div>
        <div className="container mx-auto p-6 max-w-4xl bg-white shadow-md rounded-lg mt-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-500">
              คริปโต (Cryptocurrency) คืออะไร?
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Cryptocurrency คือ
              สกุลเงินดิจิทัลที่ทำหน้าที่เป็นสื่อกลางในการแลกเปลี่ยนบนเครือข่ายอินเทอร์เน็ต
              ซึ่งมีมูลค่าและสามารถทำการซื้อ-ขาย ได้จริงตามกลไกตลาด
              โดยทุกครั้งที่เกิดการแลกเปลี่ยนคริปโทจะมีการเข้ารหัสเพื่อยืนยันความถูกต้องของการทำธุรกรรม
              หากอธิบายให้เห็นภาพง่าย ๆ
              คริปโตเป็นเหมือนสกุลเงินที่เราใช้กันอยู่ทุกวัน เช่น เงินบาท
              เงินดอลลาร์ หรือเงินปอนด์ เพียงแต่ไม่สามารถพิมพ์ออกมาให้จับต้องได้
              แต่มูลค่าของเงินจะอยู่บนเครือข่ายบล็อกเชน
              (Blockchain)ในรูปแบบข้อมูลดิจิทัล
              ซึ่งมีความปลอดภัยและสามารถตรวจสอบได้นั่นเอง
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-500">
              หลักการทำงานของ Cryptocurrency
            </h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              เหรียญคริปโตทำงานอยู่บนบล็อกเชน (Blockchain)
              ซึ่งเป็นระบบที่เก็บและบันทึกข้อมูลของธุรกรรมอย่างปลอดภัย โปร่งใส
              และตรวจสอบได้ยาก
            </p>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-bold text-green-500">
              เหตุผลที่ Cryptocurrency ได้รับความสนใจ
            </h2>
            <ul className="mt-2 text-gray-700 leading-relaxed list-disc pl-6">
              <li>ซื้อขายได้บนแพลตฟอร์ม Exchange ระดับโลก</li>
              <li>เป็นสินทรัพย์ที่มีการกระจายศูนย์ (Decentralized)</li>
              <li>มีความผันผวนสูง สามารถสร้างผลตอบแทนได้</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
