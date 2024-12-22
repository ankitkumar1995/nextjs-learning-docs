import Image from "next/image";
import React from "react";
import CountChart from "./charts/CountChart";
import prisma from "@/app/lib/prisma";
import { USER_SEX } from "../constants/constants";

const CountChartContainer = async () => {
  const data = await prisma.student.groupBy({ by: ["sex"], _count: true });

  const boys = data.find((d) => d.sex === USER_SEX.MALE)?._count || 0;
  const girls = data.find((d) => d.sex === USER_SEX.FEMALE)?._count || 0;

  return (
    <div>
      CountChartContainer
      <div>
        <h3>Students</h3>
        <Image
          src="/moreDetails.png"
          alt="more three dots icon"
          width={20}
          height={20}
        />
      </div>
      <CountChart />
      <div>
        <div className="flex">
          <div></div>
          <h3></h3>
          <h3>Boys ({Math.round((boys / (boys + girls)) * 100)}%)</h3>
        </div>
        <div className="flex">
          <div></div>
          <h3></h3>
          <h3>Girls ({Math.round((girls / (boys + girls)) * 100)}%)</h3>
        </div>
      </div>
    </div>
  );
};

export default CountChartContainer;
