import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useSearchParams } from "@remix-run/react";
import { useState } from "react";

const LoginDialog = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [openLoginDialog, setOpenLoginDialog] = useState(
		!!searchParams?.get("action") || false,
	);
	const [activeTab, setActiveTab] = useState<string>("login");
	const updateSearchParams = (name: string) => {
		const params = new URLSearchParams();
		params.set("action", name);
		setSearchParams(params, {
			preventScrollReset: true,
		});
	};

	const onOpenChange = (open: boolean) => {
		if (!open) {
			const params = new URLSearchParams();
			params.delete("action");
			setSearchParams(params);
			setOpenLoginDialog(open);
		} else {
			updateSearchParams("login");
			setOpenLoginDialog(open);
		}
	};
	return (
		<Dialog open={openLoginDialog} onOpenChange={onOpenChange} modal={true}>
			<DialogTrigger asChild>
				<Button>Login/Sign Up</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle className="hidden">Login/Sign Up</DialogTitle>
					<DialogDescription className="hidden">
						Login/Sign Up form
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<Tabs
						value={activeTab}
						onValueChange={(value) => {
							updateSearchParams(value);
							setActiveTab(value);
						}}
					>
						<TabsList className="grid w-full grid-cols-2">
							<TabsTrigger value="login">Login</TabsTrigger>
							<TabsTrigger value="signup">Signup</TabsTrigger>
						</TabsList>
						<TabsContent value="login">
							<Card>
								<CardHeader>
									<CardTitle>Login</CardTitle>
									<CardDescription>
										Login with your email and password
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="name">Name</Label>
										<Input id="name" defaultValue="Pedro Duarte" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="username">Username</Label>
										<Input id="username" defaultValue="@peduarte" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save changes</Button>
								</CardFooter>
							</Card>
						</TabsContent>
						<TabsContent value="signup">
							<Card>
								<CardHeader>
									<CardTitle>Sign Up</CardTitle>
									<CardDescription>
										Sign up with your email and password
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="space-y-1">
										<Label htmlFor="current">Current password</Label>
										<Input id="current" type="password" />
									</div>
									<div className="space-y-1">
										<Label htmlFor="new">New password</Label>
										<Input id="new" type="password" />
									</div>
								</CardContent>
								<CardFooter>
									<Button>Save password</Button>
								</CardFooter>
							</Card>
						</TabsContent>
					</Tabs>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default LoginDialog;
