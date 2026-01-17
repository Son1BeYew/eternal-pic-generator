"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { setAuthToken, setUserData } from "@/lib/api";

export default function LoginSuccessPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    
    if (token) {
      // Save token
      setAuthToken(token);
      
      // Decode token to get user info (basic decode, not verification)
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        // Fetch user data with token
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/auth/me`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(res => res.json())
        .then(userData => {
          setUserData({ ...userData, token });
          // Redirect based on role
          if (userData.role === 'admin') {
            router.push('/admin');
          } else {
            router.push('/');
          }
        })
        .catch(() => {
          router.push('/');
        });
      } catch {
        router.push('/');
      }
    } else {
      router.push('/auth');
    }
  }, [searchParams, router]);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 mx-auto animate-spin rounded-full border-4 border-slate-200 border-t-slate-900"></div>
        <p className="text-slate-600">Đang đăng nhập...</p>
      </div>
    </div>
  );
}
