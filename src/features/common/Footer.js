function Footer() {
  return (
    <>
      <div className=" bg-gray-900">
        <div className="max-w-2xl mx-auto text-white py-10">
          <div className="text-center">
            <h3 className="text-3xl mb-3 font-signature">
              {" "}
              Welocme to our Ecomerce Store{" "}
            </h3>
            <p className="font-signature">
              {" "}
              Buy what you want, Anytime you want{" "}
            </p>
          </div>
          <div className="mt-4 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              {" "}
              © SwiftSellers, 2023.{" "}
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2 hover:text-white">About us</span>
              <span className="px-2 border-l  hover:text-white">
                Contact us
              </span>
              <span className="px-2 border-l  hover:text-white">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
