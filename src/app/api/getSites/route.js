import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
    const filePath = path.join(process.cwd(), 'src', 'app', 'files', 'sites.json');

    try {
        const rawData = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(rawData);
        console.log('data : ', data)
        // 假设JSON文件中有一个名为"navigation"的键，其值为地址列表
        const navigationList = data || [];
        return NextResponse.json(navigationList);
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`错误：文件 ${filePath} 未找到`);
        } else if (error instanceof SyntaxError) {
            console.error(`错误：文件 ${filePath} 不是有效的JSON格式`);
        } else {
            console.error(`未知错误：${error}`);
        }
        return NextResponse.json(error, {status: 500});
    }
}