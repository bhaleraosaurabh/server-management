import LoginDialog from "@/components/page-ui/login-signup/LoginDialog";
import { Button } from "@/components/ui/button";
import type { MetaFunction } from "@remix-run/node";
import { useSearchParams } from "@remix-run/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<LoginDialog />
		</div>
	);
}
