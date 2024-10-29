// src\utils\fonts.js

import { Tajawal } from "next/font/google";

export const tajawal = Tajawal({
  weight: ["400", "500", "700", "800", "900", "200", "300"],
  subsets: ["arabic"],
  variable: "--font-family",
  display: "swap",
});
