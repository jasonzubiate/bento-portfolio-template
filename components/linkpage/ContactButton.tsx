'use client'

import { emailRedirect } from "@/utils"
import { FiMail } from "react-icons/fi"

export default function ContactButton() {
  return (
    <button
          className="w-full bg-trace-ash py-3 rounded-md text-white flex items-center justify-center gap-2"
          onClick={() => emailRedirect()}
        >
          <FiMail size={20} className="mt-[2px]" />
          <p>Let&apos;s connect</p>
        </button>
  )
}