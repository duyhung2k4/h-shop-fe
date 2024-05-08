export type ObjectRouter = {
  href: string
  name?: string
  hrefIcon?: string
  type: "public" | "protected"
}

export type FieldRouter = "LOGIN" | "HOME" | "TOP_SALE" | "SHOPS";
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
  LOGIN: {
    href: "/login",
    type: "public",
  },
  HOME: {
    href: "/",
    type: "public",
    name: "PKA-ECOM"
  },
  SHOPS: {
    href: "/shops",
    type: "public",
    name: "Cửa hàng",
  },
  TOP_SALE: {
    href: "/top_sale",
    type: "public",
    name: "Top sale"
  }
}