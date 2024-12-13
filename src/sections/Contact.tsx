import Button from "@/components/Button";
import ArowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container ">
        <div className="rounded-3xl lg:w-full md:flex md:items-center md:gap-10 md:text-start text-center bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 p-8">
          <div>
            <h1 className="text-2xl font-serif md:text-3xl">
              Let's create something amazing together
            </h1>
            <p className="text-sm mt-2">
              Ready to bring your next project to life? let's connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>

         <div className="md:w-full lg:w-1/5 md:text-end">
         <Button
            className="mt-4"
            text="Contact Me"
            variant="secondary"
            icon={<ArowUpRightIcon />}
            iconPosition="right"
          />
         </div>
        </div>
      </div>
    </div>
  );
};
