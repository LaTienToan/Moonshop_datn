import instance from "./port";
import { isAuthenticate } from "../utils/LocalStorage";

const user = isAuthenticate()
let header = {}
if (user) {
    header = {
        headers: {
            Authorization: `${user.token}`,
        },
    }
}
export const updateOrder = (id: any, data: any) => {
    const url = `order/${id}`;
    return instance.patch(url, data, header);
};
export const createOrder = (data: any) => {
    const url = `order`;

    return instance.post(url, data, header);
};
// export const removeOrder = (id: any, data: any) => {
//     const url = `order/${id}`;
//     return instance.delete(url, data, header);
// };

export const removeOrder = (id: any, config: any) => {
    const url = `order/${id}`;
    return instance.delete(url, config);
};

