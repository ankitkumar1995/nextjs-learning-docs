import Image from "next/image";
import React from "react";
import AttendanceChart from "./charts/AttendanceChart";

const AttendanceChartContainer = () => {
  return (
    <div>
      AttendanceChartContainer
      <div>
        <h3>Attendance</h3>

        <Image
          src="/moreDetails.png"
          alt="more three dots icon"
          width={20}
          height={20}
        />
      </div>
      <div>
        <AttendanceChart data={[]} />
      </div>
    </div>
  );
};

export default AttendanceChartContainer;
