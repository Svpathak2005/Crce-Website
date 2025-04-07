'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const StudentsCouncilPage = () => {
    const router = useRouter();
    useEffect(() => {
        const pdfPath = "/councils/Stuco_List.pdf";
        window.open(pdfPath, "_blank");
        router.push("/");
    }, [router]);
    return null; // This page doesn't render any content
};

export default StudentsCouncilPage;