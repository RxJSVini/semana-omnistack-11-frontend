import { api } from "../../services/api";

export const useApi = () => ({
    async SignIn(id) {
        try {
            const response = await api.post("/session", { id });
            return response.data;
        } catch (error) {
            return error.message;
        }
    },
    async SignOut(id) {
        try {
            return { message: `Usuário ${id} desautenticado!` }
        } catch (error) {
            return error.message;
        }
    }
});