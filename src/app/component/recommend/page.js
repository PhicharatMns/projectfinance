import Image from "next/image";
import Link from "next/link";
import DataRecommend from "../../data/DataRecommend";
import { FaBookOpen } from "react-icons/fa";
import { AiOutlineSliders } from "react-icons/ai";
import { AiTwotoneCloud } from "react-icons/ai";

export default function Page() {
  return (
    <div className="p-4">
      <div className="mx-auto mt-5 ">
        <div className="flex shadow-sm mt-5 mb-5 p-5 justify-center border-t-5 border-green-400 flex-col sm:flex-row">
          <Image
            className="w-full sm:w-96 h-auto sm:h-96 border border-green-500 rounded-full shadow-lg shadow-gray-500/80 hover:scale-98 ease-in duration-300"
            src={"/recommend/money1.gif"}
            width={150}
            height={150}
            alt="B"
          />
          <div className="w-full sm:w-auto sm:ms-10 sm:my-15 text-center">
            <p className="text-4xl sm:text-6xl text-green-500 mt-5 mb-5">
              มือใหม่เริ่มลงทุน
            </p>
            <p className="text-lg text-gray-500 leading-7 ">
              เงินไม่ใช่ทุกสิ่ง เเต่ทุกสิ่งต้องใช้เงิน
            </p>
            <div>
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

      <div>
        <div className="shadow-lg p-5 my-10 rounded-xl mx-auto container w-full sm:w-200 border-t-5 border-green-400">
          <p className="my-5 text-3xl sm:text-4xl text-center">
            เริ่มต้นการลงทุนอย่างชาญฉลาด
          </p>
          <p className="my-5 w-full sm:w-160 leading-8 mx-auto text-center">
            การเริ่มลงทุนสำหรับมือใหม่ควรเริ่มจากการตั้งเป้าหมายการลงทุนที่ชัดเจน
            และมีเงินออมฉุกเฉินก่อน จากนั้นศึกษาผลิตภัณฑ์การลงทุนต่างๆ เช่น หุ้น
            กองทุน และพันธบัตร
            โดยต้องเข้าใจความเสี่ยงและลงทุนในสินทรัพย์ที่เหมาะสมกับตัวเอง ค่อยๆ
            เริ่มลงทุนทีละน้อย และกระจายการลงทุนเพื่อลดความเสี่ยง
            นอกจากนี้ยังควรติดตามผลการลงทุนและปรับแผนตามความจำเป็น
          </p>
          <p className="my-5 text-2xl sm:text-3xl text-center">หมวดหมู่การเรียนรู้</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href={"/component/recommend/invest"}>
              <div className="shadow-xl rounded-xl p-3 bg-green-50 hover:scale-101 duration-300">
                <div className="text-green-500 text-3xl sm:text-4xl w-15 px-3 p-2 rounded-full bg-green-200">
                  <FaBookOpen />
                </div>
                <p className="text-xl font-semibold my-2">ความรู้พื้นฐาน</p>
                <p className="text-sm my-2">
                  เรียนรู้หลักการพื้นฐานของการลงทุนและการวางแผนทางการเงิน
                </p>
                <p className="text-sm text-green-500">ข้อมูลเพิ่มเติม</p>
              </div>
            </Link>

            <Link href={"/component/recommend/strategy"}>
              <div className="shadow-xl rounded-xl p-3 bg-green-50 hover:scale-101 duration-300">
                <div className="text-green-500 text-3xl sm:text-4xl w-15 px-3 p-2 rounded-full bg-green-200">
                  <AiOutlineSliders />
                </div>
                <p className="text-xl font-semibold my-2">กลยุทธ์การลงทุน</p>
                <p className="text-sm my-2">
                  เรียนรู้กลยุทธ์การลงทุนที่เหมาะสมกับเป้าหมายและความเสี่ยงของคุณ
                </p>
                <p className="text-sm text-green-500">ข้อมูลเพิ่มเติม</p>
              </div>
            </Link>

            <Link href={"/component/recommend/Riskmanagement"}>
              <div className="shadow-xl rounded-xl p-3 bg-green-50 hover:scale-101 duration-300">
                <div className="text-green-500 text-3xl sm:text-4xl w-15 px-3 p-2 rounded-full bg-green-200">
                  <AiTwotoneCloud />
                </div>
                <p className="text-xl font-semibold my-2">การจัดการความเสี่ยง</p>
                <p className="text-sm my-2">
                  เรียนรู้วิธีการจัดการและลดความเสี่ยงในการลงทุนของคุณ
                </p>
                <p className="text-sm text-green-500">ข้อมูลเพิ่มเติม</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full lg:w-240 mx-auto">
          <div className="text-center mb-7">
            <p className="text-3xl sm:text-4xl font-bold mb-2">คำแนะนำสำหรับนักลงทุนมือใหม่</p>
            <p>
              เคล็ดลับและคำแนะนำที่จะช่วยให้คุณเริ่มต้นการลงทุนได้อย่างมั่นใจและประสบความสำเร็จ
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-5 mb-5">
            {DataRecommend.map((event, index) => {
              return (
                <div key={index} className="p-5 bg-white shadow-lg rounded-2xl border-r-6 border-green-500 hover:shadow-gray-500/80 duration-300 hover:scale-103 ">
                  <p className="text-green-500 text-xl sm:text-2xl my-2">{event.title}</p>
                  <p>{event.text}</p>
                  <Link href={`/component/recommend/${event.id}`}>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
