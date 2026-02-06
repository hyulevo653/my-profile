"use client";
import { FiCopy } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function CopyCodeButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) setTimeout(() => setCopied(false), 1000);
  }, [copied]);



  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = code;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return <button
    className="absolute z-40 mr-2 mt-5 text-white bg-white/10 right-2 top-0 flex flex-row px-2 py-1 rounded-lg items-center gap-1"
    onClick={handleCopy}
  >
    <FiCopy /> {copied ? 'Copied' : 'Copy'}
  </button>
}
