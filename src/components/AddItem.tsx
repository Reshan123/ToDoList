import { useRef } from "react";
import React from "react";

interface itemText {
    itemText: (item: string) => void;
  }

function AddItem(Props:itemText) {
  const task: any = useRef(null);  

  return (
    <>
      <div>
        <form action="#" onSubmit={() => {Props.itemText(task.current.value)}}>
            <input
              type="text"
              name="fname"
              className="form-control"
              ref={task}
            />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddItem;
