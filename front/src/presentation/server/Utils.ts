import { headers } from "next/headers";

export async function getBaseUrl() {
    const hdrs = await headers();
    const host = hdrs.get("host");
    const proto = hdrs.get("x-forwarded-proto") ?? "http";
    if (!host) throw new Error("missing host header");
    return `${proto}://${host}`;
}