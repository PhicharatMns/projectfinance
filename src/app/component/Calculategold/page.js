"use client";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { useState, useEffect, use } from "react";
import {
  GitPullRequestCreate,
  ChartNoAxesCombined,
  BadgeInfo,
} from "lucide-react";

const data = {
  labels: [
    "2545",
    "2546",
    "2547",
    "2548",
    "2549",
    "2550",
    "2551",
    "2552",
    "2553",
    "2554",
    "2556",
    "2557",
    "2558",
    "2559",
    "2560",
    "2561",
    "2562",
    "2563",
    "2564",
    "2565",
    "2566",
    "2567",
    "2568/1",
    "2568/3",
  ],
  datasets: [
    {
      label: "ราคาทอง96.5% เเต่ละช่วงปี",
      data: [
        6355, 7167, 7844, 8555, 12900, 13300, 15350, 17250, 20050, 27100, 25900,
        24350, 21500, 20150, 22800, 21200, 20300, 22300, 30400, 28950, 32100,
        34400, 42300, 59600,
      ],
      borderColor: "rgb(22, 163, 74)",
      backgroundColor: "rgba(22, 163, 74, 0.1)",
      tension: 0.3,
      fill: true,
      pointRadius: 3,
      pointBackgroundColor: "rgb(22, 163, 74)",
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: "การเติบโตของการลงทุนในทองคำ",
    },
  },
};

