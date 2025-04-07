import Link from "next/link"
import Image from "next/image"
import datastrateg from "@/src/app/data/datastrategy"
import datahotstrategy from "@/src/app/data/datahotstrategy"
import { X, Check } from 'lucide-react';
import datatextstrategy from "@/src/app/data/datatextstrategy";

export default function strategy() {
  return (
    <div className="p-5 lg:p-0">
      <div className='mx-auto lg:w-280  container h-full'>
        <div className="p-4">
          <div className='grid lg:grid-cols-2 grid-cols-1'>
            <div className=''>
              <Image
                className="border sm:mx-auto  border-green-500 rounded-full shadow-lg shadow-gray-500/80 hover:scale-98 ease-in duration-300"
                src={'/strategy/finance-growth-animation-download-in-lottie-json-gif-static-svg-file-formats--money-plant-saving-pack-business-animations-4657351.gif'}
                width={450}
                height={50}
                alt="btc"
              />
            </div>

            <div className=''>
              <div className="mt-30 sm:mt-5">
                <div>
                  <p className="text-green-500 text-5xl my-5 text-center lg:text-left">กลยุทธ์การลงทุน</p>
                  <p>เรียนรู้กลยุทธ์การลงทุนที่หลากหลายเพื่อสร้างพอร์ตการลงทุนที่เหมาะสมกับเป้าหมายและความเสี่ยงของคุณ</p>
                </div>
                <div className="mx-auto w-fit">
                  <Link href="/">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-5 duration-400 hover:bg-green-400 ">
                      คํานวนการลงทุน
                    </button>
                  </Link>
                  <Link href="/">
                    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-lg mt-5 duration-400 hover:bg-green-500 mx-5 hover:text-white">
                      ทําเเบบทดสอบ
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-5 border-green-500">
        <div className=" container mx-auto">
          <p className="text-green-500 text-3xl  text-center my-5">ระยะเวลาที่เเนะนํา</p>
          <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-5 ">
            {datastrateg.map((event, index) => {
              return (
                <div key={index} className=" shadow-xl border-t-7 rounded-xl border-green-500 text-sm p-4 leading-7 text-gray-500 hover:translate-y-2 duration-300 ">
                  <p className="text-green-500 text-lg">{event.body}</p>
                  <p className="text-gray-950 font-bold">{event.title}</p>
                  <p>- {event.text1}</p>
                  <p>- {event.text2}</p>
                  <p className="text-gray-950 font-bold">{event.title2}</p>
                  <p>- {event.text2_1}</p>
                  <p>- {event.text2_3}</p>
                  <p>- {event.text2_2}</p>
                </div>
              )
            })}
          </div>

          <div >
            <div className="text-center my-10  ">
              <button className="p-1 bg-green-100 text-green-700 text-sm rounded-lg px-5 ">กลยุทธ์หลัก</button>
              <p className="text-green-700 text-5xl my-4 font-bold">กลยุทธ์การลงทุนที่นิยมใช้</p>
              <p className="lg:w-180 mx-auto">แต่ละกลยุทธ์มีแนวคิด ข้อดี และข้อจำกัดที่แตกต่างกัน การเลือกกลยุทธ์ที่เหมาะสมขึ้นอยู่กับเป้าหมาย ระยะเวลา และความเสี่ยงที่ยอมรับได้</p>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {datahotstrategy.map((event, index) => {
              return (
                <div key={index} className="border  border-t-6  rounded-lg border-green-500/10  p-4 text-sm text-gray-500 shadow-xl hover:translate-t-2">
                  <div className="text-green-600 bg-green-200 w-fit p-2 rounded-full">
                    {event.icons && <event.icons className="w-8 h-8" />}
                  </div>

                  <p className="text-2xl text-gray-950 font-bold leading-7">{event.body_datahot}</p>
                  <p className='text-gray-950'>{event.sm}</p>
                  <p className="my-2">{event.text}</p>

                  <div className='leading-8'>
                    <div className="flex items-center">
                      <Check className="p-1 bg-green-300 text-green-500 rounded-full" />
                      <p>{event.value}</p>
                    </div>

                    <div className="flex items-center">
                      <Check className="p-1 bg-green-300 text-green-500 rounded-full" />
                      <p>{event.value_1}</p>
                    </div>

                    <div className="flex items-center">
                      <X className="bg-red-300 p-1 text-red-500 rounded-full" />
                      <p>  {event.value_2}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="bg-green-100 p-4">
        <div className="container mx-auto">
          <div className="text-center">
            <button className="text-green-800 bg-green-200 p-2 rounded-lg text-sm">เคล็ดลับจากผู้เชี่ยวชาญ</button>
            <p className="text-3xl font-bold my-4 text-green-700">เคล็ดลับสำหรับการใช้กลยุทธ์การลงทุนให้ประสบความสำเร็จ</p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-2  gap-5 mb-10">
            {datatextstrategy.map((event, index) => {
              return (
                <div key={index} className="rounded-xl  p-4 text-sm text-gray-500 shadow-xl hover:translate-t-2 bg-white ">
                  <div>
                    <div className="text-green-600 bg-green-200 w-fit p-2 rounded-full">
                      {event.icons && <event.icons className="w-8 h-8" />}
                    </div>
                    <p className="text-green-600 text-2xl font-bold my-2">{event.body}</p>
                    <p>{event.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  )
}