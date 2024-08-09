"use client";
import { useState } from "react";
import UrlInput from "@/components/url-input";
import { UrlState } from "@/types/state/url";
import { Button } from "@/components/ui/button"

export default function Home() {
  const [routes, setRoutes] = useState<Record<number, Record<number, string>>>({
    1: { 1: "" },
  });

  const addRoute = (level: number) => {
    setRoutes((prevRoutes) => {
      const newRoutes = { ...prevRoutes };
      if (!newRoutes[level]) {
        newRoutes[level] = {};
      }
      const newId = Object.keys(newRoutes[level]).length + 1;
      newRoutes[level][newId] = "";
      return newRoutes;
    });
  };

  const updateUrlState = (urlState: UrlState) => {
    setRoutes((prevRoutes) => {
      const newRoutes = { ...prevRoutes };
      if (!newRoutes[urlState.level]) {
        newRoutes[urlState.level] = {};
      }
      newRoutes[urlState.level][urlState.id] = urlState.value;
      return newRoutes;
    });
  };

  const confirmRoutes = () => {
    console.log(routes);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="flex justify-center p-8">
        <div className="flex items-center space-x-8">
          {Object.entries(routes).map(([level, ids]) => (
            <div key={level} className="flex flex-col space-y-4">
              {Object.entries(ids).map(([id, value]) => (
                <UrlInput
                  key={`${level}-${id}`}
                  level={parseInt(level)}
                  id={parseInt(id)}
                  value={value}
                  updateUrlState={updateUrlState}
                  addRoute={addRoute}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={confirmRoutes}
      >
          Confirm
      </Button>
    </div>
  );
}
