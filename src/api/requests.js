import axios from 'axios';

export let url = 'https://hellobox.uz/api';
// export let url = 'http://localhost:8081/api';

export let requests = {
    news: {
        createAndSend: (credentails) => axios.post(`${url}/news`, credentails),
    },
    partners: {
        getPartners: () => axios.get(`${url}/partner`),
        addPartner: (credentials) => axios.post(`${url}/partner`, credentials),
        deletePartner: (id) => axios.delete(`${url}/partner/${id}`),
        editPartner: (credentials) => axios.put(`${url}/partner`, credentials)
    },
    products: {
        getProducts: () => axios.get(`${url}/product`),
        createProduct: (credentails) =>
            axios.post(`${url}/product`, credentails),
        deleteProduct: (id) => axios.delete(`${url}/product/${id}`),
        editProduct: (credentails) => axios.put(`${url}/product`, credentails)
    },
    order: {
        getOrder: () => axios.get(`${url}/order`),
        createOrder: (credentails) => axios.post(`${url}/order`, credentails),
    },
    uploads: {
        uploadImage: (credentails) =>
            axios.post(`${url}/file-upload`, credentails),
    },
    users: {
        getUsers: () => axios.get(`${url}/users`),
    },
    category: {
        getCategories: () => axios.get(`${url}/category`),
        deleteCategory: (id) => axios.delete(`${url}/category/${id}`),
        createCategory: (credentails) =>
            axios.post(`${url}/category`, credentails),
        editCategory: (credentails) => axios.put(`${url}/category`, credentails)
    },
};