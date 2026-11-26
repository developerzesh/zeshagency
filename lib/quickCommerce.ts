export const QUICK_COMMERCE_PLATFORMS = [
  'Blinkit',
  'Swiggy Instamart',
  'Zepto',
  'JioMart',
  'BigBasket',
  'Amazon Daily',
  'Flipkart Minutes',
] as const;

export const QUICK_COMMERCE_SERVICES = {
  'quick-commerce': {
    intro: "We help brands launch, manage and grow on India's top quick commerce platforms, from onboarding to ads to daily operations.",
    sections: [
      {
        title: 'Quick Commerce Onboarding',
        summary: 'Get your brand live without the back-and-forth.',
        description: 'We coordinate seller account documentation, catalogue and listing creation, brand registration, category approvals and launch support.',
        features: [
          'Seller account setup and documentation',
          'Product catalogue creation and listing',
          'Brand registration and category approvals',
          'Launch support across all platforms',
        ],
      },
      {
        title: 'Quick Commerce Management',
        summary: 'Keep your listings, stock and sales running smoothly.',
        description: 'After launch, keep product content, inventory and pricing up to date while tracking orders, performance and platform issues.',
        features: [
          'Catalogue and content updates',
          'Inventory and pricing monitoring',
          'Order and performance tracking',
          'Platform issue resolution and reporting',
        ],
      },
      {
        title: 'Quick Commerce Ads',
        summary: 'Get your products seen when shoppers are ready to buy.',
        description: 'We set up campaigns around relevant keywords, monitor budgets and bids, and manage sponsored placements with regular reporting.',
        features: [
          'Campaign setup and keyword targeting',
          'Budget and bid optimisation',
          'Sponsored listings and banner placements',
          'Regular performance reports',
        ],
      },
    ],
  },
} as const;

export type QuickCommerceServiceSlug = keyof typeof QUICK_COMMERCE_SERVICES;

export function isQuickCommerceServiceSlug(slug: string): slug is QuickCommerceServiceSlug {
  return slug in QUICK_COMMERCE_SERVICES;
}
