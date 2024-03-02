"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

export default function Login() {
    const router = useRouter();
    router.replace('i/flow/login');
    return (
        <Main />
    );
}

// router.push
// localhost:3000 -> localhost:3001/login -> localhost:3001/i/flow/login


// router.replace
// localhost:3001 -> (localhost:3001/login) -> localhost:3001/i/flow/login