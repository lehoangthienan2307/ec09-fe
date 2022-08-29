import axios from "axios";

const CartAPI = {
    async getCart() {
        const res = await axios.get('/cart')
        return res;
    },

    async addToCart(ProID, quantity) {
        const body = {
            ProID: ProID,
            quantity: quantity
        }
        const res = await axios.post("/cart", body)
        return res
    },

    async updateQuantity(ProID, quantity) {
        const body = {
            ProID: ProID,
            quantity: quantity
        }
        const res = await axios.patch('/cart', body);
        return res
    }
}

export default CartAPI;