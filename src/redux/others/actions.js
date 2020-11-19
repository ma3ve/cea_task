import { NAV_CHANGE_PAGE } from "./types";

export default function changepage(page) {
    return {
        type: NAV_CHANGE_PAGE,
        page,
    };
}
