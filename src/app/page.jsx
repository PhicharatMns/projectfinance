"use client"; // เข้าถึง document
import Head from "next/head";
import "@/styles/Finance_Investment.css";
import DataImg from "./data/DataImg";
import { useEffect } from "react";
import { animate } from "motion";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import datapage from "./data/datapage";

export default function Home() {
  useEffect(() => {
    AOS.init();
    const gold = document.getElementById("gold");

    if (gold) {
      animate(0, 48500, {
        duration: 1,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          gold.innerHTML = formattedNumber + "บาท";
        },
      });
    }

    const BTC = document.getElementById("BTC");
    if (BTC) {
      animate(0, 2860000, {
        duration: 2,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          BTC.innerHTML = formattedNumber + "บาท";
        },
      });
    }

    const AAPL = document.getElementById("AAPL");
    if (AAPL) {
      animate(0, 7194, {
        duration: 3,
        ease: "circOut",
        onUpdate: (latest) => {
          const formattedNumber = new Intl.NumberFormat().format(
            Math.round(latest)
          );
          AAPL.innerHTML = formattedNumber + "บาท";
        },
      });
    }
  });

  return (
    <div className="">
      <div className="container mx-auto flex flex-col justify-center lg:flex-row p-5">
        <div>
          <img
            data-aos="zoom-in"
            className="rounded-full w-96 h-96 mt-5 sm:mx-auto mb-5"
            src="https://cdn.dribbble.com/users/743668/screenshots/6196706/money_pile_dribble_1.gif"
          />
        </div>
        <div className="lg:mt-25 lg:me-25 lg:ms-25 lg:text-left text-center ">
          <h1 className="text-4xl md:text-6xl">การเงินเเละการลงทุน</h1>
          <p className="text-base md:text-lg mt-3 lg:w-120 lg:mx-auto lg:text-center">
            ความมั่งคั่งไม่ได้วัดจากจำนวนเงินที่คุณหาได้
            แต่วัดจากจำนวนเงินที่คุณเก็บและทำให้เติบโต
          </p>

          <div className="mt-5 space-x-3 lg:text-center">
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

      <div className="grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 mx-auto px-4 container">
        {DataImg.map((event, index) => (
          <div key={index} className="flex justify-center items-center">
            <Link href={`/component/${event.title.toLowerCase()}`} passHref>
              <Image
                className="w-full h-60 rounded-lg duration-300 ease-in-out transform hover:scale-105 object-cover"
                src={event.img}
                alt={event.title}
                width={500}
                height={350}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="relative mt-5">
        <div className="bg-gradient-to-r from-green-500 to-green-600 w-full lg:h-40  absolute top-0 left-0"></div>
        <div className="container mx-auto  bg-white p-4 lg:p-10 top-10 lg:top-10   lg:w-full rounded_css shadow-2xl shadow-gray-500/80 relative z-1">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 text-center gap-4">
            <div>
              <p className="text-xl sm:text-2xl lg:text-4xl  text-green-500 mb-2">
                ราคาทองวันนี้
              </p>
              <pre className="text-xl" id="gold">
                0
              </pre>
            </div>
            <div>
              <p className="text-xl sm:text-2xl lg:text-4xl  text-green-500 mb-2">
                ราคาBTCวันนี้
              </p>
              <pre className="text-xl" id="BTC">
                0
              </pre>
            </div>
            <div>
              <p className="text-xl sm:text-2xl lg:text-4xl text-green-500 mb-2">
                ราคาหุ้นs&p500วันนี้
              </p>
              <pre className="text-xl" id="AAPL">
                0
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center mt-20 p-10">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
          <div>
            <div>
              <h1
                data-aos="zoom-in-right"
                className="text-4xl sm:text-5xl text-green-500 font-extrabold leading-tight mb-6 animate__animated animate__fadeIn animate__delay-1s"
              >
                แนะนำเกี่ยวกับการลงทุน
              </h1>
              <p
                data-aos="zoom-in-right"
                className="text-base sm:text-lg lg:text-xl mt-3 lg:w-4/5   lg:mx-0 mx-auto text-gray-700"
              >
                การลงทุนเป็นวิธีที่ช่วยให้เงินของคุณเติบโตในระยะยาว
                และมีหลายประเภทให้เลือกขึ้นอยู่กับเป้าหมายและความเสี่ยงที่คุณรับได้
              </p>

              <div
                data-aos="zoom-in-right"
                className="flex items-center justify-center lg:justify-start mt-5 shadow-xl lg:w-150  lg:mx-0 mx-auto "
              >
                <div className=" p-4">
                  <p className="text-2xl sm:text-3xl text-green-500 font-semibold">
                    เข้าใจพื้นฐานก่อนลงทุน
                  </p>

                  <ul className="mt-3 leading-7 lg:w-full text-sm sm:text-base text-gray-600 ms-10 list-disc">
                    <li>
                      วางเป้าหมาย → ต้องการลงทุนเพื่ออะไร? เกษียณ, ซื้อบ้าน,
                      หรือสร้างรายได้เพิ่ม
                    </li>
                    <li>
                      {" "}
                      วิเคราะห์ความเสี่ยง → รับความเสี่ยงได้มากแค่ไหน? (Low,
                      Medium, High)
                    </li>
                    <li> ศึกษาสินทรัพย์ลงทุน → เข้าใจก่อนลงทุนเสมอ</li>
                  </ul>
                </div>
              </div>

              <div className="shadow-xl p-5 mb-5 lg:w-150 w-full">
                <p
                  data-aos="zoom-in-right"
                  className="text-3xl text-green-500 my-5"
                >
                  ประเภทของการลงทุน
                </p>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                  {datapage.map((event, index) => {
                    return (
                      <div key={index} data-aos="zoom-in-right">
                        <div className="   border-t-5 border-green-500 rounded-lg p-3 h-25  shadow-lg hover:shadow-xl">
                          <p className="text-green-500 text-lg">
                            {event.title}
                          </p>
                          <p className="text-gray-500 text-sm w-full my-2 sm:text-center lg:text-left text-center">
                            {event.section}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div>
            <Image
              className="w-250 ms-5"
              src={"/1.png"}
              width={500}
              height={50}
              alt="BTS"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
