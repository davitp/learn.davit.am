import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AutoNavigate({to, replace = false}){

    const router = useRouter();

    useEffect(() => {
        if(replace){
            router.replace(to);
        }
        else {
            router.push(to);
        }
    }, [to, replace, router]);

    return false;
}