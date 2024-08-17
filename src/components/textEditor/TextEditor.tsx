import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { Skeleton } from "../ui/skeleton";
import { Controller, useForm, useFormContext } from "react-hook-form";
import { formats, modules, TextEditorProps } from "@/utils/textEditorInfo";
import { Label } from "recharts";
import "./textEditor.css";

// Dynamically import ReactQuill without SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TextEditor: React.FC<TextEditorProps> = ({ name }) => {
  // State to check if the component is mounted
  const [isMounted, setIsMounted] = useState(false);
  const { control } = useFormContext();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <Skeleton className="h-[140px] bg-slate-100"></Skeleton>; // Render Skeleton When loading
  }

  return (
    <div className="space-y-2">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <ReactQuill
            theme="snow"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className="text-white block w-full h-36 border-dashboardBackground rounded-md shadow-sm sm:text-sm"
            modules={modules}
            formats={formats}
          />
        )}
      />
    </div>
  );
};

export default TextEditor;
