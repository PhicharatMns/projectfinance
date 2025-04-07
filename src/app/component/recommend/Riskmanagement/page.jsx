"use client"; // Client Component
import { useEffect, useState } from "react";
import Riskmanagement from "@/src/app/data/sumRiskmanagement";
import { Search, ArchiveX } from "lucide-react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Average } from "next/font/google";
import Link from "next/link";
import React from "react";

const About = () => {
  const [currentPage, setCurrentPage] = useState("กลุ่มหุ้น");
  const [selectedStocks, setSelectedStocks] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [Category, setCategory] = useState();
  const [Risk, setRisk] = useState();
  const [isSelected, setIsSelected] = useState({});
  const [sortedData, setSortedData] = useState([]); // เก็บข้อมูลที่อาจจะเรียงแล้ว (ถ้ามี Logic การเรียง)
  const [filteredData, setFilteredData] = useState([]);

  //การหา ค่า เฉลียหุ้น 1 ปี
  const calculateAverageDividend = (selectedStocks) => {
    if (selectedStocks.length > 0) {
      return (
        selectedStocks.reduce(
          (sum, stoct) => sum + (Number(stoct.Yeasr1) || 0),
          0
        ) / selectedStocks.length
      );
    }
    return 0; // หรือค่าอื่น ๆ ที่เหมาะสมเมื่อไม่มีหุ้น
  };
  const averageDividend = calculateAverageDividend(selectedStocks);

  //การหา ค่า เฉลียหุ้น 5 ปี
  const calculateAverageDividend5 = (selectedStocks) => {
    if (selectedStocks.length > 0) {
      return (
        selectedStocks.reduce(
          (sum, stoct) => sum + (Number(stoct.Yeasr5) || 0),
          0
        ) / selectedStocks.length
      );
    }
    return 0; // หรือค่าอื่น ๆ ที่เหมาะสมเมื่อไม่มีหุ้น
  };
  const averageDividend5 = calculateAverageDividend5(selectedStocks);

  //การหา ปันผล
  const totaldividend = (selectedStocks) => {
    if (selectedStocks.length > 0) {
      return (
        selectedStocks.reduce(
          (sum, stoct) => sum + (Number(stoct.dividend) || 0),
          0
        ) / selectedStocks.length
      );
    }
    return 0; // หรือค่าอื่น ๆ ที่เหมาะสมเมื่อไม่มีหุ้น
  };
  const selestotaldividend = totaldividend(selectedStocks);

  //เพิ่มลบ array
  const handleAddStockClick = (stock) => {
    addSelectedStock(stock);
    setIsSelected((prevState) => ({
      ...prevState,
      [stock.id]: true, // Mark this stock as selected
    }));
  };
  const handleRemoveStockClick = (stockToRemove) => {
    removeSelectedStock(stockToRemove);
    setIsSelected((prevState) => {
      const newState = { ...prevState };
      delete newState[stockToRemove.id]; // Remove selection status on removal
      return newState;
    });
  };

  // ฟังก์ชันสำหรับเพิ่มข้อมูลใน Array selectedStocks
  const addSelectedStock = (stock) => {
    setSelectedStocks((prevStocks) => {
      const isExist = prevStocks.some((s) => s.section === stock.section);
      if (!isExist) {
        return [...prevStocks, stock];
      }
      return prevStocks;
    });
  };

  // ฟังก์ชันสำหรับลบข้อมูลใน Array selectedStocks
  const removeSelectedStock = (stockToRemove) => {
    setSelectedStocks((prevStocks) =>
      prevStocks.filter((stock) => stock.section !== stockToRemove.section)
    );
  };

  const datatext = Riskmanagement.filter((item) => {
    const matchesSearch =
      item.id && item.id.toLowerCase().includes(searchText.toLowerCase());
    item.section &&
      item.section.toLowerCase().includes(searchText.toLowerCase());

    const matchesCategory =
      !Category ||
      Category === "หมวดหมู่ทั้งหมด" ||
      (item.Category && item.Category.toLowerCase() === Category.toLowerCase());

    const matchesRisk =
      !Risk ||
      Risk === "ทุกความเสี่ยง" ||
      (item.Risk && item.Risk.toLowerCase() === Risk.toLowerCase());

    return matchesSearch && matchesCategory && matchesRisk;
  });

  //กราฟ chartjs
  const Utils = {
    numbers: ({ count, min, max }) =>
      Array.from(
        { length: count },
        () => Math.floor(Math.random() * (max - min + 1)) + min
      ),
    CHART_COLORS: {
      การเงิน: "rgb(255, 99, 132)",
      พลังงาน: "rgb(255, 159, 64)",
      เทคโนโลยี: "rgb(255, 205, 86)",
      การสื่อสาร: "rgb(75, 192, 192)",
      ทางการแพทย์: "rgb(54, 162, 235)",
    },
  };

  const aggregatedData = selectedStocks.reduce((acc, stock) => {
    // ตรวจสอบว่ามีหมวดหมู่ใน accumulator แล้วหรือยัง
    if (!acc[stock.Category]) {
      acc[stock.Category] = {
        total: 0,
        // กำหนดสี โดยเช็คว่า stock.color มีค่าไหม ถ้ามีจะใช้ค่านั้น  = Utils.CHART_COLORS
        color:
          stock.color ||
          Utils.CHART_COLORS[stock.Category.toLowerCase()] ||
          "gray",
      };
    }
    // เพิ่มค่า total ทีละ 1
    acc[stock.Category].total += 1;
    return acc;
  }, {});

  // สร้าง labels และ datasets ใหม่สำหรับ Chart.js
  const data = {
    labels: Object.keys(aggregatedData),
    datasets: [
      {
        data: Object.values(aggregatedData).map((item) => item.total),
        backgroundColor: Object.values(aggregatedData).map(
          (item) => item.color
        ),
      },
    ],
  };

  const config = {
    type: "pie",
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "สัดส่วนในพอร์ต",
        },
      },
    },
  };

  //หน้าหนัก
  const renderPage = () => {
    if (currentPage === "กลุ่มหุ้น") {
      return (
        <div className="mx-auto lg:w-350 container p-4">
          <div>
            <div className="grid lg:grid-cols-6 gap-2 p-3">
              <div className="lg:col-span-4 col-span-2  relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full border p-2 pl-10 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                />
              </div>

              <div className="lg:col-span-1">
                <select
                  className="border w-full p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  value={Category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                  }}
                >
                  <option value="หมวดหมู่ทั้งหมด">หมวดหมู่ทั้งหมด</option>
                  <option value="การเงิน">การเงิน</option>
                  <option value="เทคโนโลยี">เทคโนโลยี</option>
                  <option value="พลังงาน">พลังงาน</option>
                  <option value="การสื่อสาร">การสื่อสาร</option>
                  <option value="ทางการแพทย์">ทางการแพทย์</option>
                  <option value="สินค้าจำเป็น">สินค้าจำเป็น</option>
                </select>
              </div>

              <div className="lg:col-span-1 col-span-1">
                <select
                  className="border w-full  p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  value={Risk}
                  onChange={(event) => {
                    setRisk(event.target.value);
                  }}
                >
                  <option value="ทุกความเสี่ยง">ทุกความเสี่ยง</option>
                  <option value="สูง">สูง</option>
                  <option value="ปานกลาง">ปานกลาง</option>
                  <option value="ต่ำ">ต่ำ</option>
                </select>
              </div>
            </div>

            <div>
              <div className="p-3">
                <div className="overflow-y-scroll  h-150 ">
                  <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
                    {datatext.map((event, index) => {
                      return (
                        <div
                          key={index}
                          className="border hover:shadow-xl duration-300 rounded-lg lg:p-4 p-2"
                        >
                          <div className="flex justify-between">
                            <p className="text-lg font-bold"> {event.id}</p>
                            <p
                              className={`text-center ${
                                event.Risk === "สูง"
                                  ? "text-red-500 bg-red-50 px-1 rounded-xl"
                                  : event.Risk === "ปานกลาง"
                                  ? "text-yellow-500 bg-yellow-50 px-1 rounded-xl"
                                  : "text-green-500 bg-green-50 px-1 rounded-xl"
                              }`}
                            >
                              {event.Risk}
                            </p>
                          </div>
                          <div className="text-sm text-gray-500">
                            <div>
                              <p>{event.section}</p>
                            </div>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <p>หมวดหมู่</p>
                                <p className="text-gray-950">
                                  {event.Category}
                                </p>
                              </div>
                              <div>
                                <p>เงินปันผล</p>
                                <p className="text-gray-950">
                                  {event.dividend === "-"
                                    ? event.dividend
                                    : `${event.dividend}%`}
                                </p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 mt-2">
                              <div>
                                <p>ผลตอบแทน 1 ปี</p>
                                <p
                                  className={
                                    event.Yeasr1 === ""
                                      ? "text-red-500"
                                      : Number(event.Yeasr1) < 0
                                      ? "text-red-500"
                                      : "text-green-500"
                                  }
                                >
                                  {event.Yeasr1}%
                                </p>
                              </div>

                              <div>
                                <p>ผลตอบแทน 5 ปี</p>
                                <p
                                  className={
                                    event.Yeasr5 < 0
                                      ? "text-red-500"
                                      : "text-green-500"
                                  }
                                >
                                  {event.Yeasr5}%
                                </p>
                              </div>
                            </div>
                            <div className="mt-3">
                              <div
                                className={`border rounded-md duration-300 text-center p-2 text-gray-950 ${
                                  isSelected[event.id]
                                    ? "bg-green-100 text-green-700 border-green-300 cursor-not-allowed hover:bg-green-200"
                                    : "bg-gray-100 hover:bg-gray-200 cursor-pointer border-gray-300 "
                                }`}
                                onClick={() => handleAddStockClick(event)}
                              >
                                {isSelected[event.id]
                                  ? "✔ เพิ่มในพอรต์แล้ว"
                                  : "+ เพิ่มในพอรต์"}
                              </div>
                              {isSelected[event.id] && (
                                <button
                                  onClick={() => handleRemoveStockClick(event)}
                                  className="mt-1 block w-full text-center text-red-500 text-sm cursor-pointer hover:text-red-600 focus:outline-none"
                                >
                                  ลบออกจากพอรต์
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (currentPage === "พอร์ตโฟลิโอ") {
      return (
        <div className="mx-auto lg:w-350 container p-4">
          <div className="border rounded-xl border-gray-300 p-4 shadow-lg">
            <div>
              <p className="text-xl font-bold mb-1">
                การวิเคราะห์พอร์ตการลงทุน
              </p>
              <p className="text-sm text-gray-500">
                ข้อมูลเชิงลึกและการวิเคราะห์พอร์ตการลงทุนของคุณ
              </p>
              <p className="my-3">ข้อมูลพอร์ตโดยรวม</p>
            </div>
            <div className="grid lg:grid-cols-4 grid-cols-2 gap-2 h-full">
              <div className="border-gray-300 border rounded-xl p-4 ">
                <p className="text-lg font-bold">จํานวนหุ้น</p>
                <p className="text-sm text-gray-500">จํานวนหุ้นในพอร์ตโฟลิโอ</p>
                <p className="text-green-500 text-4xl">
                  {/* นับเลข */}
                  {selectedStocks.length}
                </p>
              </div>

              <div className="border-gray-300 border rounded-xl p-4">
                <p className="text-lg font-bold">ผลตอบเเทนปันผล</p>
                <p className="text-sm text-gray-500">ผลตอบเเทนจากเงินปันผล</p>
                <p className="text-green-500 text-4xl">
                  {/* ใช้ reduce  ในการรวม % */}
                  {/* event + index   =  event +index / index */}
                  {/* event = 0 (เริ่มต้น)

                    index = { dividend: 3 }

                    Number(index.dividend) || 0 → 3 || 0 → 3

                    event = 0 + 3 = 3 */}
                  {selectedStocks.length > 0
                    ? (
                        selectedStocks.reduce(
                          (event, index) =>
                            event + (Number(index.dividend) || 0),
                          0
                        ) / selectedStocks.length
                      ).toFixed(2)
                    : "0.00"}
                  %
                </p>
              </div>

              <div className="border-gray-300 border rounded-xl p-4">
                <p className="text-lg font-bold">สัดส่วนในพอร์ต 1ปี</p>
                <p className="text-sm text-gray-500">
                  ผลตอบเเทนในรูปเเบบของเปอเซ็น ต่อปีประมาณ
                </p>
                <p className="text-green-500 text-4xl">
                  {selectedStocks.length > 0
                    ? (
                        selectedStocks.reduce(
                          (event, index) => event + (Number(index.Yeasr1) || 0),
                          0
                        ) / selectedStocks.length
                      ).toFixed(2)
                    : "0.00"}
                  %
                </p>
              </div>

              <div className="border-gray-300 border rounded-xl p-4">
                <p className="text-lg font-bold">สัดส่วนในพอร์ต 5ปี</p>
                <p className="text-sm text-gray-500">
                  ผลตอบเเทนในรูปเเบบของเปอเซ็น ต่อปีประมาณ
                </p>
                <p className="text-green-500 text-4xl">
                  {selectedStocks.length > 0
                    ? (
                        selectedStocks.reduce(
                          (event, index) => event + (Number(index.Yeasr5) || 0),
                          0
                        ) / selectedStocks.length
                      ).toFixed(2)
                    : "0.00"}
                  %
                </p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid lg:grid-cols-7 grid-cols-1 lg:gap-2 text-gray-500 ">
              <div className="border border-gray-300 col-span-4 h-100 rounded-xl p-4 lg:text-left shadow-lg">
                <div>
                  <p className="text-xl text-gray-950 font-bold">
                    หลักทรัพย์ในพอร์ต
                  </p>
                  <p>รายการหลักทรัพย์ทั้งหมดในพอร์ตของคุณ</p>
                </div>

                <div className="grid lg:grid-cols-6 grid-cols-3 gap-1  mt-5 mb-3 border-b border-gray-300 ">
                  <div>
                    <p className="text-gray-950">ชื่อหุ้น</p>
                  </div>
                  <div>
                    <p>หวมดหมู่</p>
                  </div>
                  <div>
                    <p>ผลตอบเเทน1ปี</p>
                  </div>
                  <div>
                    <p>ผลตอบเเทน5ปี</p>
                  </div>
                  <div>
                    <p>ผลตอบปันผล</p>
                  </div>
                  <div>
                    <p className="lg:text-center">จัดการ</p>
                  </div>
                </div>

                <div className="overflow-y-scroll h-60 lg:h-60 ">
                  {selectedStocks.map((event, index) => {
                    return (
                      <div key={index}>
                        <div className="grid lg:grid-cols-6 grid-cols-3 gap-5 border-b p-2  border-gray-200 hover:bg-gray-100 transition-all  ">
                          <div className="text-left text-gray-950">
                            {event.id}
                          </div>
                          <div>{event.Category} </div>
                          <div>
                            <p
                              className={
                                event.Yeasr1 === ""
                                  ? "text-red-500"
                                  : event.Yeasr1 < 0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }
                            >
                              {event.Yeasr1}
                            </p>
                          </div>

                          <div>
                            <p
                              className={
                                event.Yeasr5 < 0
                                  ? "text-red-500"
                                  : "text-green-500"
                              }
                            >
                              {event.Yeasr5}
                            </p>
                          </div>

                          <div className="lg:text-center">
                            {event.dividend}{" "}
                          </div>

                          <div className="flex lg:ms-auto">
                            <p className="cursor-pointer">
                              <Link
                                href={`/component/recommend/Riskmanagement/${event.id}`}
                                target="_blank"
                              >
                                <Search />
                              </Link>
                            </p>

                            <button
                              onClick={() => handleRemoveStockClick(event)}
                              className=" block lg:ms-5 ms-3 w-full text-center text-red-500 text-sm cursor-pointer hover:bg-red-100 duration-200 "
                            >
                              <ArchiveX />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border border-gray-300  lg:col-span-3 lg:mt-0 mt-5 rounded-xl shadow-lg">
                <div className="mx-auto w-fit">
                  <Pie className="" data={data} options={config.options} />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="grid lg:grid-cols-2 gap-2 ">
              <div className="border rounded-xl border-gray-500 p-4 text-lg text-gray-500 shadow-lg">
                <div className="text-center">
                  <p className="text-xl font-bold text-gray-950">
                    การกระจายความเสี่ยง เเละ ปันผล
                  </p>
                  <p>ประสิทธิภาพในการกระจายความเสี่ยงของพอร์ตเเละปันผล</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className={
                      selectedStocks.length < 6
                        ? "border my-3 p-4 rounded-xl border-red-500"
                        : selectedStocks.length >= 6 &&
                          selectedStocks.length < 14
                        ? "border my-3 p-4 rounded-xl border-orange-500"
                        : selectedStocks.length >= 15
                        ? "border my-3 p-4 rounded-xl border-green-500"
                        : "border my-3 p-4 rounded-xl border-red-500"
                    }
                  >
                    <p
                      className={
                        selectedStocks.length < 6
                          ? "text-red-500"
                          : selectedStocks.length >= 6 &&
                            selectedStocks.length < 14
                          ? "text-orange-500"
                          : selectedStocks.length >= 15
                          ? "text-green-500"
                          : "text-orange-500"
                      }
                    >
                      {selectedStocks.length < 6
                        ? "การกระจายความเสี่ยงระดับต่ำ"
                        : selectedStocks.length >= 6 &&
                          selectedStocks.length < 14
                        ? "การกระจายความเสี่ยงระดับปานกลาง"
                        : selectedStocks.length >= 15
                        ? "การกระจายความเสี่ยงระดับดี"
                        : "การกระจายความเสี่ยงระดับปานกลาง"}
                    </p>
                    <p className="text-sm">
                      {selectedStocks < 6
                        ? "พอร์ตของคุณมีการกระจายความเสี่ยงน้อย ควรพิจารณาเพิ่มความหลากหลายของหลักทรัพย์"
                        : selectedStocks.length >= 6 &&
                          selectedStocks.length < 14
                        ? "พอร์ตของคุณมีการกระจายความเสี่ยงปานกลาง สามารถปรับปรุงได้อีก"
                        : selectedStocks.length >= 15
                        ? "พอร์ตของคุณมีการกระจายความเสี่ยงที่ดี ช่วยลดความผันผวนของพอร์ตโดยรวม"
                        : "พอร์ตของคุณมีการกระจายความเสี่ยงปานกลาง สามารถปรับปรุงได้อีก"}
                    </p>
                  </div>
                  <div
                    className={
                      selestotaldividend < 3
                        ? "border my-3 p-4 rounded-xl border-red-500"
                        : "border my-3 p-4 rounded-xl border-green-500"
                    }
                  >
                    <p
                      className={
                        selestotaldividend < 3
                          ? "text-red-500"
                          : "text-green-500"
                      }
                    >
                      {selestotaldividend < 3
                        ? "อัตราเงินปันผลอยู่ในระดับค่อนข้างต่ำ"
                        : "อัตราเงินปันผลอยู่ในระดับที่น่าพอใจ"}
                    </p>
                    <p className="text-sm">
                      {" "}
                      {selestotaldividend < 3
                        ? "หากท่านต้องการผลตอบแทนจากเงินปันผลที่สูงขึ้น อาจพิจารณาลงทุนในหุ้นที่มีนโยบายการจ่ายปันผลที่สม่ำเสมอและมีอัตราที่สูงกว่า"
                        : "พอร์ตโฟลิโอของท่านมีอัตราเงินปันผลที่น่าพอใจ ท่านอาจพิจารณารักษาสัดส่วนนี้ หรือศึกษาหุ้นอื่นๆ เพิ่มเติมเพื่อโอกาสในการเติบโตของเงินลงทุน"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border rounded-xl border-gray-500 p-4 text-lg text-gray-500 shadow-lg">
                <p className="text-xl font-bold text-gray-950">
                  คำแนะนำสัดส่วนการลงทุน
                </p>
                <p>ประสิทธิภาพในการจัดสรร</p>

                <div className=" text-gray-500 mt-3">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-lg">
                      <div
                        className={
                          averageDividend < 0
                            ? "border  p-4 rounded-xl border-red-500"
                            : averageDividend >= 15
                            ? "border p-4 rounded-xl border-red-500"
                            : averageDividend >= 12
                            ? "border  p-4 rounded-xl border-orange-500"
                            : averageDividend >= 6
                            ? "border  p-4 rounded-xl border-green-500"
                            : averageDividend >= 3
                            ? "border  p-4 rounded-xl border-red-500"
                            : "border  p-4 rounded-xl border-red-500"
                        }
                      >
                        <p
                          className={
                            averageDividend < 0
                              ? "text-red-500"
                              : averageDividend >= 15
                              ? "text-red-500"
                              : averageDividend >= 12
                              ? "text-orange-500"
                              : averageDividend >= 6
                              ? "text-green-500"
                              : averageDividend >= 3
                              ? "text-red-500"
                              : "text-red-500"
                          }
                        >
                          สัดส่วนในพอร์ต 1ปี
                        </p>
                        <p className="text-sm">
                          {averageDividend < 0
                            ? "พอร์ตขาดทุน แนะนำให้พิจารณาปรับเปลี่ยนหุ้น"
                            : averageDividend >= 15
                            ? "ผลตอบแทนผันผวนสูง ควรติดตามสถานการณ์อย่างใกล้ชิด"
                            : averageDividend >= 12
                            ? "อยู่ในระดับผลตอบแทนที่น่าสนใจ แต่ยังมีความเสี่ยง"
                            : averageDividend >= 6
                            ? "สัดส่วนผลตอบแทนอยู่ในระดับที่สมดุล"
                            : averageDividend >= 3
                            ? "สัดส่วนผลตอบแทนค่อนข้างต่ำ อาจพิจารณาเพิ่มโอกาส"
                            : "สัดส่วนผลตอบแทนค่อนข้างต่ำ อาจพิจารณาเพิ่มโอกาส"}
                        </p>
                      </div>
                    </div>

                    <div className="text-lg">
                      <div
                        className={
                          averageDividend5 < 100
                            ? "border  p-4 rounded-xl border-red-500"
                            : averageDividend5 >= 500
                            ? "border p-4 rounded-xl border-red-500"
                            : averageDividend5 >= 400
                            ? "border  p-4 rounded-xl border-orange-500"
                            : averageDividend5 >= 300
                            ? "border  p-4 green-xl border-green-500"
                            : averageDividend5 >= 200
                            ? "border  p-4 rounded-xl border-red-500"
                            : "border  p-4 rounded-xl border-red-500"
                        }
                      >
                        <p
                          className={
                            averageDividend5 < 100
                              ? "text-red-500"
                              : averageDividend5 >= 500
                              ? "text-red-500"
                              : averageDividend5 >= 400
                              ? "text-orange-500"
                              : averageDividend5 >= 200
                              ? "text-green-500"
                              : averageDividend5 >= 200
                              ? "text-red-500"
                              : "text-red-500"
                          }
                        >
                          สัดส่วนในพอร์ต 5ปี
                        </p>
                        <p className="text-sm">
                          {averageDividend5 < 100
                            ? "ผลตอบแทนเฉลี่ย 5 ปีต่ำกว่า 100% ควรพิจารณาปรับเปลี่ยนหุ้น"
                            : averageDividend5 >= 500
                            ? "ผลตอบแทนเฉลี่ย 5 ปีผันผวนสูง ควรติดตามสถานการณ์อย่างใกล้ชิด"
                            : averageDividend5 >= 400
                            ? "ผลตอบแทนเฉลี่ย 5 ปีอยู่ในระดับที่น่าสนใจ แต่ยังมีความเสี่ยง"
                            : averageDividend5 >= 300
                            ? "สัดส่วนผลตอบแทนเฉลี่ย 5 ปีอยู่ในระดับที่สมดุล"
                            : averageDividend5 >= 200
                            ? "สัดส่วนผลตอบแทนเฉลี่ย 5 ปีค่อนข้างต่ำ อาจพิจารณาเพิ่มโอกาส"
                            : "สัดส่วนผลตอบแทนเฉลี่ย 5 ปีค่อนข้างต่ำ อาจพิจารณาเพิ่มโอกาส"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (currentPage === "จัดอันดับหุ้น") {
      return (
        <div className="p-4">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
              <div className="lg:col-span-4 col-span-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full border p-2 pl-10 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  type="text"
                  placeholder="Search..."
                  value={searchText}
                  onChange={(e) => setsearchText(e.target.value)}
                />
              </div>

              <div className="col-span-1">
                <select
                  className="border w-full p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  value={Category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="หมวดหมู่ทั้งหมด">หมวดหมู่ทั้งหมด</option>
                  <option value="การเงิน">การเงิน</option>
                  <option value="เทคโนโลยี">เทคโนโลยี</option>
                  <option value="พลังงาน">พลังงาน</option>
                  <option value="การสื่อสาร">การสื่อสาร</option>
                  <option value="ทางการแพทย์">ทางการแพทย์</option>
                  <option value="สินค้าจำเป็น">สินค้าจำเป็น</option>
                </select>
              </div>

              <div className="col-span-1">
                <select
                  className="border w-full p-2 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                  value={Risk}
                  onChange={(e) => setRisk(e.target.value)}
                >
                  <option value="ทุกความเสี่ยง">ทุกความเสี่ยง</option>
                  <option value="สูง">สูง</option>
                  <option value="ปานกลาง">ปานกลาง</option>
                  <option value="ต่ำ">ต่ำ</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="border border-gray-300 rounded-xl p-4 overflow-x-auto">
              <div className="min-overflow-x-scroll min-w-200">
                <div className="grid grid-cols-8 gap-5 font-semibold text-gray-700 border-b pb-2 mb-2">
                  <div>
                    <p>รายชื่อ</p>
                  </div>
                  <div>
                    <p>หมวดหมู่</p>
                  </div>
                  <div>
                    <p>ความเสี่ยง</p>
                  </div>
                  <div>
                    <p>ปันผล</p>
                  </div>
                  <div>
                    <p>ย้อนหลัง1ปี</p>
                  </div>
                  <div>
                    <p>ย้อนหลัง5ปี</p>
                  </div>
                  <div>
                    <p>ย้อนหลัง10ปี</p>
                  </div>
                  <div>
                    <p>ย้อนหลัง15ปี</p>
                  </div>
                </div>

                {datatext.map((event, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-8 gap-5 text-sm text-gray-800 items-center border-b py-2"
                  >
                    <div>
                      <p>{event.id}</p>
                      <p className="truncate text-xs text-gray-500">
                        {event.section}
                      </p>
                    </div>

                    <div>
                      <p>{event.Category}</p>
                    </div>

                    <div>
                      <p
                        className={`w-fit px-2 py-0.5 text-xs rounded-xl ${
                          event.Risk === "สูง"
                            ? "text-red-600 bg-red-100"
                            : event.Risk === "ปานกลาง"
                            ? "text-yellow-600 bg-yellow-100"
                            : "text-green-600 bg-green-100"
                        }`}
                      >
                        {event.Risk}
                      </p>
                    </div>

                    <div>
                      <p>{event.dividend}</p>
                    </div>

                    <div>
                      <p
                        className={`${
                          event.Yeasr1 < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {event.Yeasr1}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`${
                          event.Yeasr5 < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {event.Yeasr5}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`${
                          event.Yeasr10 < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {event.Yeasr10}
                      </p>
                    </div>

                    <div>
                      <p
                        className={`${
                          event.Yeasr15 < 0 ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        {event.Yeasr15}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto lg:w-350 container mt-5">
      <p className="text-center text-3xl font-bold my-5 text-green-500">
        การจัดการความเสี่ยงในการลงทุน
      </p>

      <div className="grid grid-cols-3 gap-2 border p-1 rounded-xl border-gray-200 w-fit mx-auto  text-gray-800">
        {[
          { name: "กลุ่มหุ้น", label: "วิเคราะห์พอร์ต" },
          { name: "พอร์ตโฟลิโอ", label: "วิเคราะห์" },
          { name: "จัดอันดับหุ้น", label: "จัดอันดับหุ้น" },
        ].map((page) => {
          return (
            <div key={page.name}>
              <button
                onClick={() => setCurrentPage(page.name)}
                className={` p-1 lg:w-75 rounded-xl w-30   transition ${
                  currentPage === page.name
                    ? "bg-green-500 text-white"
                    : "bg-gray-100/80 hover:bg-gray-200"
                }`}
              >
                {page.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* แสดงเนื้อหาตามหน้าที่เลือก */}
      {renderPage()}
    </div>
  );
};

export default About;
