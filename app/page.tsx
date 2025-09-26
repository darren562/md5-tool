"use client";

import { useMemo, useState } from "react";
import CryptoJS from "crypto-js";

export default function Page() {
  const [input, setInput] = useState("");

  const hash32Lower = useMemo(
    () => (input ? CryptoJS.MD5(input).toString() : ""),
    [input]
  );
  const hash32Upper = useMemo(
    () => (hash32Lower ? hash32Lower.toUpperCase() : ""),
    [hash32Lower]
  );
  const hash16Lower = useMemo(
    () => (hash32Lower ? hash32Lower.slice(8, 24) : ""),
    [hash32Lower]
  );
  const hash16Upper = useMemo(
    () => (hash16Lower ? hash16Lower.toUpperCase() : ""),
    [hash16Lower]
  );

  const copy = async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100">
      <div className="max-w-3xl mx-auto px-4 py-10 text-gray-900">
        <div className="mb-2 text-sm text-gray-500">工具箱</div>
        <h1 className="text-3xl font-bold mb-1 tracking-tight text-slate-800">
          MD5 加密工具
        </h1>
        <p className="mb-6 text-slate-600">
          数据全部本地计算，不会被上传到服务器
        </p>

        <div className="mb-6 rounded-xl border border-slate-200 bg-white p-4 md:p-5 shadow-sm">
          <textarea
            className="w-full min-h-[140px] resize-y rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="在此输入文本以计算 MD5..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (
                (e as React.KeyboardEvent<HTMLTextAreaElement>).metaKey &&
                e.key === "Enter"
              ) {
                // Cmd+Enter 触发一次计算（本页为实时计算，按键用于习惯性确认）
                setInput((prev) => prev);
              }
            }}
          />
          <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
            <span>字数：{input.length}</span>
            <span className="hidden sm:inline">
              提示：可按 ⌘+Enter 快速计算
            </span>
          </div>
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50"
              onClick={() => setInput(input)}
            >
              计算
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-slate-600 px-4 py-2 text-white hover:bg-slate-700 active:bg-slate-800 disabled:opacity-50"
              onClick={() => setInput("")}
              disabled={!input}
            >
              清空
            </button>
          </div>
        </div>

        <div className="mb-4 rounded-xl border border-indigo-100 bg-white p-4 md:p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="font-semibold text-slate-800">MD5 结果</h2>
            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-900 disabled:opacity-50"
                onClick={() => {
                  const lines = `32位小写: ${hash32Lower}\n32位大写: ${hash32Upper}\n16位小写: ${hash16Lower}\n16位大写: ${hash16Upper}`;
                  copy(lines);
                }}
                disabled={!hash32Lower}
              >
                一键复制全部
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-slate-800 px-3 py-1.5 text-sm text-white hover:bg-slate-900 disabled:opacity-50"
                onClick={() => {
                  const json = {
                    md5_32_lower: hash32Lower,
                    md5_32_upper: hash32Upper,
                    md5_16_lower: hash16Lower,
                    md5_16_upper: hash16Upper,
                  };
                  copy(JSON.stringify(json, null, 2));
                }}
                disabled={!hash32Lower}
              >
                复制 JSON
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <Row label="32位小写:" value={hash32Lower} onCopy={copy} />
            <Row label="32位大写:" value={hash32Upper} onCopy={copy} />
            <Row label="16位小写:" value={hash16Lower} onCopy={copy} />
            <Row label="16位大写:" value={hash16Upper} onCopy={copy} />
          </div>
        </div>

        <section className="mb-6">
          <h2 className="font-semibold mb-2">MD5 在线加密-工具简介</h2>
          <p className="text-gray-700">
            MD5
            在线加密工具，用于验证已有文件、文本的MD5哈希值是否与指定的MD5哈希值相同。工具可以通过网页形式进行在线使用，是一种快速、方便的
            MD5 校验工具。所有数据全部本地计算，不会被上传到服务器。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2">MD5 算法介绍</h2>
          <p className="text-gray-700">
            MD5（Message+Digest+Algorithm+5）是一种常用的哈希算法，用于将任意长度的数据转化为固定长度的字符串。MD5算法广泛应用于数据加密、数字签名和密码存储等领域。它的输出通常为一个128位的哈希值，Hex编码后是32个字符。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2">MD5（16位）与MD5（32位）的区别</h2>
          <p className="text-gray-700">
            MD5（16位）和MD5（32位）的区别在于输出的字符串长度不同。MD5（32位）输出32个字符，而MD5（16位）输出16个字符。MD5（16位）是通过截取MD5（32位）中第9～24位而得到的。
          </p>
        </section>

        <section className="mb-6">
          <h2 className="font-semibold mb-2">MD5的应用</h2>
          <ul className="list-decimal pl-6 text-gray-700 space-y-1">
            <li>
              数据加密：可以将敏感信息进⾏ MD5 加密，避免明⽂存储的安全问题。
            </li>
            <li>⽂件校验：可以通过计算⽂件的 MD5，判断⽂件内容是否被篡改。</li>
            <li>
              防⽌重复提交：可以将⽤户输⼊的数据进⾏ MD5 计算，并与之前保存的
              MD5 值进⾏⽐对，以避免重复提交。
            </li>
            <li>
              数字签名：MD5
              算法可以⽤于⽣成数字签名，验证数据的完整性和不可抵赖性。
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-sm text-gray-500">
          首页 - 备案号： 京ICP备2023025512号-1 京公网安备11010502053694
        </footer>
      </div>
    </main>
  );
}

function Row({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy: (text: string) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-28 shrink-0">{label}</div>
      <div className="flex-1 min-h-[2.25rem] border rounded px-3 py-2 bg-white font-mono break-all">
        {value}
      </div>
      <button
        type="button"
        className="rounded bg-gray-600 px-3 py-2 text-white hover:bg-gray-700 active:bg-gray-800 disabled:opacity-50"
        onClick={() => onCopy(value)}
        disabled={!value}
      >
        复制
      </button>
    </div>
  );
}
