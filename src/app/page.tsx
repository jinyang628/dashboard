"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react";
import UrlInput from "@/components/url-input";
import { UrlState } from "@/types/state/url";

export default function Home() {

  const [urls, setUrls] = useState<UrlState[]>([]);

  const addRoute = (level: number) => {
    console.log(`Adding route at level: ${level}`);
  }

  const updateUrlState = (urlState: UrlState) => {

  }


  const [inputFields, setInputFields] = useState([
    { id: 1, value: "" },
  ]);

  const handleAddField = () => {
    setInputFields([
      ...inputFields,
      { id: inputFields.length + 1, value: "" },
    ]);
  };

  return (
    <main className="flex justify-center h-screen">
      <div className="flex items-center justify-center h-full">
        <div className="flex items-center mr-8">
          {/* Base URL */}
          <UrlInput
            level={1}
            id={1}
            updateUrlState={updateUrlState}
            addRoute={addRoute}
          />
          {/* <Input
            placeholder="Enter base url here..."
            onChange={(e) => setBaseUrl(e.target.value)}
          />
          <Button
            onClick={handleAddField}
            className="ml-4"
          >
            <Plus />
          </Button> */}
        </div>
        <div className="flex flex-col space-y-4">
          {inputFields.slice(1).map((field) => (
            <Input
              key={field.id}
              placeholder="Enter base url here..."
              value={field.value}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
