module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        BalooBhai : ["Baloo Bhai 2","cursive"],
        NotoSans : ["Noto Sans", "sans-serif"],
        Roboto : ["Roboto" ,"sans-serif"],
        Supermercado : ["Supermercado One", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
