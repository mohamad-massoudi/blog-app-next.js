import { useRouter } from "next/navigation";

export default function useMoveBack() {
  const router = useRouter();
  return () => router.back();
  // navigate user to back   withe custom hook . 
}
