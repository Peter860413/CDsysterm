import { fileURLToPath, URL } from 'node:url';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';
import { env } from 'process';

const isProduction = process.env.NODE_ENV === 'production'; // 🔥 確保生產環境時不使用 HTTPS 設定

// 設定 GitHub Pages 部署時的 `base`
const base = isProduction ? "/CDsysterm/" : "/";

const baseFolder =
    env.APPDATA !== undefined && env.APPDATA !== ''
        ? `${env.APPDATA}/ASP.NET/https`
        : `${env.HOME}/.aspnet/https`;

const certificateName = "cd.client";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

// 確保憑證資料夾存在
if (!fs.existsSync(baseFolder)) {
    fs.mkdirSync(baseFolder, { recursive: true });
}

// 產生 HTTPS 憑證（開發環境使用）
if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
    if (0 !== child_process.spawnSync('dotnet', [
        'dev-certs',
        'https',
        '--export-path',
        certFilePath,
        '--format',
        'Pem',
        '--no-password',
    ], { stdio: 'inherit', }).status) {
        throw new Error("Could not create certificate.");
    }
}

// 設定代理伺服器
const target = env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}`
    : env.ASPNETCORE_URLS
        ? env.ASPNETCORE_URLS.split(';')[0]
        : 'https://localhost:7269';

// 👉 **優化 Vite 設定**
export default defineConfig({
    plugins: [react()], // 🔥 移除重複的 `plugin()`
    base: "/CDsysterm/",
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/weatherforecast': {
                target,
                secure: false
            }
        },
        port: 61037,
        https: false
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true
    }
});
