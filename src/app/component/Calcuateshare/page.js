"use client";

import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  const [Numbers, setNumbers] = useState(10000);
  const [Year, setYear] = useState(40);
  const [percent, setPercent] = useState(18);
  const [total, setTotal] = useState(0);
  const [totalDCA, setTotalDCA] = useState(0);
  const [DAC, setDAC] = useState(1000);
  const [chartData, setChartData] = useState([]);
  const [chartYearsData, setChartYearsData] = useState([]);
  const [ChartDataDCA, setChartDataDCA] = useState([]);
  const [newDataChart, setNewDataChart] = useState([]);

  const data = {
    labels: chartYearsData,
    datasets: [
      {
        label: "การเติบโตของเงินลงทุน (ทุนเริ่มต้น)",
        data: chartData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "การเติบโตของเงินลงทุน (DCA)",
        data: ChartDataDCA,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "แนวโน้มการลงทุน" },
    },
  };

  useEffect(() => {
    AOS.init();
    const Num = parseFloat(Numbers) || 0;
    const Yrs = parseFloat(Year) || 0;
    const Perc = parseFloat(percent) || 0;
    const DACS = parseFloat(DAC) || 0;

    // Loop years
    let CategoryDataYears = [];
    for (let i = 1; i <= Yrs; i++) {
      CategoryDataYears.push(`ปี ${i}`);
    }
    setChartYearsData(CategoryDataYears);

    // loop ทุน ปกติ
    let totalAmount = Num;
    let calculatedTotals = [];
    for (let i = 1; i <= Yrs; i++) {
      totalAmount += (totalAmount * Perc) / 100;
      calculatedTotals.push(totalAmount); //เพิ่ใ totalAmount ไปใน Array calculatedTotals
    }
    setChartData(calculatedTotals); // ให้ set ไปเเสดงผลกราฟ
    setTotal(totalAmount); //ให้ set ไปเเสดงผล

    // DCA loop
    let totalSumDCA = 0;
    let calculatedTotalsDCAS = [];
    for (let i = 1; i <= Yrs; i++) {
      // บวก DCA รายเดือนก่อน
      for (let month = 1; month <= 12; month++) {
        totalSumDCA += DACS;
      }
      //คํานวน DCA รายปี
      totalSumDCA += (totalSumDCA * Perc) / 100; // การเติบโตรายปี
      calculatedTotalsDCAS.push(totalSumDCA); //เพิ่ใ totalSumDCA ไปใน Array calculatedTotalsDCAS
    }

    setChartDataDCA(calculatedTotalsDCAS); // ให้ set ไปเเสดงผลกราฟ
    setTotalDCA(totalSumDCA); //ให้ set ไปเเสดงผล
  }, [Numbers, Year, percent, DAC]);

  return (
    <div className="mx-auto container lg:w-320 w-ful p-3">
      <div className="text-center my-10">
        <p className="text-4xl text-green-500">เครื่องคำนวณการลงทุน</p>
        <p className="text-sm my-2 text-gray-500">
          วางแผนการลงทุน และดูการเติบโตของเงินลงทุนในระยะยาว
        </p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
        <div className="shadow-lg">
          <div className=" p-4 bg-green-500 rounded-t-2xl flex items-center">
            <p className="text-white text-xl">คำนวณราคาการลงทุน</p>
          </div>
          <div className="flex justify-between px-4 p-3 ">
            <p className="text-xl">การลงทุนที่เเนะนํา</p>
          </div>
          <div className="px-4 mt-2">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-green-500 text-white text-left">
                  <th className="border border-gray-300 px-4 py-2 text-lg">
                    ประเภทการลงทุน
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-lg">
                    ต่อปี
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100 transition-all duration-300">
                  <td className="border border-gray-300 px-4 py-2">
                    7 หุ้นนางฟ้าสหรัฐ (Magnificent 7)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    18–25%
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-300">
                  <td className="border border-gray-300 px-4 py-2">
                    7 หุ้นนางฟ้าสหรัฐ (Magnificent 7) กองทุน QQQ (Invesco QQQ
                    Trust)
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    7.4%
                  </td>
                </tr>
                <tr className="hover:bg-gray-100 transition-all duration-300">
                  <td className="border border-gray-300 px-4 py-2">
                    7 หุ้นนางฟ้าไทย
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    7–10%
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="mt-5 mb-5  text-lg font-semibold">
              <p>กรอกข้อมูลการลงทุน</p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-gray-700 font-medium text-sm">
                    เงินลงทุนเริ่มต้น (บาท)
                  </label>
                  <input
                    type="number"
                    placeholder="กรอกจำนวนเงินที่ต้องการลงทุน"
                    className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Numbers}
                    onChange={(event) =>
                      setNumbers(parseFloat(event.target.value))
                    }
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-sm">
                    ระยะเวลาลงทุน (ปี)
                  </label>
                  <input
                    type="number"
                    placeholder="กรอกระยะเวลาที่ต้องการลงทุน"
                    className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={Year}
                    onChange={(event) =>
                      setYear(parseFloat(event.target.value))
                    }
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-sm">
                    อัตราผลตอบแทนเฉลี่ยต่อปี (%)
                  </label>
                  <input
                    type="number"
                    placeholder="เปอร์เซ็นต์การเติบโตต่อปี"
                    className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={percent}
                    onChange={(event) =>
                      setPercent(parseFloat(event.target.value))
                    }
                  />
                </div>
                <div>
                  <label className="text-gray-700 font-medium text-sm">
                    เงินลงทุนรายเดือน (DCA) (บาท)
                  </label>
                  <input
                    type="number"
                    placeholder="กรอกจำนวนเงินที่ต้องการลงทุนรายเดือน"
                    className="border border-gray-300 rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                    value={DAC}
                    onChange={(event) => setDAC(parseFloat(event.target.value))}
                  />
                </div>
              </div>

              <div className="mt-5 mb-5  text-lg font-semibold">
                <p>กรอกข้อมูลการลงทุน</p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl shadow-md ">
                <h2 className="mb-3 text-green-600">สรุปข้อมูลการลงทุน</h2>
                <div className="space-y-2">
                  <p className="flex justify-between">
                    <span className="font-medium">เงินลงทุนเริ่มต้น:</span>
                    <span>
                      {Numbers.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      บาท
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">ระยะเวลาลงทุน:</span>
                    <span>{Year} ปี</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">
                      อัตราผลตอบแทนเฉลี่ยต่อปี:
                    </span>
                    <span>{percent} %</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">
                      เงินลงทุนรายเดือน (DCA):
                    </span>
                    <span>
                      {DAC.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท
                    </span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">เงินลงทุน DCA</span>
                    <span>
                      {(DAC * 12 * Year)
                        .toFixed(0)
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                      บาท
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-xl shadow-md space-y-2 ">
                <h2 className="mb-3 text-green-600">
                  มูลค่าเงินลงทุนเมื่อครบกำหนด
                </h2>
                <p className="flex justify-between">
                  <span>มูลค่าจากเงินลงทุนเริ่มต้น:</span>{" "}
                  <span className="lg:text-lg  text-green-600 font-bold">
                    {total.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} บาท
                  </span>
                </p>
                <p className="flex justify-between">
                  <span>มูลค่าจากทุน DCA:</span>{" "}
                  <span className="lg:text-lg text-green-600 font-bold">
                    {totalDCA.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    บาท
                  </span>
                </p>
                <p className="flex justify-between border-t-1 border-gray-500 ">
                  <span className="font-bold mt-2">มูลค่ารวมทั้งหมด:</span>
                  <span className="lg:text-lg text-green-600 font-bold mt-2">
                    {(Number(total) + Number(totalDCA))
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                    บาท
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="shadow-lg mb-6">
            <div className=" p-4 bg-green-500 rounded-t-2xl flex items-center h-fit">
              <p className="text-white text-xl">แนวโน้มการเติบโตของเงินลงทุน</p>
            </div>
            <div className="lg:p-4 h-[350px] w-full">
              <Line
                data={data}
                options={{
                  maintainAspectRatio: false, // ปิดการรักษาอัตราส่วน
                }}
              />
            </div>
          </div>

          <div className=" shadow-lg">
            <div className=" p-4 bg-green-500 rounded-t-2xl flex items-center h-fit">
              <p className="text-white text-xl">
                ข้อมูลเพิ่มเติมเกี่ยวกับการลง
              </p>
            </div>
            <div className="text-sm text-gray-500 leading-7 p-4">
              <div>
                <p className="font-bold text-gray-950">
                  การลงทุนแบบเงินก้อน (Lump Sum Investment)
                </p>
                <p>
                  การลงทุนแบบเงินก้อนคือการนำเงินจำนวนหนึ่งมาลงทุนทั้งหมดในครั้งเดียว
                  โดยทั่วไปนักลงทุนจะเลือกซื้อหุ้นหรือกองทุนรวมที่มีพื้นฐานแข็งแกร่งในบริษัทที่มีศักยภาพเติบโตในระยะยาว
                  วิธีนี้เหมาะสำหรับตลาดหุ้นที่มีแนวโน้มขาขึ้นในระยะยาว
                  อย่างไรก็ตาม
                  นักลงทุนควรระมัดระวังต่อความผันผวนในระยะสั้นที่อาจเกิดขึ้นในตลาดหุ้น
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-950">
                  การลงทุนแบบ DCA (Dollar-Cost Averaging)
                </p>
                <p>
                  การลงทุนแบบ DCA คือการทยอยลงทุนเป็นประจำในช่วงเวลาที่กำหนด
                  เช่น ทุกเดือน โดยเลือกซื้อหุ้นหรือกองทุนรวมอย่างสม่ำเสมอ
                  วิธีนี้ช่วยลดความเสี่ยงจากการลงทุนในจังหวะที่ราคาสูงเกินไป
                  และเป็นกลยุทธ์ที่เหมาะกับนักลงทุนที่ต้องการลดผลกระทบจากความผันผวนของตลาดหุ้น
                </p>
              </div>
              <div>
                <p className="font-bold text-gray-950">
                  ปัจจัยที่มีผลต่อราคาหุ้น
                </p>
                <p>
                  -ผลประกอบการและพื้นฐานของบริษัท: ความสามารถในการสร้างรายได้
                  กำไรสุทธิ และแนวโน้มการเติบโต
                </p>
                <p>
                  -แนวโน้มของอุตสาหกรรม:ความเปลี่ยนแปลงและการแข่งขันในอุตสาหกรรม
                </p>
                <p>
                  -นโยบายของรัฐบาล: กฎระเบียบใหม่ๆ นโยบายการเงิน
                  และภาษีที่มีผลต่อการดำเนินธุรกิจ
                </p>
                <p>
                  -ภาวะเศรษฐกิจ: การเปลี่ยนแปลงของอัตราดอกเบี้ยและอัตราเงินเฟ้อ
                </p>
                <p>
                  -ความเชื่อมั่นของนักลงทุน:
                  การวิเคราะห์ตลาดที่ส่งผลต่อความเชื่อมั่นและแนวโน้มการซื้อขายหุ้น
                </p>
              </div>
              <div className="border-t-1 border-gray-500 mt-2">
                <p>การลงทุนมีความเสี่ยง ผู้ลงทุนควรศึกษาก่อนเพิ่มลงทุน</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// "use client";

// import { useState } from "react";
// import EssentialGoods from "../../data/EssentialGoods";

// export default function GoodsList() {
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [sumYeasr1, setSumYeasr1] = useState(0);

//   const handleItemClick = (item) => {
//     // ตรวจสอบว่ารายการนี้ถูกเลือกแล้วหรือไม่
//     const isSelected = selectedItems.includes(item);

//     let newSelectedItems;
//     if (isSelected) {
//       // ถ้าถูกเลือกแล้ว ให้เอาออกจากรายการที่เลือก
//       newSelectedItems = selectedItems.filter((i) => i !== item);
//     } else {
//       // ถ้ายังไม่ถูกเลือก ให้เพิ่มเข้าไปในรายการที่เลือก
//       newSelectedItems = [...selectedItems, item];
//     }

//     setSelectedItems(newSelectedItems);

//     // คำนวณผลรวมของ Yeasr1 จากรายการที่ถูกเลือก
//     const total = newSelectedItems.reduce((acc, curr) => acc + Number(curr.Yeasr1), 0);
//     setSumYeasr1(total);
//   };

//   return (
//     <div>
//       <h1>รายการ Essential Goods</h1>
//       <ul>
//         {EssentialGoods.map((item, index) => (
//           <li
//             key={index}
//             style={{
//               margin: "1rem 0",
//               cursor: "pointer",
//               backgroundColor: selectedItems.includes(item) ? "#e0e0e0" : "transparent",
//             }}
//             onClick={() => handleItemClick(item)}
//           >
//             <h3>{item.section}</h3>
//             <p>{item.title}</p>
//             <p>ผลตอบแทน 1 ปี: {item.Yeasr1}%</p>
//           </li>
//         ))}
//       </ul>
//       <h2>ผลรวมของผลตอบแทน 1 ปี: {sumYeasr1}%</h2>
//     </div>
//   );
// }
