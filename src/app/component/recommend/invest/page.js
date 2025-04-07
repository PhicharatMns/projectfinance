"use client"; // เข้าถึง document
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Landmark,
  ChartCandlestick,
  ChartPie,
  Cuboid,
  DollarSign,
  Gem,
  ArrowUpNarrowWide,
  BookOpenText,
  X,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    AOS.init();
  },[]);
  return (
    <div className="p-4   ">
      <div className="lg:flex mx-auto lg:w-280 mt-5 mb-4 relative">
        <div>
          <Image
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-easing="ease-in-sine"
            className="w-96 h-96 sm:mx-auto border border-green-500 rounded-full shadow-lg shadow-gray-500/80 hover:scale-98 ease-in duration-300"
            src={"/recommend/200w.gif"}
            width={50}
            height={150}
            alt="B"
          />
        </div>

        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500"
          className="  lg:mt-15 mt-1 sm:text-center  ms-10"
        >
          <p className="text-4xl text-green-500 my-5">การเริ่มต้นการลงทุน</p>
          <p>อย่ารอให้พร้อม เพราะโอกาสไม่รอใคร</p>
          <p>
            การลงทุนเป็นหนึ่งในวิธีที่ดีที่สุดในการสร้างความมั่นคงในระยะยาว
            เริ่มต้นวันนี้เพื่ออนาคตทางการงินที่มั่นคง
          </p>
          <div className="text-left sm:mx-auto sm:w-fit  flex">
            <Link href="/">
              <button className="bg-green-500 text-white rounded-lg mt-5 p-2 duration-400 hover:bg-green-400">
                คํานวนการลงทุน
              </button>
            </Link>
            <Link href="/">
              <button className="border border-green-500 text-green-500 p-2 rounded-lg mt-5 duration-400 hover:bg-green-500 mx-5 hover:text-white">
                ทําเเบบทดสอบ
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b-2   border-green-500"></div>

      <div className="mx-auto  lg:w-280 my-5">
        <div data-aos="fade-up" data-aos-duration="2000">
          <p className="text-4xl mb-5 text-center">ขั้นตอนการเริ่มต้นลงทุน</p>
          <p className="text-lg text-center  ">
            การลงทุนอย่างมีประสิทธิภาพเริ่มต้นจากการวางแผนที่ดี
            ทำตามขั้นตอนเหล่านี้เพื่อเริ่มต้นการลงทุนอย่างมั่นใจ
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-5">
          <div className="duration-300 ">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="shadow-lg p-8  rounded-2xl"
            >
              <p className="text-3xl mb-2">1. ตั้งเป้าหมายทางการเงิน</p>
              {/* leading ใช้กับ p เว้นระยะ */}
              <p className="leading-5 text-gray-600 text-sm">
                กำหนดเป้าหมายทางการเงินที่ชัดเจน ทั้งระยะสั้นและระยะยาว เช่น
                การซื้อบ้าน การศึกษาของบุตร หรือการเกษียณอายุ
              </p>
              {/* space-y-2 ใช้กับ ul เว้นระยะ */}
              <ul className="space-y-2 mt-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>กำหนดระยะเวลาที่ต้องการบรรลุเป้าหมาย</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>คำนวณจำนวนเงินที่ต้องการ</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>จัดลำดับความสำคัญของเป้าหมาย</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="duration-300">
            <div
              className="shadow-lg p-8 h-70 rounded-2xl"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <p className="text-3xl mb-2">2. สร้างเงินออมฉุกเฉิน</p>
              {/* leading ใช้กับ p เว้นระยะ */}
              <p className="leading-5 text-gray-600 text-sm">
                ก่อนเริ่มลงทุน ควรมีเงินออมฉุกเฉินอย่างน้อย 3-6
                เท่าของค่าใช้จ่ายต่อเดือน เพื่อรองรับเหตุการณ์ไม่คาดฝัน
              </p>
              {/* space-y-2 ใช้กับ ul เว้นระยะ */}
              <ul className="space-y-2 mt-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>เก็บในบัญชีที่เข้าถึงง่าย</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>เติมเต็มก่อนเริ่มลงทุนจริงจัง</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>แยกจากเงินลงทุนระยะยาว</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="shadow-lg p-8 h-70 rounded-2xl"
            >
              <p className="text-3xl mb-2">3. เลือกช่องทางการลงทุน</p>
              {/* leading ใช้กับ p เว้นระยะ */}
              <p className="leading-5 text-gray-600 text-sm">
                ศึกษาและเลือกช่องทางการลงทุนที่เหมาะสมกับเป้าหมาย ระยะเวลา
                และความเสี่ยงที่ยอมรับได้
              </p>
              {/* space-y-2 ใช้กับ ul เว้นระยะ */}
              <ul className="space-y-2 mt-2 text-gray-600 text-sm">
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>ประเมินความเสี่ยงที่ยอมรับได้</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>กระจายการลงทุนในหลายสินทรัพย์</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>เริ่มต้นด้วยจำนวนที่เหมาะสม</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-50 p-2">
        <div className="h-full mx-auto lg:w-280 w-full">
          <div className="my-2">
            <p className="text-4xl mb-5 text-center">
              ประเภทการลงทุนที่น่าสนใจ
            </p>
            <p className="text-lg text-center text-gray-500">
              ทำความรู้จักกับช่องทางการลงทุนที่หลากหลายเพื่อเลือกให้เหมาะกับเป้าหมายของคุณ
            </p>

            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-10">
              <Link href={"/"}>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500 shadow-lg p-5 rounded-2xl h-70 ">
                    <p className="text-lg mb-3 flex items-center">
                      <ChartCandlestick className="me-2" /> หุ้น (Stocks)
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      การลงทุนในหุ้นคือการเป็นเจ้าของส่วนหนึ่งของบริษัท
                      ซึ่งมีโอกาสได้รับผลตอบแทนสูงในระยะยาว
                      แต่มีความผันผวนสูงในระยะสั้น
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        ผลตอบแทนสูง
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        ความเสี่ยงสูง
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        ระยะยาว
                      </p>
                    </div>
                    <p className="text-sm text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="shadow-lg p-5 rounded-2xl hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500 h-70">
                    <p className="text-lg mb-3 flex items-center">
                      <ChartPie className="me-2" /> กองทุนรวม (Mutual Funds)
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      กองทุนรวมเป็นการรวบรวมเงินจากนักลงทุนหลายคนเพื่อลงทุนในสินทรัพย์ต่างๆ
                      โดยมีผู้จัดการกองทุนที่มีความเชี่ยวชาญบริหารจัดการ
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        กระจายความเสี่ยง
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        มืออาชีพบริหาร
                      </p>
                    </div>
                    <p className="px-2 p-1 w-31 bg-green-200 rounded-full me-1">
                      เหมาะกับมือใหม่
                    </p>
                    <p className="text-sm text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <div className="shadow-lg p-5 rounded-2xl hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500 h-70">
                    <p className="text-lg mb-3 flex items-center">
                      <Landmark className="me-2" /> พันธบัตรและตราสารหนี้
                      (Bonds)
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      พันธบัตรเป็นการให้กู้ยืมเงินแก่รัฐบาลหรือบริษัท
                      โดยจะได้รับดอกเบี้ยตามกำหนดและเงินต้นคืนเมื่อครบกำหนดการ
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        ความเสี่ยงต่ำ
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        รายได้สม่ำเสมอ
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        เงินต้นปลอดภัย
                      </p>
                    </div>
                    <p className="text-sm text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/component/gold"}>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="shadow-lg p-5 rounded-2xl hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500">
                    <p className="text-lg mb-3 flex items-center">
                      <Cuboid className="me-2" /> ทองคำ (Gold )
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      ทองคำและสินค้าโภคภัณฑ์ เช่น น้ำมัน หรือโลหะมีค่า
                      มักเป็นสินทรัพย์ปลอดภัยเมื่อเศรษฐกิจมีความไม่แน่นอน
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2  p-1 bg-green-200 rounded-full me-1">
                        ป้องกันความเสี่ยงเงินเฟ้อ
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        สินทรัพย์ปลอดภัย
                      </p>
                    </div>
                    <p className="px-2 p-1 w-50 bg-green-200 rounded-full me-1">
                      ราคาผันผวนตามตลาดโลก
                    </p>

                    <p className="text-sm text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/component/gold"}>
                <div data-aos="fade-up" data-aos-duration="2000">
                  <div className="shadow-lg p-5 rounded-2xl hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500">
                    <p className="text-lg mb-3 flex items-center">
                      <DollarSign className="me-2" /> คริปโทเคอร์เรนซี(Crypto)
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      สินทรัพย์ดิจิทัล เช่น Bitcoin หรือ Ethereum
                      มีโอกาสให้ผลตอบแทนสูง แต่ก็มีความเสี่ยงสูงและราคาผันผวนมาก
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        ศักยภาพเติบโตสูง
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        เทคโนโลยีใหม่ (Blockchain)
                      </p>
                    </div>
                    <p className="px-2 p-1 w-50 bg-green-200 rounded-full me-1">
                      ความเสี่ยงสูงและไม่แน่นอน
                    </p>

                    <p className="text-sm text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>

              <Link href={"/"}>
                <div data-aos="fade-up" data-aos-duration="3000">
                  <div className="shadow-lg p-5 rounded-2xl hover:shadow-gray-500/50 duration-300 hover:-translate-y-2 bg-white border-t-6 border-green-500">
                    {/* <p className=" text-2xl mb-3">การลงทุนในตัวเอง</p> */}
                    <p className="text-lg mb-3 flex items-center">
                      <Gem className="me-2" /> การลงทุนในตัวเอง
                    </p>
                    <p className="leading-5 text-gray-600 text-sm">
                      การพัฒนาทักษะ ความรู้
                      และการศึกษาถือเป็นการลงทุนที่ให้ผลตอบแทนดีที่สุดในระยะยาว
                    </p>
                    <div className="flex text-sm my-3">
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        เพิ่มโอกาสทางอาชีพ
                      </p>
                      <p className="px-2 p-1 bg-green-200 rounded-full me-1">
                        สร้างรายได้ในอนาคต
                      </p>
                    </div>
                    <p className="px-2 p-1 w-50 bg-green-200 rounded-full me-1">
                      ไม่ต้องใช้เงินลงทุนสูง
                    </p>
                    <p className="text-sm  text-green-500 mt-3">
                      ข้อมูลเพิ่มเติม
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="my-15 leading-9 lg:flex">
              <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"

              >
                <p className="text-3xl text-green-500 my-5">
                  เคล็ดลับสำหรับนักลงทุนมือใหม่
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  การเริ่มต้นลงทุนอาจดูน่ากลัว แต่ด้วยเคล็ดลับเหล่านี้
                  คุณจะสามารถเริ่มต้นได้อย่างมั่นใจและประสบความสำเร็จในระยะยาว
                </p>
                <p className="text-lg font-bold mb-2 flex">
                  <ArrowUpNarrowWide className="me-2  text-green-500" />{" "}
                  เริ่มต้นด้วยจำนวนเงินที่เหมาะสม
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  ไม่จำเป็นต้องมีเงินจำนวนมากในการเริ่มต้นลงทุน
                  ควรเริ่มจากจำนวนที่คุณสบายใจและไม่กระทบต่อค่าใช้จ่ายประจำวัน
                </p>
                <p className="text-lg font-bold mb-2 flex">
                  <BookOpenText className="me-2 text-green-500" />
                  ศึกษาอย่างต่อเนื่อง
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  ตลาดการเงินมีการเปลี่ยนแปลงตลอดเวลา
                  การศึกษาและติดตามข่าวสารอย่างสม่ำเสมอจะช่วยให้คุณตัดสินใจลงทุนได้อย่างชาญฉลาด
                </p>

                <p className="text-lg font-bold mb-2 flex">
                  <X className="me-2 text-green-500" />{" "}
                  อย่าลงทุนในสิ่งที่ไม่เข้าใจ
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  ควรทำความเข้าใจกับสินทรัพย์ที่คุณกำลังจะลงทุนให้ดีก่อนตัดสินใจลงทุน
                  เพื่อลดความเสี่ยงจากการตัดสินใจผิดพลาด
                </p>
              </div>

              <div className="lg:w-100 w-fit mx-auto mt-10 mb-10 ">
                <Image
                  data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="500"
                  data-aos-duration="500"
                  className="shadow-lg shadow-green-500/30 rounded-4xl"
                  src={"/recommend/shutterstock_2000460710.webp"}
                  width={500}
                  height={150}
                  alt="BTC"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}