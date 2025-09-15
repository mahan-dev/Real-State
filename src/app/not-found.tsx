import React, { JSX } from "react";

const NotFoundPage = (): JSX.Element => {
  return (
    <section className="flex justify-center  mt-4">
      <h2 className="text-[1.1rem] font-medium">
        صفحه مورد نظر پیدا نشد ! ☹️{" "}
      </h2>
    </section>
  );
};

export default NotFoundPage;
