const IntegrationSection = () => {
  const integrations = [
    {
      name: "Amazon Seller",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
    },
        {
      name: "eBay",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg",
    },
        {
      name: "Walmart",
      logo: "https://brandcenter.walmart.com/content/dam/brand/flower-icon.svg",
    },
    {
      name: "Etsy",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Etsy_logo.svg/768px-Etsy_logo.svg.png",
    },
    {
      name: "Shopify",
      logo: "https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-shopping-bag-full-color-66166b2e55d67988b56b4bd28b63c271e2b9713358cb723070a92bde17ad7d63.svg",
    },
    {
      name: "Woo Commerce",
      logo: "https://woocommerce.com/wp-content/uploads/2025/01/Logo-Primary.png",
    },
  ];

  return (
    <section className="py-16 max-w-4xl mx-auto">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium text-zinc-600 font-roboto">
            Preparation and Fulfillment for Your Favorite Marketplaces{" "}
          </h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6">
          {integrations.map((integration, index) => (
            <div key={index} className="overflow-hidden">
              <div className="h-16 flex items-center justify-center">
                <div className="h-10 flex items-center justify-center">
                  <img
                    src={integration.logo}
                    alt={`${integration.name} logo`}
                    className="h-8 max-w-[50px] object-contain mx-auto"
                  />
                </div>
              </div>
              <h3 className="text-gray-700 font-normal font-roboto text-sm text-center">
                {integration.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
