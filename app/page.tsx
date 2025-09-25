"use client";

import { useState, useRef } from "react";
import CryptoJS from "crypto-js";

export default function MD5Tool() {
  const [activeTab, setActiveTab] = useState<"text" | "file">("text");
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const calculateMD5 = (input: string) => {
    return CryptoJS.MD5(input).toString();
  };

  const handleTextSubmit = () => {
    if (!text.trim()) {
      alert("请输入要计算MD5的文本");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      const md5Hash = calculateMD5(text);
      setResult(md5Hash);
      setIsLoading(false);
    }, 100);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setIsLoading(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const md5Hash = calculateMD5(content);
      setResult(md5Hash);
      setIsLoading(false);
    };
    reader.readAsText(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFileName(file.name);
      setIsLoading(true);

      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        const md5Hash = calculateMD5(content);
        setResult(md5Hash);
        setIsLoading(false);
      };
      reader.readAsText(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert("MD5值已复制到剪贴板");
  };

  const clearAll = () => {
    setText("");
    setResult("");
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            MD5 哈希计算工具
          </h1>
          <p className="text-gray-600">快速计算文本或文件的MD5哈希值</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* 标签页 */}
          <div className="flex border-b border-gray-200 mb-6">
            <button
              className={`tab ${activeTab === "text" ? "active" : ""}`}
              onClick={() => setActiveTab("text")}
            >
              文本输入
            </button>
            <button
              className={`tab ${activeTab === "file" ? "active" : ""}`}
              onClick={() => setActiveTab("file")}
            >
              文件上传
            </button>
          </div>

          {/* 文本输入模式 */}
          {activeTab === "text" && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">文本MD5计算</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    输入文本
                  </label>
                  <textarea
                    className="textarea"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="请输入要计算MD5的文本内容..."
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    className="btn"
                    onClick={handleTextSubmit}
                    disabled={isLoading}
                  >
                    {isLoading ? "计算中..." : "计算MD5"}
                  </button>
                  <button
                    className="btn bg-gray-500 hover:bg-gray-600"
                    onClick={clearAll}
                  >
                    清空
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 文件上传模式 */}
          {activeTab === "file" && (
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">文件MD5计算</h2>
              <div className="space-y-4">
                <div
                  className="file-upload"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="text-gray-600">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 mb-4"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="text-lg">点击选择文件或拖拽文件到此处</p>
                    <p className="text-sm text-gray-500 mt-2">
                      支持所有文本文件格式
                    </p>
                  </div>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".txt,.md,.json,.xml,.csv,.log,.html,.css,.js,.ts,.py,.java,.cpp,.c,.php,.rb,.go,.rs,.swift,.kt"
                />
                {fileName && (
                  <div className="text-sm text-gray-600">
                    已选择文件: <span className="font-medium">{fileName}</span>
                  </div>
                )}
                <button
                  className="btn bg-gray-500 hover:bg-gray-600"
                  onClick={clearAll}
                >
                  清空
                </button>
              </div>
            </div>
          )}

          {/* 结果显示 */}
          {result && (
            <div className="card">
              <h3 className="text-lg font-semibold mb-4">MD5 结果</h3>
              <div className="result">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">MD5 哈希值:</span>
                  <button
                    className="text-sm text-blue-600 hover:text-blue-800"
                    onClick={copyToClipboard}
                  >
                    复制
                  </button>
                </div>
                <div className="text-lg font-mono break-all">{result}</div>
              </div>
            </div>
          )}

          {/* 使用说明 */}
          <div className="card bg-blue-50 border-blue-200">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">
              使用说明
            </h3>
            <div className="text-blue-700 space-y-2">
              <p>
                • <strong>文本模式:</strong> 直接在文本框中输入要计算MD5的内容
              </p>
              <p>
                • <strong>文件模式:</strong> 上传文件或拖拽文件到指定区域
              </p>
              <p>
                • <strong>支持格式:</strong> 文本文件、代码文件、配置文件等
              </p>
              <p>
                • <strong>安全性:</strong>{" "}
                所有计算在浏览器本地完成，不会上传到服务器
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

