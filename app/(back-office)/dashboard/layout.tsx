import Brand from "@/app/components/layout/Brand";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex">
      <div className="w-[15%] md:w-[8%] lg:w-[15%]">
        <Brand />
      </div>
      <div className="w-[85%] md:w-[92%] lg:w-[85%]"></div>
    </div>
  );
}
