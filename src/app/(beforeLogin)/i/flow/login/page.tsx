import { redirect } from "next/dist/server/api-utils";

export default function Login(): void {
    redirect(url : '/i/flow/login');
}