import React, { useState } from "react";
import { ElfsightWidget } from "react-elfsight-widget";

import Layout from "@/components/layout/layout";

function Review() {
  return (
   <Layout>
      <ElfsightWidget className="pt-48 pb-20" widgetID="435b1c77-48f9-4d22-a35f-831c76d5754a" />
   </Layout>
  );
}

export default Review;
