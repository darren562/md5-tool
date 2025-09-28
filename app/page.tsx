"use client";

import { useState, useEffect } from "react";
import CryptoJS from "crypto-js";

export default function Home() {
  const [inputText, setInputText] = useState("");
  const [results, setResults] = useState<{
    l32: string;
    u32: string;
    l16: string;
    u16: string;
  } | null>(null);

  const handleEncrypt = () => {
    const text = inputText.trim();
    console.log("输入文本:", text);

    if (!text) {
      alert("请输入内容");
      return;
    }

    const h32 = CryptoJS.MD5(text).toString();
    const h16 = h32.substr(8, 16);

    console.log("MD5结果:", { h32, h16 });

    const newResults = {
      l32: h32,
      u32: h32.toUpperCase(),
      l16: h16,
      u16: h16.toUpperCase(),
    };

    console.log("设置结果:", newResults);
    setResults(newResults);
  };

  const handleCopy = async (text: string, buttonElement: HTMLButtonElement) => {
    try {
      await navigator.clipboard.writeText(text);
      const originalText = buttonElement.textContent;
      buttonElement.textContent = "已复制";
      buttonElement.classList.add("ok");
      setTimeout(() => {
        buttonElement.textContent = originalText;
        buttonElement.classList.remove("ok");
      }, 1200);
    } catch (err) {
      console.error("复制失败:", err);
    }
  };

  return (
    <div className="box">
      <h1>MD5 在线加密</h1>
      <textarea
        id="txt"
        placeholder="请输入要加密的文本……"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <div>本工具仅在浏览器本地计算，不会上传任何内容，可放心使用。</div>
      <button className="btn" onClick={handleEncrypt}>
        加密
      </button>

      {results && (
        <div id="res" className="result">
          <div className="row">
            <span>32位小写：</span>
            <span id="l32" className="hash">
              {results.l32}
            </span>
            <button
              className="copy"
              onClick={(e) => handleCopy(results.l32, e.currentTarget)}
              id="copy-l32"
            >
              复制
            </button>
          </div>
          <div className="row">
            <span>32位大写：</span>
            <span id="u32" className="hash">
              {results.u32}
            </span>
            <button
              className="copy"
              onClick={(e) => handleCopy(results.u32, e.currentTarget)}
              id="copy-u32"
            >
              复制
            </button>
          </div>
          <div className="row">
            <span>16位小写：</span>
            <span id="l16" className="hash">
              {results.l16}
            </span>
            <button
              className="copy"
              onClick={(e) => handleCopy(results.l16, e.currentTarget)}
              id="copy-l16"
            >
              复制
            </button>
          </div>
          <div className="row">
            <span>16位大写：</span>
            <span id="u16" className="hash">
              {results.u16}
            </span>
            <button
              className="copy"
              onClick={(e) => handleCopy(results.u16, e.currentTarget)}
              id="copy-u16"
            >
              复制
            </button>
          </div>
        </div>
      )}

      {/* MD5 介绍 */}
      <div className="intro">
        <h2>MD5 是什么？</h2>
        <p>
          MD5（Message-Digest Algorithm 5）由 Ronald Rivest 于 1991
          年提出，可将任意长度数据映射为 128 位二进制，通常用 32
          个十六进制字符表示。它具有雪崩效应，即使原文仅改动 1
          bit，输出也会完全不同，因此曾广泛用于文件完整性校验、数字签名与密码存储。然而随着算力提升，MD5
          的碰撞已被成功构造，不再适合高安全场景，但仍在普通校验、去重、缓存键等低安全需求中大量存在。
        </p>
        <h2>MD5的特点</h2>
        <p>
          MD5（Message-Digest Algorithm
          5）是一种广泛使用的密码散列函数，用于生成一个128位（16字节）的散列值，以确保信息传输的完整性。以下是MD5的主要特点：
          <br />
          1.长度固定：无论输入数据的长度是多少，MD5的输出总是固定的128位（16字节）。
          <br></br>
          2.结果不可逆：从MD5的输出结果无法反推出原始数据，这意味着MD5是一种单向函数。
          <br></br>
          3.高度离散性：即使输入数据只改变一个位，输出的MD5值也会完全不同。
          <br></br>4.抗碰撞性：两个不同的数据生成相同的MD5值的概率非常低。
        </p>
        <h2>MD5的应用场景</h2>
        <p>
          用户密码保护：在数据库中存储用户密码时，通常存储的是密码的MD5值，而不是明文密码。当用户登录时，系统将输入的密码进行MD5加密，并与数据库中的MD5值进行比较。
          <br></br>
          文件传输完整性校验：在文件传输过程中，可以使用MD5校验文件的完整性，确保文件未被篡改。
          <br></br>
          数字签名：发布软件时，可以同时发布软件的MD5值，用户下载后可以通过MD5校验确保文件的完整性。
          <br></br>
          云盘秒传：在云盘上传大文件时，系统会先计算文件的MD5值，如果服务器上已有相同的MD5值，则直接使用已有文件，实现秒传。
          <br></br>
        </p>
        <h2>MD5的加密原理</h2>
        <p>
          数据填充：对输入的数据进行填充，使其长度变为N * 512 +
          448位，然后再补充64位，记录原始数据的长度。
          <br></br>
          标准幻数计算：使用四个标准幻数（A, B, C,
          D）进行多轮哈希运算，最终生成128位的MD5值。
        </p>
      </div>
    </div>
  );
}