export default function Calculategold() {
  const [amount, setamount] = useState(1);
  const [unit, setunit] = useState("กรัม");
  const [gram, setgram] = useState(1);
  const [Bth, setBth] = useState(1);
  const [dime, setdime] = useState(1);
  const [sum, setsum] = useState(0);
  const [sum1, setsum1] = useState(0);
  const [sum2, setsum2] = useState(0);

  useEffect(() => {

    
    let GolaA = 1;
    let GolaB = 1;
    let GOlaC = 1;
    let Sum1 = 1;
    let Sum2 = 1;
    let Sum3 = 1;

    if (unit === "กรัม") {
      GolaA = 1;
      GolaB = 1 / 3.811;
      GOlaC = 1 / 15.244;
      Sum1 = (1 * 49600) / 15.244;
      Sum2 = 50400 / 15.244;
      Sum3 = 104379 / 15.244;
    } else if (unit === "สลึง") {
      GolaA = 3.811;
      GolaB = 1;
      GOlaC = 3.811 / 15.244;
      Sum1 = (1 * 46900) / 4;
      Sum2 = 50400 / 4;
      Sum3 = 104379 / 3.811 / 15.244;
    } else if (unit === "บาท") {
      GolaA = 15.244;
      GolaB = 15.244 / 3.811;
      GOlaC = 1;
      Sum1 = (1 * 46900) / 1;
      Sum2 = 50400 / 1;
      Sum3 = 104379 / 1;
    }

    setBth(amount * GOlaC);
    setgram(amount * GolaA);
    setdime(amount * GolaB);
    setsum(amount * Sum1);
    setsum1(amount * Sum2);
    setsum2(amount * Sum3);
  }, [amount, unit]);
  return (
    <div className="p-4">
      <div className="lg:w-320 w-full mx-auto container">
        <div className="text-center my-10">
          <p className="text-4xl text-green-500">เครื่องคำนวณราคาทองคำ</p>
          <p className="text-sm my-2 text-gray-500">
            คำนวณราคาทองคำและแปลงหน่วยทองคำได้อย่างง่ายดาย
          </p>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
              className=" p-4 bg-green-500  flex items-center rounded-t-xl "
            >
              <GitPullRequestCreate className="text-white mr-2" />
              <p className="text-white text-xl">คำนวณราคาทองคำ</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
              className="p-4  h-fit shadow-lg"
            >
              <div className="flex justify-between">
                <p className="text-xl">ราคาทองล่าสุด</p>
                <p className="text-sm text-green-500">
                  ประจำวันที่ วันอาทิตย์ที่ 30 มีนาคม 2568
                </p>
              </div>
              <div>
                <table className="w-full border-collapse border border-gray-300 mt-5 ">
                  <thead>
                    <tr className="bg-green-500 text-white text-left">
                      <th className="border border-gray-300 px-4 py-2 text-lg">
                        ประเภททองคำ
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-lg">
                        ราคา (บาท)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        ทองแท่ง 96.5% (1 บาททอง)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        49,600
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td className="border border-gray-300 px-4 py-2">
                        ทองรูปพรรณ 96.5% (1 บาททอง)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        50,400
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        ทอง 99.9% (1 กิโลกรัม)
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-right">
                        104,379
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div>
                  <p className="mt-5 font-semibold">
                    กรอกจำนวนทองคำที่ต้องการคำนวณ
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">จําวนวน</p>
                    <input
                      type="number"
                      value={amount}
                      onChange={(event) => {
                        setamount(event.target.value);
                      }}
                      className="border border-gray-500  rounded-lg p-1 mt-2 w-full"
                    />
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">จําวนวน</p>
                    <select
                      value={unit}
                      onChange={(event) => {
                        setunit(event.target.value);
                      }}
                      className="border border-gray-500 rounded-lg p-1 mt-2 w-full"
                    >
                      <option value="กรัม">กรัม</option>
                      <option value="สลึง">สลึง</option>
                      <option value="บาท">บาท (น้ำหนักทองคำไทย)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p className="text-lg mt-7 ">ผลการคำนวณ</p>
                  <div className="bg-green-50 my-3 p-3 rounded-lg ">
                    <p className="text-sm text-gray-700">การแปลงหน่วย</p>
                    <div className="grid grid-cols-3 mt-4">
                      <div>
                        <p className="text-sm text-gray-700">น้ำหนัก (กรัม)</p>
                        <p className="font-semibold">{gram.toFixed(3)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">น้ำหนัก (สลึง)</p>
                        <p className="font-semibold">{dime.toFixed(3)}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-700">น้ำหนัก (บาท)</p>
                        <p className="font-semibold">{Bth.toFixed(3)}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-green-50 my-3 p-4 rounded-lg shadow-md ">
                    <p className="text-sm text-gray-500 mb-3">มูลค่าทองคำ</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-gray-700 space-y-2">
                        <p className="font-medium">ทองแท่ง 96.5%</p>
                        <p className="font-medium">ทองรูปพรรณ 96.5%</p>
                        <p className="font-medium">ทอง 99.9%</p>
                      </div>
                      <div className="text-right font-semibold text-gray-800 space-y-2">
                        <p>{sum.toFixed(2)} บาท</p>
                        <p>{sum1.toFixed(2)} บาท</p>
                        <p>{sum2.toFixed(2)} บาท</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className=" p-4 bg-green-500 rounded-t-2xl flex  items-center"
            >
              <ChartNoAxesCombined className="text-white mr-2" />
              <p className="text-white text-xl">คำนวณราคาทองคำ</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="shadow-lg"
            >
              <Line data={data}
                options={options} />
            </div>

            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className=" p-4 bg-green-500 rounded-t-2xl mt-6 shadow-lg flex items-center"
            >
              <BadgeInfo className="text-white mr-2" />
              <p className="text-white text-xl">ข้อมูลเพิ่มเติมเกี่ยวกับทองคำ</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="p-4 text-sm text-gray-600 shadow-lg"
            >
              <div className="leading-7">
                <p className="font-semibold text-gray-950">
                  หน่วยวัดน้ำหนักทองคำในประเทศไทย
                </p>
                <p> 1บาททอง = 15.244 กรัม</p>
                <p>1 บาททอง = 4 สลึง</p>
                <p>1 สลึง = 3.811 กรัม</p>
              </div>

              <div className="leading-7 w-10/16">
                <p className="font-semibold text-gray-950">
                  ความบริสุทธิ์ของทองคำ
                </p>
                <p>
                  ทองคำแท่งและทองรูปพรรณในประเทศไทยส่วนใหญ่มีความบริสุทธิ์ 96.5%
                  ทองคำ 99.9% เป็นทองคำบริสุทธิ์สูงที่นิยมใช้ในการลงทุนระดับสากล
                </p>
              </div>

              <div className="leading-7">
                <p className="font-semibold text-gray-950">
                  ปัจจัยที่มีผลต่อราคาทองคำ
                </p>
                <p>- อัตราเงินเฟ้อและนโยบายการเงิน</p>
                <p>- ความไม่แน่นอนทางเศรษฐกิจและการเมือง</p>
                <p>- ค่าเงินดอลลาร์สหรัฐและค่าเงินบาท</p>
                <p>- อุปสงค์และอุปทานของทองคำในตลาดโลก</p>
              </div>

              <p className="leading-7 border-t-1 border-gray-200 mt-5">
                ทองคำเป็นสินทรัพย์ที่มักใช้เป็นเครื่องป้องกันความเสี่ยงจากเงินเฟ้อและความไม่แน่นอนทางเศรษฐกิจ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
