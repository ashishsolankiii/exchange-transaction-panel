export const MENUITEMS = [
  {
    menutitle: "MAIN",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/dashboard`,
        icon: "home",
        type: "link",
        active: true,
        title: "Dashboard",
      },
    ],
  },
  {
    menutitle: "ACCOUNT",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/account-list`,
        icon: "users",
        type: "link",
        active: false,
        title: "Account",
      },
    ],
  },
];

const userRole = JSON.parse(localStorage.getItem("user_info")).role;

if (userRole === "system_owner") {
  // Add additional menu items for system owner role
  MENUITEMS.push(
    {
      menutitle: "CURRENCY",
      Items: [
        {

          path: `${process.env.PUBLIC_URL}/currency-list`,
          icon: "dollar-sign",
          type: "link",
          active: false,
          title: "Currency",
        },
      ],
    },
    {
      menutitle: "CATEGORY",
      Items: [
        {

          path: `${process.env.PUBLIC_URL}/sport-list`,
          icon: "grid",
          type: "link",
          active: false,
          title: "Sport",
        },
      ],
    },
    {
      menutitle: "BETCATEGORY",
      Items: [
        {

          path: `${process.env.PUBLIC_URL}/bet-category-list`,
          icon: "cpu",
          type: "link",
          active: false,
          title: "Bet Category",
        },
      ],
    }
  );
}