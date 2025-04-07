"use client";
import Riskmanagement from "@/src/app/data/sumRiskmanagement";
import React, { use, useEffect, useRef } from "react";
import Link from "next/link";

export default function RiskDetail({ params }) {
  const { id } = use(params);
  const data = Riskmanagement.find((item) => item.id === id);

  const container = useRef();

  useEffect(() => {
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
      {
        "autosize": true,
        "symbol": "${data.url}",
        "interval": "D",
        "timezone": "Etc/UTC",
        "theme": "light",
        "style": "1",
        "locale": "en",
        "allow_symbol_change": true,
        "support_host": "https://www.tradingview.com"
      }`;
    container.current.appendChild(script);
  });

  if (!data) return <div>ไม่พบข้อมูล</div>;

  return (
    <div className="p-4 bg-white">
      <div ref={container} className="h-[500px] min-h-[400px] "></div>
      <div className="mx-auto container lg:w-320 mt-5">
        <div className="grid lg:grid-cols-3 gap-5">
          <div className=" p-4 rounded-xl border-t-6 border-green-500 shadow-xl  text-gray-500">
            <p className="  text-lg mb-3 font-bold text-gray-950">
              {data.section}
            </p>
            <div className="flex mb-3">
              <p className="text-gray-950 font-bold"> ชื่อย่อ : </p>
              <span> {data.id}</span>
            </div>

            <p className="mb-3">{data.title}</p>

            <div className="flex mb-3 font-bold">
              <p className="text-gray-950">หมวดหมู่ :</p>
              <span>{data.Category}</span>
            </div>

            <Link target="_blank" href={data.box}>
              ข่าวสารเกี่ยวกับ {data.id}
            </Link>
          </div>

          <div className="p-4 rounded-xl border-t-6 border-green-500 shadow-xl  text-gray-500">
            <p className="text-gray-950 text-lg mb-3 font-bold">
              เกี่ยวกับ {data.section}
            </p>

            <p className="text-gray-950 font-bold mb-3">
              คําอธิบาย :
              <span className="text-gray-500 text-sm">
                {data.about.description}
              </span>
            </p>

            <p className="mb-3">
              สํานักงานใหญ่ <span className="">{data.about.headquarters}</span>
            </p>
            <p className="mb-3 text-gray-950 font-bold">
              ผู้ก่อตั้ง :
              <span className="text-gray-500 text-sm">
                {data.about.founder}
              </span>
            </p>
            <p className="text-gray-950 font-bold">
              บทบาท :
              <span className="text-gray-500 text-sm">
                {data.about.globalRole}
              </span>
            </p>
          </div>

          <div className="p-4 rounded-xl border-t-6 border-green-500 shadow-xl  text-gray-500">
            <div className="grid grid-cols-2 gap-3">
              <div className="border rounded-lg border-gray-300 p-2 text-gray-950 font-bold">
                <p> ผลปัน</p>
                <p
                  className={` ${
                    data.dividend < 3 ? "text-red-500 " : "text-green-500"
                  }`}
                >
                  {data.dividend}%
                </p>
              </div>

              <div className="border rounded-lg border-gray-300 p-2 text-gray-950 font-bold">
                <p>ความเสี่ยง</p>
                <p
                  className={`${
                    data.Risk === "สูง"
                      ? "text-red-500 "
                      : data.Risk === "ปานกลาง"
                      ? "text-yellow-500 "
                      : "text-green-500 "
                  }`}
                >
                  {data.Risk}
                </p>
              </div>

              <div className="border rounded-lg border-gray-300 p-2 text-gray-950 font-bold">
                <p>ย้อนหลัง1ปี</p>
                <p
                  className={
                    data.Yeasr1 < 0 ? "text-red-500" : "text-green-500"
                  }
                >
                  {data.Yeasr1}
                </p>
              </div>

              <div className="border rounded-lg border-gray-300 p-2 text-gray-950 font-bold">
                <p>ย้อนหลัง5ปี</p>
                <p
                  className={
                    data.Yeasr5 < 0 ? "text-red-500" : "text-green-500"
                  }
                >
                  {data.Yeasr5}
                </p>
              </div>

              <div className="border rounded-lg border-gray-300 p-2 text-gray-950 font-bold">
                <p>ย้อนหลัง10ปี</p>
                <p
                  className={
                    data.Yeasr10 < 0 ? "text-red-500" : "text-green-500"
                  }
                >
                  {data.Yeasr10}
                </p>
              </div>

              <div className="border p-2 rounded-lg border-gray-300 text-gray-950 font-bold">
                <p>ย้อนหลัง15ปี</p>
                <p
                  className={
                    data.Yeasr15 < 0 ? "text-red-500" : "text-green-500"
                  }
                >
                  {data.Yeasr15}
                </p>
              </div>
            </div>

            <p className="text-red-500 my-5 font-bold">
              ผลตอบแทนในอดีตไม่ได้เป็นสิ่งยืนยันถึงผลตอบแทนในอนาคต
              ผู้ลงทุนควรศึกษาข้อมูลก่อนเริ่มลงทุน
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}