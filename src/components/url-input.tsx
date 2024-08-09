
"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { UrlState } from "@/types/state/url";

type UrlInputProps = {
  level: number;
  id: number;
  value: string;
  updateUrlState: (urlState: UrlState) => void;
  addRoute: (level: number) => void;
}
export default function UrlInput({ level, id, value, updateUrlState, addRoute}: UrlInputProps) {
  return (
    <div className="flex items-center mr-8">
      <Input
        placeholder="Enter base url here..."
        value={value}
        onChange={(e) => updateUrlState({
          id: id,
          level: level,
          value: e.target.value,
        })}
      />
      <Button
        onClick={() => addRoute(level + 1)}
        className="ml-4"
      >
        <Plus />
      </Button>
    </div>
  )
}
