import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink:"#0B1F33", navy:"#0A2239", blue:"#2E67D1",
        cream:"#F4F2EC", paper:"#FBFBF8", muted:"#5E6C78", line:"#D9DEE3"
      },
      maxWidth: {"site":"1180px"}
    }
  },
  plugins: []
} satisfies Config;
