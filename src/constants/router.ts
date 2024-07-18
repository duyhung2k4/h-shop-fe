export type ObjectRouter = {
    href: string
    name?: string
    hrefIcon?: string
    type: "public" | "protected"
}

export type FieldRouter =
    | "LOGIN"
    | "HOME"
    | "SHOPPING"
    | "PRODUCT"
    | "DETAIL_PRODUCT"
    | "SHOP"
    | "BLOG"
    | "PAYMENT_RESULT"
    | "PUCHASE_ORDER"
    | "HEART"
    | "CART"
    | "ORDER";
export const ROUTER: Record<FieldRouter, ObjectRouter> = {
    LOGIN: {
        href: "/login",
        type: "public",
    },
    HOME: {
        href: "/",
        type: "protected",
        name: "Trang chủ",
    },
    SHOPPING: {
        href: "/shopping",
        type: "protected",
        name: "Mua hàng",
    },
    PRODUCT: {
        href: "/product",
        type: "protected",
        name: "Sản phẩm",
    },
    DETAIL_PRODUCT: {
        href: "/detail_product",
        type: "protected",
        name: "Chi tiết sản phẩm",
    },
    ORDER: {
        href: "/order",
        type: "protected",
        name: "Đơn hàng",
    },
    SHOP: {
        href: "/shop",
        type: "protected",
        name: "Cửa hàng",
    },
    BLOG: {
        href: "/blog",
        type: "protected",
        name: "Blog",
    },
    PAYMENT_RESULT: {
        href: "/payment_result",
        type: "protected",
        name: "Kết quả thanh toán",
    },
    PUCHASE_ORDER: {
        href: "/puchase_order",
        type: "protected",
        name: "Đơn mua",
    },
    HEART: {
        href: "/heart",
        type: "protected",
        name: "Yêu thích",
    },
    CART: {
        href: "/cart",
        type: "protected",
        name: "Giỏ hàng",
    }
}