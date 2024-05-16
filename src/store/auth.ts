import { defineStore } from "pinia";
import axios from 'axios';

interface User {
    fullname: string;
    username: string;
    email: string;
    phone: string;
}

interface AuthState {
    user: User | null;
    isLoggedIn: boolean;
}

interface AuthActions {
    login(credentials: { username: string, password: string }): Promise<void>;
    logout(): void;
}

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: (): AuthActions => ({
        async login({ username, password }) {
            try {
                const res = await axios.post('http://localhost:8080/api/login', { username, password });
                localStorage.setItem('user', JSON.stringify(res.data));
                // TypeScript will infer 'this' correctly here
                this.user = res.data;
                this.isLoggedIn = true;
            } catch (error) {
                console.error('Login failed:', error);
            }
        },
        logout() {
            localStorage.removeItem('user');
            this.user = null;
            this.isLoggedIn = false;
        }
    })
});

// Define the type for the store separately
export type AuthStore = ReturnType<typeof useAuthStore>;
