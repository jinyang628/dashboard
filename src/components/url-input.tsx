
"use client";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { UrlState } from "@/types/state/url";

type UrlInputProps = {
  level: number;
  id: number;
  updateUrlState: (urlState: UrlState) => void;
  addRoute: (level: number) => void;
}
export default function UrlInput({ level, id, updateUrlState, addRoute}: UrlInputProps) {
  return (
    <div>
      <Input
        placeholder="Enter base url here..."
        onChange={(e) => updateUrlState({
          id: id,
          level: level,
          url: e.target.value,
        })}
      />
      <Button
        onClick={() => addRoute(level)}
        className="ml-4"
      >
        <Plus />
      </Button>
    </div>
  )
}
