import React from "react";
import Layout from "@/components/layout/layout";

function Island() {
  return (
    <Layout>
      <div className="relative w-full h-screen">
        {/* <iframe
          src="https://www.caesarstoneus.com/virtual-kitchen-visualizer/#visualizer-w"
          frameBorder="0"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe> */}
        <iframe src="https://app.vectary.com/p/0SXe5LjCQ5JU4xGmn3DgCw" frameBorder="0" width="100%" height="480"></iframe>
      </div>
    </Layout>
  );
}

export default Island;
