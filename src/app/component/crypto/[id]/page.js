"use client";
import { useParams } from 'next/navigation';
import DataCryto from '@/src/app/data/DataCryto'; // Ensure this path is correct
import React, { useEffect, useRef, useState } from 'react';
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import Image from 'next/image';

function TradingViewWidget({ symbol }) {
  const container = useRef(null);

  useEffect(() => {
    const currentContainer = container.current; // เก็บค่า ref ในตัวแปรภายใน effect
  
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `{
      "autosize": true,
      "symbol": "${symbol}",
      "interval": "1H",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "th_TH",
      "allow_symbol_change": true,
      "watchlist": [
        "BITKUB:BTCTHB",
        "BITKUB:ETHTHB",
        "BITKUB:KUBTHB",
        "BITKUB:SOLTHB",
        "BITKUB:XRPTHB"
      ],
      "details": true,
      "support_host": "https://www.tradingview.com"
    }`;
  
    if (currentContainer) {
      currentContainer.innerHTML = '';
      currentContainer.appendChild(script);
    }
  
    return () => {
      if (currentContainer) {
        currentContainer.innerHTML = '';
      }
    };
  }, [symbol]);
  

  return (
    <div className="tradingview-widget-container" ref={container} style={{ height: "600px", width: "100%", borderRadius: "10px", overflow: "hidden" }}>
      <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
    </div>
  );
}

const Page = () => {
  const { id } = useParams();
  const [e, setEvent] = useState(null);

  // ค้นหาข้อมูลจาก DataCryto
  useEffect(() => {
    const eventData = DataCryto.find(item => item.id === id);
    setEvent(eventData);
  }, [id]);

  if (!e) {
    return <div>ไม่พบข้อมูล</div>;
  }

  const chartYearsData = ["ปี 2022", "ปี 2023", "ปี 2024", " ปี 2025"]; // เพิ่ม labels

  const data = {
    labels: chartYearsData, // ใช้ labels ที่ตรงกับข้อมูล
    datasets: [
      {
        label: `การเติบโตของ ${e.symbol}`,
        data: [e.years1, e.years6, e.years1s, e.years5s].map(value => value ? Number(value) : 0),
        borderColor: "rgb(22, 163, 74)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      }
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "แนวโน้มการลงทุน" },
    },
  };

  return (
    <div className='p-4'>
      <div className=' h-[350px]'>
        <TradingViewWidget  symbol={e.symbol} />
      </div>
      <div className=" container mx-auto lg:w-150">

        <div className='lg:text-center   my-10'>
          <div className='p-4 shadow-lg border-t-7 border-green-500 rounded-lg me-5'>
            <div className='flex items-center lg:justify-center'>
              <Image
                className='me-3'
                src={`${e.image}`}
                width={50}
                height={50}
                alt='BTC'
              />
              <h1 className='text-gray-900 text-4xl font-semibold'>{e.id}</h1>
            </div>
            <div className='leading-8 text-sm text-gray-500'>
              <p className='text-gray-950 font-bold mt-2 text-lg'>{e.text}</p>
              <p>{e.text1}</p>
              <p>{e.text2}</p>
              <p>{e.text3}</p>
              <p className='text-green-500 text-lg font-bold'>{e.text4}</p>
              <p>{e.text5}</p>
              <p>{e.text6}</p>
              <p>{e.text7}</p>
              <p className='text-red-500 text-lg font-bold'>{e.text8}</p>
              <p>{e.text9}</p>
              <p>{e.text10}</p>
            </div>
          </div>
          {/* <div className='p-4'>
            <p className='text-lg mt-3 font-bold text-green-500'>ผลการเติบโตของ {e.id}</p>
           <div>
           <Line
           className='h-[400px]'
              data={data}
              options={{
                maintainAspectRatio: false, // ปิดการรักษาอัตราส่วน
              }}
            />
           </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Page;