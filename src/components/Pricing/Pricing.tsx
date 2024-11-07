import React from "react";

const Pricing = () => {
  return (
    <div className="my-5">
      <h1 className="text-center my-5 text-5xl text-blue-700 font-semibold">
        Choose Best Pricing Model
      </h1>
      <div className="flex justify-between items-center gap-5 lg:px-40">
        <div className="space-y-5">
          <h1 className="text-3xl text-pink-300">Dedicated Web Team</h1>
          <p>
            For companies with consistent large-scale projects or ongoing needs,
            consider our dedicated web team—a flexible, pay-as-you-go monthly
            contract. Benefit from our technical expertise, infrastructure, and
            seamless execution. Enjoy transparent monthly billing without hidden
            costs. No setup fees ensure a straightforward engagement.
          </p>
          <button className="bg-pink-400 rounded-2xl p-3">CONTACT SALE</button>
        </div>
        <div className="space-y-5">
          <h1 className="text-3xl text-pink-300">Fixed Price Model</h1>
          <p>
            You can opt for our fixed-price model if you meet well-defined
            requirements. We set a fixed amount for a defined scope of work,
            with the flexibility to upgrade or cancel at any time. There will be
            no change in price until your needs are met, payments can be easily
            divided into milestones. Enjoy transparency, knowing what you will
            get paid upfront and what it will cost.
          </p>
          <button className="bg-blue-400 rounded-2xl p-3">CONTACT SALE</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
