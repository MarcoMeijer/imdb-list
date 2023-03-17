"use client";
import { useRouter } from "next/navigation";
import Button from "./Button";

export interface RouteButtonProps {
  title: string;
  route: string;
}

export default function RouteButton({ title, route }: RouteButtonProps) {
  const router = useRouter();

  return (
    <Button
      title={title}
      onClick={() => {
        router.push(route);
      }}
    />
  );
}
