 "use client"

import React from "react";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/textarea";
import MarkdownEditor from "@uiw/react-markdown-editor";

const ProjectForm = () => {
  return (
    <form
      action="/"
      className="max-w-2xl mx-auto bg-white my-10 space-y-8 px-6"
    >
      <div>
        <label
          htmlFor="title"
          className="font-bold text-[18px] text-black uppercase"
        >
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
          required
          placeholder="Project Title"
        />
      </div>
      <div>
        <label
          htmlFor="description"
          className="font-bold text-[18px] text-black uppercase"
        >
          Project Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="h-[300px] border-[3px] border-black p-5 text-[18px] text-black font-semibold rounded-[20px] mt-3 placeholder:text-black-300 !important"
          required
          placeholder="Project Description"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="font-bold text-[18px] text-black uppercase"
        >
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
          required
          placeholder="Project Category"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="font-bold text-[18px] text-black uppercase"
        >
          Image Url
        </label>
        <Input
          id="category"
          name="category"
          className="border-[3px] border-black px-5 py-7 text-[18px] text-black font-semibold rounded-full mt-3 placeholder:text-black-300 !important"
          required
          placeholder="Project Category"
        />
      </div>
      <div>
        <label
          htmlFor="category"
          className="font-bold text-[18px] text-black uppercase"
        >
          Details
        </label>
        <MarkdownEditor
          id="details"
          height="300px"
          style={{ borderRadius: "20px", overflow: "hidden" }}
          placeholder="Describe your project in detail."
        toolbars={[
          'bold', 'header',
          'italic', 'strike', 'quote', 'ulist', 'olist',]}
        />
      </div>
    </form>
  );
};

export default ProjectForm;
