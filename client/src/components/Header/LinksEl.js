import shopLayout from "../../assets/shop-layout.webp";
import pages from "../../assets/feet_1.png";
// import style from "../../assets/style.jpg";
import lipstics from "../../assets/lipsticks.webp";
import blog1 from "../../assets/blog1.webp";
import blog2 from "../../assets/blog2.webp";

const img = [lipstics, shopLayout, pages];

export const BottomNav = [
  { name: "Home" },

  {
    name: "All collections",
    image: { location: img[0], alt: "a girl standing" },
    sublinks: [
      {
        title: "Fashions",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
      {
        title: "Electronics",
        links: [
          `Computer/Digital`,
          `Electronics/Motor`,
          "Smartphone & Tablets",
          "Computer & Netwroking",
          "Electronics/Motor",
        ],
      },
      {
        title: "Home & Garden",
        links: [
          "Kitchen",
          "Bed Room",
          "Garden",
          "Hot Cases & Covers",
          "Storage Devices",
        ],
      },
    ],
  },

  {
    name: "Shop Layout",
    image: { location: img[1], alt: "a shopping bag" },

    sublinks: [
      {
        title: "Collection Styles",
        links: [
          "Shop Left Sidebar",
          "Shop Right Sidebar",
          "Shop Not Sidebar",
          "Shop List",
          "Shop List Sidebar",
          "Shop List Right Sidebar",
          "Sub-Collections",
        ],
      },
      {
        title: "Product Styles",
        links: [
          "Advance Product Type",
          "Group Images Variants",
          "Product Sidebar Layout",
          "Product Box Layout",
          "Product Group Items",
          "Product Stacked 1",
          "Product Stacked 2",
        ],
      },
      {
        title: "Product Types",
        links: [
          "Product Preorder",
          "Product 3D Model",
          "Product Images Swatch",
          "Product Right Sidebar",
          "Product Bottom Thumbnails",
          "Product Right Thumbnails",
          "Product Not Thumbnails",
        ],
      },
    ],
  },
  {
    name: "Pages",
    image: { location: img[2], alt: "leg with shoes" },
    extrainfo: {
      heading: "COMES & DISCOVER",
      title: "THE NEW STYLE",
    },
    sublinks: [
      {
        title: "Fashions",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
      {
        title: "Electronics",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
      {
        title: "Home & Garden",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
    ],
  },
  {
    name: "Blogs",
    blog: [
      {
        img: blog1,
        alt: "game charecter",
        title: "Duis sagittis porta",
        author: "Giao Trinh",
        date: "Dec 17,2015",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium enim ut fringilla. Quisque eu lacus enim. Proin eleifend",
      },
      {
        img: blog2,
        alt: "game charecter",
        title: "Luxe Hermès gold navy blue strong",
        author: "Giao Trinh",
        date: "Dec 17, 2015",
        description:
          "Shoe street style leather tote oversized sweatshirt A.P.C. Prada Saffiano crop slipper denim shorts spearmint. Braid skirt round",
      },
    ],
    sublinks: [
      {
        title: "Fashions",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
      {
        title: "Electronics",
        links: [`Men's`, `Women's`, "Baby/kids", "Sport Gears", "Accessories"],
      },
    ],
  },
  {
    name: "Contact Us",
    sublinkArr: [
      "Terms of Service",
      "Privacy Policy",
      "Shipping Policy",
      "Refund Policy",
    ],
  },
  { name: "Sub collections" },
  { name: "Flash Deals" },
];
