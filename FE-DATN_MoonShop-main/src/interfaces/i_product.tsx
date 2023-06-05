
export interface IProduct {
    _id?: string,
    id_category?: string,
    id_voucher: string,
    product_price: number,
    product_name: string,
    product_price: number,
    material_product: string,
    desc_product: string,
    quantity_number: number,
    product_color: Array<string>,
    product_images: Array<string>,
    product_size: Array<string>
}