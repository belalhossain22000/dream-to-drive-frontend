import React from "react";
import DForm from "@/components/forms/DForm";
import DTextarea from "@/components/forms/DTextArea";
import { Button } from "@/components/ui/button";
import { FaCommentAlt } from "react-icons/fa";

const Comments = () => {
  const commentData = (data: any) => {
    console.log(data);
  };
  return (
    <div className="bg-slate-100 p-4 mt-10">
      <DForm onSubmit={commentData}>
        <DTextarea
          type="textarea"
          name="comment"
          label="Add Comment"
          className="w-full"
          required
        />
        <Button className="text-white" type="submit">Add comment</Button>
      </DForm>

      <div className="bg-white p-2 mt-2">
        <div className="flex justify-start items-start gap-2">
          <FaCommentAlt size={30} />
          <p>
            Yes, I did check for the heater cans and they are under the car. The
            wire opening the valves is not connected, so should the car sell I
            will see to get this done.
          </p>
        </div>
        <div className="flex items-center ml-6 gap-2 text-gray-500">
          <p className="text-[14px]">username</p>{" "}
          <p className="text-[14px]">2 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
