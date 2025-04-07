"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AlarmClockCheck } from "lucide-react";
import dataTechno from "../../data/DataTechno";
import {
  ChartNoAxesCombined,
  BookOpen,
  ChartColumnDecreasing,
  CircleAlert,
} from "lucide-react";
import Techno from "../../data/Techno";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Share() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    AOS.init({
      once: true,
    });
    const updateTime = () => {
      const now = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentTime(now.toLocaleDateString("th-TH", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    // overflow-hidden จะตัดเเกนx ออกผ
    <div className="w-fit lg:w-full overflow-hidden">
      {/* Header Section */}
      <div className="border-b-4 border-green-500 lg:w-250 lg:mx-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="mx-auto lg:mr-10  lg:w-150">
              <Image
                data-aos="zoom-in"
                className="w-72 h-72 md:w-96 md:h-96 shadow-xl rounded-full"
                src="/share/money-icegif-12.gif"
                width={150}
                height={150}
                alt="money"
              />
            </div>
            <div
              data-aos="fade-left"
              className="text-center lg:text-left mt-5 lg:mt-10 w-full"
            >
              <p className="text-3xl lg:text-6xl text-green-500 my-3">
                การลงทุนในหุ้น
              </p>
              <p className="text-lg text-gray-500 my-3">
                เป็นเจ้าของธุรกิจชั้นนำและเติบโตไปพร้อมกับความสำเร็จของพวกเขา
              </p>
              <p className="text-sm text-gray-500 p-2 rounded-md">
                การลงทุนในหุ้นเป็นการซื้อส่วนแบ่งความเป็นเจ้าของในบริษัท
                ซึ่งทำให้คุณมีโอกาสได้รับผลตอบแทนจากการเติบโตของบริษัทและเงินปันผล
              </p>
              <div className="mt-5 space-x-3">
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
      </div>

      {/* Overview Section */}
      <div className="container mx-auto px-4 py-8 ">
        <p className="text-2xl font-semibold text-green-500 text-center lg:text-left">
          ภาพรวม7หุ้นนางฟ้า สหรัฐอเมริกา
        </p>
        <p className="flex items-center justify-center lg:justify-start gap-3 my-3 text-gray-500">
          <AlarmClockCheck className="w-5 h-5 text-green-500" />
          {currentTime} ย้อนหลัง 1ปี
        </p>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="grid grid-cols-2 lg:grid-cols-7 gap-5 mt-5"
        >
          {dataTechno.map((event, index) => (
            <div
              key={index}
              className="shadow-lg rounded-lg p-2 hover:shadow-xl duration-300 border-t-4 border-green-500"
            >
              <ChartNoAxesCombined />
              <p className="my-2 font-bold">{event.section}</p>
              <p className="text-green-500 my-2 flex">+{event.Yeasr1}%</p>

              <Link
                className="text-sm text-gray-500"
                href={`/component/recommend/Riskmanagement/${event.id}`}
              >
                ข้อมูลเพิ่มเติม
              </Link>
            </div>
          ))}
        </div>

        {/* Popular Stocks Section */}
        <div className="shadow-lg bg-white mt-10">
          <div className="p-4 text-center lg:text-left">
            <p className="text-lg font-bold">หุ้นยอดนิยม</p>
            <p className="text-sm text-gray-500">
              หุ้นที่มีการซื้อขายมากที่สุดในตลาดหลักทรัพย์
            </p>
          </div>
          <div className="text-center lg:text-left">
            <div className="grid grid-cols-2 lg:grid-cols-8 gap-5 bg-gray-100 p-2">
              <div>ชื่อบริษัท</div>
              <div>หมวดหมู่</div>
              <div>ย้อนหลัง1ปี</div>
              <div>ย้อนหลัง5ปี</div>
              <div>ย้อนหลัง10ปี</div>
              <div>ย้อนหลัง15ปี</div>
              <div>ย้อนหลัง20ปี</div>
              <div>ปันผล</div>
            </div>
            {Techno.map((event, index) => (
              <div
                data-aos="fade-up"
                key={index}
                className="grid grid-cols-2 lg:grid-cols-8 gap-5 p-2 border-b border-gray-200 hover:bg-gray-100 transition-all"
              >
                <div>{event.section}</div>
                <div>{event.Category}</div>
                <div className="text-green-500">{event.Yeasr1}%</div>
                <div className="text-green-500">{event.Yeasr5}%</div>
                <div className="text-green-500">{event.Yeasr10}%</div>
                <div
                  className={
                    event.Yeasr15 === "-" ? "text-red-500" : "text-green-500"
                  }
                >
                  {event.Yeasr15 === "-" ? event.Yeasr15 : `${event.Yeasr15} %`}
                </div>
                <div
                  className={
                    event.Yeasr20 === "-" ? "text-red-500" : "text-green-500"
                  }
                >
                  {event.Yeasr20 === "-" ? event.Yeasr20 : `${event.Yeasr20} %`}
                </div>
                <div
                  className={
                    event.dividend === "-" ? "text-red-500" : "text-green-500"
                  }
                >
                  {event.dividend === "-"
                    ? event.dividend
                    : `${event.dividend} %`}
                </div>
              </div>
            ))}
          </div>
          <div className="text-green-500 text-sm p-3 text-center hover:bg-gray-100">
            <Link href="/">
              <p>ดูเพิ่มเติม</p>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="bg-green-50 w-full py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl font-bold mb-3">หมวดหมู่หุ้น</p>
          <p className="text-sm text-gray-500">
            การลงทุนในหุ้นแบ่งตามหมวดธุรกิจช่วยให้คุณกระจายความเสี่ยงและเลือกลงทุนในอุตสาหกรรมที่คุณสนใจหรือมีความรู้
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <div data-aos="fade-right" className="leading-8">
            <p className="text-xl font-bold my-3">เรียนรู้การลงทุนในหุ้น</p>
            <p className="text-sm text-gray-500">
              การลงทุนในหุ้นอาจดูซับซ้อน แต่ด้วยความรู้พื้นฐานที่ถูกต้อง
              คุณสามารถเริ่มต้นได้อย่างมั่นใจและประสบความสำเร็จในระยะยาว
            </p>

            <div className="flex items-center my-3">
              <BookOpen className="bg-green-50 text-green-500 w-11 h-11" />
              <p className="text-lg font-semibold ml-4">
                พื้นฐานการลงทุนในหุ้น
              </p>
            </div>
            <p className="pl-5 ml-10 text-gray-500 text-sm ">
              เรียนรู้แนวคิดพื้นฐานของการลงทุนในหุ้น ประเภทของหุ้น
              และวิธีการซื้อขายหุ้น
            </p>
            <Link href="/component/recommend/invest">
              <span className="inline-block ml-10 pl-5 text-green-500 text-sm">
                ดูเพิ่มเติม
              </span>
            </Link>

            <div className="flex items-center my-3">
              <ChartColumnDecreasing className="bg-green-50 text-green-500 w-11 h-11" />
              <p className="text-lg font-semibold ml-4">กลยุทธ์การลงทุน</p>
            </div>
            <p className="pl-5 ml-10 text-gray-500 text-sm ">
              เรียนรู้วิธีการวิเคราะห์หุ้นทั้งแบบพื้นฐานและเทคนิค
              เพื่อเลือกหุ้นที่มีศักยภาพ
            </p>
            <Link href="/component/recommend/strategy/">
              <span className="inline-block ml-10 pl-5 text-green-500 text-sm ">
                ดูเพิ่มเติม
              </span>
            </Link>

            <div className="flex items-center my-3">
              <CircleAlert className="bg-green-50 text-green-500 w-11 h-11" />
              <p className="text-lg font-semibold ml-4">การจัดการความเสี่ยง</p>
            </div>
            <p className="pl-5 ml-10 text-gray-500 text-sm">
              เรียนรู้วิธีการจัดการความเสี่ยงในการลงทุนหุ้น การกระจายการลงทุน
              และการตั้งเป้าหมาย
            </p>
            <Link
              href={{
                pathname: "/component/recommend/Riskmanagement",
                query: { value: "การเงิน" },
              }}
            >
              <span className="inline-block ml-10 pl-5 text-green-500 text-sm">
                ดูเพิ่มเติม
              </span>
            </Link>
          </div>

          <div data-aos="fade-left" className="rounded-lg shadow-lg">
            <div className="border-b bg-green-500 text-white p-6 rounded-t-lg">
              <h2 className="text-2xl font-semibold">
                เคล็ดลับการลงทุนในหุ้นสำหรับมือใหม่
              </h2>
              <p className="mt-2 text-sm">
                คำแนะนำสำคัญที่จะช่วยให้คุณเริ่มต้นลงทุนในหุ้นได้อย่างมั่นใจ
              </p>
            </div>
            <div className="p-6 bg-white rounded-b-lg">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    <span className="text-green-600">1.</span>{" "}
                    ลงทุนในสิ่งที่คุณเข้าใจ
                  </h3>
                  <p>เลือกลงทุนในธุรกิจที่คุณเข้าใจและสามารถติดตามได้</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <span className="text-green-600">2.</span> กระจายการลงทุน
                  </h3>
                  <p>
                    ไม่ควรลงทุนในหุ้นเพียงตัวเดียว
                    ควรกระจายการลงทุนในหลายบริษัทและหลายอุตสาหกรรม
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <span className="text-green-600">3.</span> ลงทุนระยะยาว
                  </h3>
                  <p>
                    การลงทุนในหุ้นให้ผลตอบแทนที่ดีที่สุดในระยะยาว
                    ไม่ควรซื้อขายบ่อยเกินไป
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <span className="text-green-600">4.</span> ควบคุมอารมณ์
                  </h3>
                  <p>
                    ตลาดหุ้นมีความผันผวน อย่าตัดสินใจด้วยความกลัวหรือความโลภ
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    <span className="text-green-600">5.</span>{" "}
                    เริ่มต้นด้วยจำนวนเงินที่เหมาะสม
                  </h3>
                  <p>
                    เริ่มลงทุนด้วยเงินที่คุณพร้อมจะสูญเสียได้ และค่อยๆ
                    เพิ่มจำนวนเมื่อมีประสบการณ์มากขึ้น
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
