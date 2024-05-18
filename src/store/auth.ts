// auth.ts

import { defineStore } from 'pinia';
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

// interface AuthActions {
//     login(credentials: { email: string; password: string }): Promise<void>;
//     logout(): void;
// }

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): AuthState => ({
        user: null,
        isLoggedIn: false,
    }),
    actions: {
        async login({ email, password }: { email: string; password: string }) {

            try {
                const res = await axios.post('http://localhost:8080/api/auth/login', { email, password });

                // Store user data in local storage
                localStorage.setItem('user', JSON.stringify(res.data));

                // Update store state
                this.user = res.data;
                this.isLoggedIn = true;
            } catch (error) {
                console.error('Login failed:', error);
                throw error; // Rethrow the error for handling in the component
            }
        },
        logout() {
            // Clear user data from local storage
            localStorage.removeItem('user');
            this.user = null;
            this.isLoggedIn = false;
        },
    },
});

// Define the type for the store separately
export type AuthStore = ReturnType<typeof useAuthStore>;
