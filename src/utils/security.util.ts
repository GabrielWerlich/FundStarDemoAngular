import { User } from "src/app/models/user.model";


export class Security {
    public static set(user: User, token: string) {
        const data = JSON.stringify(user);

        console.log("teste")
        console.log(btoa(data));

        localStorage.setItem('fundstarUser', btoa(data));
        localStorage.setItem('fundstarToken', token);
    }

    public static setUser(user: User) {
        const data = JSON.stringify(user);
        localStorage.setItem('fundstarUser', btoa(data));
    }

    public static setToken(token: string) {
        localStorage.setItem('fundstarToken', token);
    }

    public static getUser(): User {
        const data = localStorage.getItem('fundstarUser');
        if (data) {
            return JSON.parse(atob(data));
        } else {
            return null;
        }
    }

    public static getToken(): string {
        const data = localStorage.getItem('fundstarToken');
        if (data) {
            return data;
        } else {
            return null;
        }
    }

    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('fundstarUser');
        localStorage.removeItem('fundstarToken');
    }
}