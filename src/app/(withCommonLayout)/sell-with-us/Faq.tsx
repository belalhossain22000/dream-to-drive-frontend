import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Faq = () => {
  return (
    <>
      <section className="py-14 bg-slate-50">
        <div className="container">
          <h2 className="text-2xl font-semibold md:mb-8 mb-8">
            Any questions?
          </h2>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-4">
            <div className="p-6 bg-white rounded-xl">
              <h3 className="mb-4 font-bold">
                Can I discuss a consignment with you without signing up?
              </h3>
              <p>
                Yes, contact us now or select ‘Sell with us’ - there’s no need
                to create an account or sign in.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="mb-4 font-bold">
                How do I know if you’re interested in my listing?
              </h3>
              <p>
                Talk to us! Our passion and experience encompass cars and
                automobilia of all types and eras, from vintage icons through to
                popular modern classics.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <h3 className="mb-2 font-bold">
                Will you consign everything that you’re offered?
              </h3>
              <p>
                No, we curate our listings carefully and not every offering will
                be consigned. We will give every offering equal consideration.
              </p>
            </div>
          </div>
          <Link href={`/help-&-faqs`}>
            <Button
              variant="outline"
              className="border-green-500 text-green-500 mt-8"
            >
              View All Faqs
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Faq;
