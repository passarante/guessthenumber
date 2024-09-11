import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <div className="p-6 h-full w-full grid grid-cols-3">
      <div className="flex flex-col gap-4">
        <Link href="/game/single">
          <Button className="w-40" variant={"outline"}>
            Tekli Oyun Başlat
          </Button>
        </Link>
        <Button className="w-40" variant={"outline"}>
          Çoklu Oyun Başlat
        </Button>
      </div>
      <div className="col-span-2">Infobar</div>
    </div>
  );
};

export default DashboardPage;
