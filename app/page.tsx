"use client"
import Image from "next/image";
import { useState } from "react";
function Arvore({tamanho = 24}: {tamanho?: number}) {
  return (
    <div className="flex flex-col items-center">
      <div className= "bg-green-600 w-16 h-12" style={{width: tamanho * 8, height: tamanho * 3}}></div>
      <div className="bg-orange-500 w-4 h-12 mx-auto" style={{width: tamanho * 2, height: tamanho * 3}}></div>
      </div>
      
  )}
export default function Home() {
  const [tamanho, setTamanho] =useState(24);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2>">
      <h1>Welcome to My Next.js App</h1>
      <div onClick={() => setTamanho(tamanho + 1)}>

        <Arvore tamanho={tamanho} />
      </div>
    </div>
  );
}
