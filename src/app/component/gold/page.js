"use client"; // เข้าถึง document
import React from "react";
import Image from "next/image";
import Dataimggold from "../../data/Dataimggold";
import { useEffect } from "react";
import { animate } from "motion";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init();

    const gold5 = document.getElementById("gold5");
    if (gold5) {
      animate(0, 70, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          gold5.innerHTML = formattedNumber + " %";
        },
      });
    }

    const gold10 = document.getElementById("gold10");
    if (gold10) {
      animate(0, 147, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          gold10.innerHTML = formattedNumber + " %";
        },
      });
    }

    const gold15 = document.getElementById("gold15");
    if (gold15) {
      animate(0, 155, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          gold15.innerHTML = formattedNumber + " %";
        },
      });
    }

    const gold20 = document.getElementById("gold20");
    if (gold20) {
      animate(0, 312, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          gold20.innerHTML = formattedNumber + " %";
        },
      });
    }

    const pricegoldTHyears5 = document.getElementById("pricegoldTHyears5");
    if (pricegoldTHyears5) {
      animate(0, 27525, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          pricegoldTHyears5.innerHTML = "บาทละ : " + formattedNumber + "บาท";
        },
      });
    }

    const pricegoldTHyears10 = document.getElementById("pricegoldTHyears10");
    if (pricegoldTHyears10) {
      animate(0, 19025, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          pricegoldTHyears10.innerHTML = "บาทละ : " + formattedNumber + "บาท";
        },
      });
    }

    const pricegoldTHyears15 = document.getElementById("pricegoldTHyears15");
    if (pricegoldTHyears15) {
      animate(0, 18393, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          pricegoldTHyears15.innerHTML = "บาทละ : " + formattedNumber + "บาท";
        },
      });
    }

    const pricegoldTHyears20 = document.getElementById("pricegoldTHyears20");
    if (pricegoldTHyears20) {
      animate(0, 11400, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          pricegoldTHyears20.innerHTML = "บาทละ : " + formattedNumber + "บาท";
        },
      });
    }
  }, []);

  return (

    //   <p className="my-5 text-lg font-bold underline underline-offset-3 decoration-green-500 ">
    //   กําไรเเต่ละช่วงปี
    // </p>

    // <div className="grid grid-cols-4 my-5 gap-2">
    //   <div className="shadow-lg hover:scale-105 duration-500 p-4 rounded-lg border border-gray-200">
    //     <p className="text-2xl text-green-500">5ปี.</p>
    //     <div className="font-bold text-3xl" id="gold5">
    //       0
    //     </div>
    //     <div id="pricegoldTHyears5"></div>
    //   </div>
    //   <div className="shadow-lg hover:scale-105 duration-500 p-4 rounded-lg border border-gray-200">
    //     <p className="text-2xl text-green-500">10ปี</p>
    //     <div className="font-bold text-3xl" id="gold10">
    //       0
    //     </div>
    //     <div id="pricegoldTHyears10"></div>
    //   </div>
    //   <div className="shadow-lg hover:scale-105 duration-500 p-4 rounded-lg border border-gray-200">
    //     <p className="text-2xl text-green-500">15ปี</p>
    //     <div className="font-bold text-3xl" id="gold15">
    //       0
    //     </div>
    //     <div id="pricegoldTHyears15"></div>
    //   </div>
    //   <div className="shadow-lg hover:scale-105 duration-500 p-4 rounded-lg border border-gray-200">
    //     <p className="text-2xl text-green-500">20ปี</p>
    //     <div className="font-bold text-3xl" id="gold20">
    //       0
    //     </div>
    //     <div id="pricegoldTHyears20"></div>
    //   </div>
    // </div>

    <div>
      <div className="lg:w-230  w-fit mx-auto p-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className=" w-fit ">
            <Image
              data-aos="zoom-in"
              className="w-90 h-90 border border-green-500 rounded-full shadow-2xl shadow-gray-500/80 hover:scale-98 ease-in duration-300"
              src="/imageGold/giphy.gif"
              width={50}
              height={350}
              alt="Gold Bar"
            />
          </div>

          <div className=" lg:my-12 my-2 ">
            <p className="text-6xl">ทองคำ (Gold)</p>
            <p className="text-lg lg:w-120 w-fit mt-5  ms-2">
              เป็นโลหะมีค่าที่มีประวัติยาวนานในการใช้เป็นสื่อกลางแลกเปลี่ยน
              เครื่องประดับ และการลงทุน
              มาทำความรู้จักกับทองให้ลึกขึ้นในแง่มุมต่างๆ
            </p>
            <div className="mt-5 space-x-3 lg:text-left text-center sm:text-left">
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

      <div className="bg-green-500 w-full h-5"></div>
      <div className="">
        <div className="container mx-auto mt-10 p-4">
          <div className="border w-full max-w-xl mx-auto text-center p-5 shadow-lg shadow-green-800/80">
            <p className="text-2xl text-green-500 my-2 font-semibold">
              ทองคำแท่ง
            </p>
            <p className="text-gray-700">
              ใช้สำหรับลงทุน มีค่าบริสุทธิ์สูง (96.5% หรือ 99.99%) 15.244 ต่อ 1
              บาท
            </p>
            <p className="text-2xl text-green-500 my-2 font-semibold">
              ทองรูปพรรณ
            </p>
            <p className="text-gray-700">
              ใช้ทำเครื่องประดับ มีค่าบริสุทธิ์ 96.5% หรือ 75% 15.244 ต่อ 1 บาท
            </p>
            <p className="text-2xl text-green-500 my-2 font-semibold">
              ทองคำดิจิทัล
            </p>
            <p className="text-gray-700">
              การลงทุนทองคำในรูปแบบดิจิทัล ไม่ต้องถือทองจริง
            </p>
          </div>

          <div className="flex justify-center my-5 space-x-5">
            <div className="border w-72 p-5 shadow-lg rounded-lg text-center shadow-green-800/80">
              <p className="text-2xl text-green-500 my-2 font-semibold">
                การลงทุนในทองคำ
              </p>
              <p className="text-gray-700">
                ซื้อทองคำแท่ง/ทองรูปพรรณ- ถือครองทองคำจริง
              </p>
              <p className="text-2xl text-green-500 my-2 font-semibold">
                กองทุนทองคำ (Gold ETF)
              </p>
              <p className="text-gray-700">ซื้อขายทองคำผ่านกองทุน</p>
              <p className="text-2xl text-green-500 my-2 font-semibold">
                Gold Futures
              </p>
              <p className="text-gray-700">สัญญาซื้อขายล่วงหน้าในตลาดอนุพันธ์</p>
            </div>

            <div className="border w-72 p-5 shadow-lg rounded-lg shadow-green-800/80">
              <ul className="list-disc pl-5 text-gray-700">
                <li className="text-2xl text-green-500 my-2 font-semibold">
                  ปัจจัยที่มีผลต่อราคาทองคำ
                </li>
                <li className="my-1">ค่าเงินดอลลาร์สหรัฐ (USD)</li>
                <li className="my-1">เงินเฟ้อ</li>
                <li className="my-1">อัตราดอกเบี้ย</li>
                <li className="my-1">ความต้องการจากตลาดโลก</li>
                <li className="my-1">สถานการณ์ทางเศรษฐกิจและการเมือง</li>
              </ul>
            </div>
          </div>

          <div className="border w-full max-w-xl mx-auto p-5 shadow-lg shadow-green-800/80">
            <p className="text-center text-2xl text-green-500">
              ข้อดีและข้อเสีย ของการลงทุนในทองคำ
            </p>
            <p className="text-lg text-green-500 my-2">ข้อดี</p>
            <ul className="list-disc ps-5">
              <li>เป็นสินทรัพย์ปลอดภัย (Safe Haven)</li>
              <li>ป้องกันความเสี่ยงจากเงินเฟ้อ</li>
              <li>มีสภาพคล่องสูง สามารถซื้อขายได้ง่าย</li>
            </ul>
            <p className="text-lg text-red-500 my-2">ข้อเสีย</p>
            <ul className="list-disc ps-5">
              <li>ไม่สร้างกระแสเงินสดเหมือนหุ้น</li>
              <li>มีค่าธรรมเนียมในการเก็บรักษา (สำหรับทองคำแท่ง)</li>
              <li>ราคาผันผวนตามภาวะตลาด</li>
            </ul>
          </div>
        </div>

        <div className="bg-green-500 w-full mt-10  p-10">
          <p className="text-white text-4xl font-semibold text-center mb-6">
            แหล่งซื้อขายทองคำในไทยออนไลน์
          </p>
          <div className="flex justify-center">
            {Dataimggold.map((event, index) => {
              return (
                <a key={index}  href={event.title} target="_blank">
                  <Image
                    data-aos="fade-right"
                    className="rounded-full lg:p-0 p-2 lg:mx-2 hover:scale-105 duration-300"
                    ket={index}
                    src={event.img}
                    alt={event.title}
                    height={80}
                    width={80}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <div className="container mx-auto  my-5 ">
          <p className="text-4xl text-green-500 text-center ">
            ผลตอบเเทนเเต่ละช่วง
          </p>

          <div
            data-aos="fade-in-down"
            data-aos-duration="1000"
            className="grid lg:grid-cols-2 grid-cols-1 lg:w-250 mx-auto gap-5 my-5 p-4"
          >
            <div className="border-r-5 border-green-700 p-3 rounded-lg shadow-lg shadow-green-700/80">
              <p className="text-green-500 text-2xl font-semibold text-center my-2">
                ช่วง 5 ปี (2562-2567){" "}
              </p>
              <p>ราคาขึ้นจากประมาณ 27,525 บาทเป็น 47,000 บาท</p>
              <p>(47,000 ÷ 27,525 – 1) × 100% = 70%</p>
            </div>
            <div className="border-r-5 border-green-700 p-3 rounded-lg shadow-lg shadow-green-700/80">
              <p className="text-green-500 text-2xl font-semibold text-center my-2">
                ช่วง 10 ปี (2557-2567)
              </p>
              <p>ราคาขึ้นจากประมาณ 19,025 บาทเป็น 47,000 บาท</p>
              <p>ผลตอบแทนรวม = (47,000 ÷ 19,025 – 1) × 100% ≈ 147.1%</p>
            </div>
            <div className="border-r-5 border-green-700 p-3 rounded-lg shadow-lg shadow-green-700/80">
              <p className="text-green-500 text-2xl font-semibold text-center my-2">
                ช่วง 15 ปี (2552-2567){" "}
              </p>
              <p>ราคาขึ้นจากประมาณ 18,393 บาทเป็น 47,000 บาท</p>
              <p>ผลตอบแทนรวม = (47,000 ÷ 18,393 – 1) × 100% ≈ 155.6%</p>
            </div>
            <div className="border-r-5 border-green-700 p-3 rounded-lg shadow-lg shadow-green-700/80">
              <p className="text-green-500 text-2xl font-semibold text-center my-2">
                ช่วง 20 ปี (2547-2567)
              </p>
              <p>ราคาขึ้นจากประมาณ 11,400 บาทเป็น 47,000 บาท</p>
              <p>ผลตอบแทนรวม = (47,000 ÷ 11,400 – 1) × 100% ≈ 312.3%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
